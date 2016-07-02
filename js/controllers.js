angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file

    console.log("Testing Consoles");

    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.mySlides = [
        'img/banners/slide1.jpg',
        'img/banners/slide1.jpg'
    ];
    $scope.movie = [
        'img/movie/m1.jpg',
        'img/movie/m2.jpg',
        'img/movie/m3.jpg',
        'img/movie/m4.jpg',
        'img/movie/m5.jpg'
    ];
    $scope.video = [{
        img: "img/video/v1.jpg",
        name: "Director S.S. Rajamouli tells us why Katappa killed Bahubali"

    }, {
        img: "img/video/v2.jpg",
        name: "Kapoor & Sons | The Funny One: Fawad Khan"

    }, {
        img: "img/video/v3.jpg",
        name: "Arjun fights with his Bai? | Movie Review | Kapoor & Sons | Sidharth..."

    }, {
        img: "img/video/v4.jpg",
        name: "Kapoor & Sons | Rahul Meets Tia | Dialogue Promo | Fawad Khan..."

    }, {
        img: "img/video/v1.jpg",
        name: "Director S.S. Rajamouli tells us why Katappa killed Bahubali"

    }, {
        img: "img/video/v2.jpg",
        name: "Kapoor & Sons | The Funny One: Fawad Khan"

    }, {
        img: "img/video/v3.jpg",
        name: "Arjun fights with his Bai? | Movie Review | Kapoor & Sons | Sidharth..."

    }, {
        img: "img/video/v4.jpg",
        name: "Kapoor & Sons | Rahul Meets Tia | Dialogue Promo | Fawad Khan..."

    }]
    $scope.news = [{
        img: "img/news/n1.jpg",
        name: "Varun Dhawan shares picture of Dharma Productions new office",
        date: "21 Mar 2016",
        desc: "After four years, Varun Dhawan is back at Dharma’s office. Though everything remains the same, the office is now a new place for all those who work there."

    }, {
        img: "img/news/n2.jpg",
        name: "Bahubali bags The Best Film Of 2015 National Award",
        date: "21 Mar 2016",
        desc: "SS Rajamouli's Bahubali: The Beginning (also spelt as Baahubali), starring Prabhas and Rana Daggubati, has won the Best Feature Film at the 63rd National Film Award (NFA). "

    }, {
        img: "img/news/n3.jpg",
        name: "Varun Dhawan shares picture of Dharma Productions new office",
        date: "21 Mar 2016",
        desc: "After four years, Varun Dhawan is back at Dharma’s office. Though everything remains the same, the office is now a new place for all those who work there."

    }, {
        img: "img/news/n1.jpg",
        name: "Varun Dhawan shares picture of Dharma Productions new office",
        date: "21 Mar 2016",
        desc: "After four years, Varun Dhawan is back at Dharma’s office. Though everything remains the same, the office is now a new place for all those who work there."

    }, {
        img: "img/news/n2.jpg",
        name: "Varun Dhawan shares picture of Dharma Productions new office",
        date: "21 Mar 2016",
        desc: "After four years, Varun Dhawan is back at Dharma’s office. Though everything remains the same, the office is now a new place for all those who work there."

    }, {
        img: "img/news/n3.jpg",
        name: "Varun Dhawan shares picture of Dharma Productions new office",
        date: "21 Mar 2016",
        desc: "After four years, Varun Dhawan is back at Dharma’s office. Though everything remains the same, the office is now a new place for all those who work there."

    }, {
        img: "img/news/n1.jpg",
        name: "Varun Dhawan shares picture of Dharma Productions new office",
        date: "21 Mar 2016",
        desc: "After four years, Varun Dhawan is back at Dharma’s office. Though everything remains the same, the office is now a new place for all those who work there."

    }, {
        img: "img/news/n2.jpg",
        name: "Varun Dhawan shares picture of Dharma Productions new office",
        date: "21 Mar 2016",
        desc: "After four years, Varun Dhawan is back at Dharma’s office. Though everything remains the same, the office is now a new place for all those who work there."

    }]
})

.controller('headerctrl', function($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
    })
    .controller('OverviewCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("overview");
        $scope.menutitle = NavigationService.makeactive("Overview");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('AwardsCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("awards");
        $scope.menutitle = NavigationService.makeactive("Awards");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('MoviesCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("movies");
        $scope.menutitle = NavigationService.makeactive("Movies");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.video = [{
            img: "img/movie/m1.jpg",
            name: "Ae Dil hai mushkil"

        }, {
            img: "img/movie/m2.jpg",
            name: "BAAR BAAR DEKHO"

        }, {
            img: "img/movie/m3.jpg",
            name: "BADRINATH KI DULHANIYA"

        }, {
            img: "img/movie/m4.jpg",
            name: "RAM LAKHAN"

        }, {
            img: "img/movie/m5.jpg",
            name: "ok jaanu"

        }, {
            img: "img/movie/m1.jpg",
            name: "Ae Dil hai mushkil"

        }, {
            img: "img/movie/m2.jpg",
            name: "BAAR BAAR DEKHO"

        }, {
            img: "img/movie/m3.jpg",
            name: "BADRINATH KI DULHANIYA"

        }, {
            img: "img/movie/m4.jpg",
            name: "RAM LAKHAN"

        }, {
            img: "img/movie/m5.jpg",
            name: "ok jaanu"

        }]

        $scope.allvideos = [{
            img: "img/movie/m1.jpg",
            name: "Ae Dil hai mushkil"

        }, {
            img: "img/movie/m2.jpg",
            name: "BAAR BAAR DEKHO"

        }, {
            img: "img/movie/m3.jpg",
            name: "BADRINATH KI DULHANIYA"

        }, {
            img: "img/movie/m4.jpg",
            name: "RAM LAKHAN"

        }, {
            img: "img/movie/m5.jpg",
            name: "ok jaanu"

        }, {
            img: "img/movie/m1.jpg",
            name: "Ae Dil hai mushkil"

        }, {
            img: "img/movie/m2.jpg",
            name: "BAAR BAAR DEKHO"

        }, {
            img: "img/movie/m3.jpg",
            name: "BADRINATH KI DULHANIYA"

        }, {
            img: "img/movie/m4.jpg",
            name: "RAM LAKHAN"

        }, {
            img: "img/movie/m5.jpg",
            name: "ok jaanu"

        }]
        $scope.allvideos = _.chunk($scope.allvideos, 5);
    })

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };


})

;
