angular.module("rt.importscope", ["ui.router"])
    .factory("findScope", ["$rootElement", function ($rootElement) {
        var root = angular.element($rootElement);

        return function findScope(name) {
            var views = root.find("ui-view, [ui-view]");
            for (var i = 0; i < views.length; i++) {
                var el = angular.element(views[i]);
                var data = el.data("$uiView");
                if (data && data.name === name) {
                    return el.children().scope();
                }
            }
            return null;
        };
    }])
    .directive("importScope", ["$compile", "$animate", "$rootElement", "$timeout", "findScope", function ($compile, $animate, $rootElement, $timeout, findScope) {
        // Trim polyfill for old browsers (instead of jQuery)
        // Based on AngularJS-v1.2.2 (angular.js#620)
        var trim = (function () {
            if (!String.prototype.trim) {
                return function (value) {
                    return (typeof value === "string") ? value.replace(/^\s*/, "").replace(/\s*$/, "") : value;
                };
            }
            return function (value) {
                return (typeof value === "string") ? value.trim() : value;
            };
        })();

        return {
            terminal: true,
            compile: function compile(el) {
                var content = trim(el.html());

                return {
                    post: function (scope, element, attrs) {
                        // Stops the progation of the inheritedData("$uiView") call inside ui-sref.
                        // Without this ui-sref would use an incorrect base state, which breaks relative references.
                        el.data("$uiView", {});

                        var viewName = attrs.importScope;
                        var currentScope = null;

                        function update() {
                            var parentScope = findScope(viewName);
                            var targetScope = parentScope || scope;

                            if (targetScope !== currentScope) {
                                var newWrapper = angular.element("<span>" + content + "</span>");
                                $compile(newWrapper.contents())(targetScope);
                                var oldContents = element.contents();
                                var newContents = newWrapper.contents();
                                $animate.enter(newContents, element);
                                $animate.leave(oldContents);
                                currentScope = targetScope;
                            }
                        }

                        scope.$watch(update);
                    }
                };
            }
        };
    }]);
