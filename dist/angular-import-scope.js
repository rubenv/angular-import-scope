(function () {
  'use strict';
  angular.module('rt.importscope', ['ui.router']).directive('importScope', [
    '$rootElement',
    '$timeout',
    function ($rootElement, $timeout) {
      return {
        scope: true,
        link: function (scope, element, attrs) {
          var viewName = attrs.importScope;
          var root = angular.element($rootElement);
          var originalParent = scope.__proto__;
          function findScope(name) {
            var views = root.find('ui-view, [ui-view]');
            for (var i = 0; i < views.length; i++) {
              var el = angular.element(views[i]);
              var data = el.data('$uiView');
              if (data && data.name === name) {
                return el.children().scope();
              }
            }
            return null;
          }
          scope.$on('$stateChangeStart', function () {
            scope.__proto__ = originalParent;
          });
          scope.$on('$stateChangeSuccess', function () {
            $timeout(function () {
              var parentScope = findScope(viewName);
              if (!parentScope) {
                return;
              }
              scope.__proto__ = parentScope;
            });
          });
        }
      };
    }
  ]);
}());