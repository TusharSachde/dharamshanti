angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider','wu.masonry'])

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
    .controller('DharmaWorldCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("dharma-world");
        $scope.menutitle = NavigationService.makeactive("Dharma World");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('NewsEventsCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("news-events");
        $scope.menutitle = NavigationService.makeactive("News Events");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.news = [{
            img: "img/dharma-world/d5.jpg",
            name: "Deepika scares me as an actor: Ranbir Kapoor",
            date: "21 Mar 2016",
    desc: "New Delhi: Films as varied as Raajneeti, Rockstar, Yeh Jawaani Hai Deewani and Barfi! have been a window to his versatility. But Ranbir Kapoor says his Tamasha ..."

        }, {
            img: "img/dharma-world/d6.jpg",
            name: "Varun Dhawan shares picture of Dharma Productions new office",
            date: "21 Mar 2016",
            desc: "After four years, Varun Dhawan is back at Dharma’s office. Though everything remains the same, the office is now a new place for all those who work there. "

        }, {
            img: "img/dharma-world/d7.jpg",
            name: "Bahubali bags The Best Film Of 2015 National Award",
            date: "21 Mar 2016",
            desc: "SS Rajamouli's Bahubali: The Beginning (also spelt as Baahubali), starring Prabhas and Rana Daggubati, has won the Best Feature Film at the 63rd National Film Award (NFA). "

        }, {
            img: "img/dharma-world/d8.jpg",
            name: "Dharma production hints at first ever love franchise",
            date: "21 Mar 2016",
            desc: "Best known for producing films that grab the beauty of exotic locales across the globe and intricately weaving romance, Dharma Productions has hinted at a sequel to Bollywood’s first ever love franchise."

        }, {
            img: "img/dharma-world/d9.jpg",
            name: "Ranbir Kapoor to promote ‘Yeh Jawaani Hai Deewani’ in Russia",
            date: "21 Mar 2016",
            desc: "Mumbai: His grandfather, late cinema legend Raj Kapoor, continues to be a rage in Russia and now actor Ranbir Kapoor is set to promote his latest release ‘Yeh Jawaani Hai..."

        }, {
            img: "img/dharma-world/d10.jpg",
            name: "Arjun and SIddharth’s Dharma Office Darshan",
            date: "21 Mar 2016",
            desc: "Bollywood heartthrobs Arjun Kapoor and Sidharth Malhotra are spilling fun all over the new office of Karan Johar's Dharma Productions. "

        },{
            img: "img/dharma-world/d5.jpg",
            name: "Deepika scares me as an actor: Ranbir Kapoor",
            date: "21 Mar 2016",
            desc: "New Delhi: Films as varied as Raajneeti, Rockstar, Yeh Jawaani Hai Deewani and Barfi! have been a window to his versatility. But Ranbir Kapoor says his Tamasha ..."

        }, {
            img: "img/dharma-world/d6.jpg",
            name: "Varun Dhawan shares picture of Dharma Productions new office",
            date: "21 Mar 2016",
            desc: "After four years, Varun Dhawan is back at Dharma’s office. Though everything remains the same, the office is now a new place for all those who work there. "

        }, {
            img: "img/dharma-world/d7.jpg",
            name: "Bahubali bags The Best Film Of 2015 National Award",
            date: "21 Mar 2016",
            desc: "SS Rajamouli's Bahubali: The Beginning (also spelt as Baahubali), starring Prabhas and Rana Daggubati, has won the Best Feature Film at the 63rd National Film Award (NFA). "

        }]
    })
    .controller('DharmaTvCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("dharma-tv");
        $scope.menutitle = NavigationService.makeactive("Dharma Tv");
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
