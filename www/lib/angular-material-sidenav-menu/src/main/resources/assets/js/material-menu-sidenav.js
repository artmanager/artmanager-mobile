/**
 * Created by olimou on 21/06/15.
 */

var ngMaterialMenu = angular.module('ngMenuSidenav', []);

ngMaterialMenu.factory('serviceContent', function () {
    var list = [];
    return {
        register: function (id, show, state) {
            var items = {id: id, show: show, state: state};
            list.push(items);
        },
        hideAll: function () {
            for (var i = 0; i < list.length; i++) {
                if (list[i].state == true) {
                    list[i].show(false);
                    list[i].state = false;
                }
            }
        },
        generateID: function () {
            return list.length;
        },
        getByID: function (id) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == id) {
                    return list[i];
                }
            }
            return undefined;
        }
    };
});

ngMaterialMenu.directive('mdMenuSidenav', ['serviceContent', function (serviceContent) {
    return {
        transclude: true,
        link: function () {

        },
        template: "<div flex layout='row'><div flex ng-transclude=''></div></div>"
    };
}]);

ngMaterialMenu.directive('mdToogleMenu', ['serviceContent', function (serviceContent) {
    return {
        link: function (scope, element) {
            var id = serviceContent.generateID();

            element.on('click', function () {
                var service = serviceContent.getByID(id);

                if (service) {
                    if (service.state) {
                        serviceContent.hideAll();
                        service.show(false);
                        service.state = false;
                    } else {
                        serviceContent.hideAll();
                        service.show(true);
                        service.state = true;
                    }
                }
            })
        }
    }
}]);

ngMaterialMenu.directive('mdMenuSidenavItem', [function () {
    return {
        transclude: true,
        link: function ($scope, element, attr) {

        },
        template: function (elem, attr) {
            var template = "<div flex layout='column' ng-transclude=''></div>";
            return template;
        }
    }
}]);

ngMaterialMenu.directive('mdMenuSidenavContent', ['serviceContent', function (serviceContent) {
    return {
        transclude: true,
        link: function ($scope, element, attr) {
            var show = function (v) {
                if (!v) {
                    element.css("max-height", '0px');
                } else {
                    element.css("max-height", element[0].scrollHeight + 'px');
                }
            };

            show(false);

            serviceContent.register(serviceContent.generateID(), show, false);
        },
        template: function () {
            return "<div layout='column' ng-transclude></div>"
        }
    }
}]);

ngMaterialMenu.directive('mdMenuSidenavTitle', function () {
    return {
        transclude: true,
        link: function (scope, element) {

        },
        template: function (elem, attr) {
            var template = "<div flex layout='row' ng-transclude></div>";
            return template;
        }
    }
});

ngMaterialMenu.directive('mdMenuSidenavSubitem', function () {
    return {
        transclude: true,
        link: function (scope, element) {

        },
        template: function (elem, attr) {
            return "<div layout='row'>" +
                "<div flex=15></div>" +
                "<div flex ng-transclude>" +
                "</div></div>"
        }
    }
});