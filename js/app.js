// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'pascalprecht.translate',
  'angulartics',
  'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
    url: "/",
    templateUrl: "views/template.html",
    controller: 'HomeCtrl'
  })
    .state('movies', {
    url: "/movies",
    templateUrl: "views/template.html",
    controller: 'MoviesCtrl'
  })
    .state('awards', {
    url: "/",
    templateUrl: "views/template.html",
    controller: 'AwardsCtrl'
  })
    .state('dharma-tv', {
    url: "/",
    templateUrl: "views/template.html",
    controller: 'DharmaTvCtrl'
  })
    .state('tv-inside', {
    url: "/",
    templateUrl: "views/template.html",
    controller: 'TvInsideCtrl'
  })
    .state('dharma-world', {
    url: "/",
    templateUrl: "views/template.html",
    controller: 'DharmaWorldCtrl'
  })
    .state('news-events', {
    url: "/",
    templateUrl: "views/template.html",
    controller: 'NewsEventsCtrl'
  })
    .state('dharma-journey', {
    url: "/dharma-journey",
    templateUrl: "views/template.html",
    controller: 'DharmaJourneyCtrl'
  })
    .state('contact-us', {
    url: "/",
    templateUrl: "views/template.html",
    controller: 'ContactUsCtrl'
  })
    .state('movie-inside', {
    url: "/",
    templateUrl: "views/template.html",
    controller: 'MovieInsideCtrl'
  })
    .state('overview', {
    url: "/",
    templateUrl: "views/template.html",
    controller: 'OverviewCtrl'
  });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});
firstapp.directive('fancybox', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            $element = $(element);
            console.log("Checking Fancybox");
            setTimeout(function() {
                $(".various").fancybox({
                    maxWidth: 800,
                    maxHeight: 600,
                    fitToView: false,
                    width: '70%',
                    height: '70%',
                    autoSize: false,
                    closeClick: false,
                    openEffect: 'none',
                    closeEffect: 'none'
                });
            }, 100);
        }
    };
});
firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
               target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});


firstapp.config(function ($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
