(function () {
  'use strict';
  angular.module('rt.importscope', ['ui.router']).directive('importScope', [
    '$rootElement',
    function ($rootElement) {
      return {
        scope: true,
        link: function (scope, element, attrs) {
          var viewName = attrs.importScope;
          var root = angular.element($rootElement);
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
          function reparent(parent, child) {
            child.$parent = parent;
            child.__proto__ = parent;
          }
          scope.$on('$stateChangeSuccess', function () {
            var parentScope = findScope(viewName);
            if (!parentScope) {
              return;
            }
            reparent(parentScope, scope);
          });
        }
      };
    }
  ]);
}());