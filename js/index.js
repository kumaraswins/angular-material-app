angular
    .module('SampleAPP', ['ngAnimate', 'ngMaterial', 'ngMdIcons', 'ui.router','md.data.table'])
    .config(function ($mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/login");
    
        $stateProvider
        .state('login', {
                url: '/login',
               views: {                    
                    content: {
                        templateUrl: 'views/login.html'
                    }
                }
            })
            .state('dashboard', {
                url: '/dashboard',
                views: {
                    nav: {
                        templateUrl: 'navbar.html'
                    },
                    content: {
                        templateUrl: 'views/dashboard.html'
                    }
                }
            })
            .state('about', {
                url: '/about',
                views: {
                    nav: {
                        templateUrl: 'navbar.html'
                    },
                    content: {
                        templateUrl: 'about.html'
                    }
                }
            }).state('landingpage', {
                url: '/landingpage',
                views: {
                    content: {
                        templateUrl: 'landingpage.html'
                    }
                }
            });        

        $mdIconProvider
            .defaultIconSet("./lib/svg/avatars.svg", 128)
            .icon("menu", "./lib/svg/menu.svg", 24)
            .icon("share", "./lib/svg/share.svg", 24)
            .icon("google_plus", "./lib/svg/google_plus.svg", 512)
            .icon("hangouts", "./lib/svg/hangouts.svg", 512)
            .icon("twitter", "./lib/svg/twitter.svg", 512)
            .icon("phone", "./lib/svg/phone.svg", 512);
        $mdThemingProvider.theme('blue')
    });


angular
    .module('SampleAPP')
    .controller('MainController', [
          '$scope', '$rootScope', '$mdBottomSheet', '$mdSidenav', '$mdDialog', '$location', 'NavService',
          MainController
       ]);

function MainController($scope, $rootScope, $mdBottomSheet, $mdSidenav, $mdDialog, $location, NavService) {
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    $scope.sideMenu = NavService.getNavList();
    /**
     * Click function for the parent navigation click
     * @param {number} index gets the index of the current object click
     * @param {object}   oMenu gets the complete object for the clicked element
     */
    $scope.navClick = function (index, oMenu) {
            for (var i = 0; i < $scope.sideMenu.length; i++) {
                $scope.sideMenu[i].show = false;
                for (var j = 0; j < $scope.sideMenu[i].subMenu.length; j++) {
                    $scope.sideMenu[i].subMenu[j].show = false;
                }
            }
            oMenu.show = true;
        }
        /**
         * Click function for the child nav elements
         * @param {number} index gets the current index
         * @param {object}   oSub  sub menu object
         * @param {object}   oMenu parent menu object
         */
    $scope.subNavClick = function (index, oSub, oMenu) {
        for (var i = 0; i < oMenu.subMenu.length; i++) {
            oMenu.subMenu[i].show = false;
        }
        oSub.show = true;
    }

}