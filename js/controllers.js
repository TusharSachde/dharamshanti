angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'wu.masonry', 'ksSwiper', 'imageupload', 'ui.select'])

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
    $scope.mySlide = [
        'img/banners/mob-slider.jpg',
        'img/banners/mob-slider.jpg'
    ];
    NavigationService.getAllUpcomingMovies(function(data) {
        $scope.AllUpcomingMovies = data.data;
        console.log('AllUpcomingMovies', $scope.AllUpcomingMovies);
    });
    NavigationService.getAllRecentMovies(function(data) {
        $scope.AllRecentMovies = data.data;
        console.log('AllRecentMovies', $scope.AllRecentMovies);
    });



    $scope.movie = [{
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
    }];
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

    }];
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

    }];
    NavigationService.getNews(function(data) {
        $scope.News = data.data;
        console.log('News', $scope.News);
    });

    $scope.subscribe = {};
    $scope.subscribe.email = "";
    $scope.checkEmail = false;
  $scope.subscribeEmail = false;
    $scope.subscribe = function(email,form) {
      if(email && email!='' && form.$valid){
        console.log('erdtfgh',email.length);
        NavigationService.subScribe(email, function(data) {
            if (!data.value) {
                if ($scope.subscribe.email) {
                    $scope.checkEmail = true;
                    $scope.subscribeEmail = false;
                }
            } else {
                $scope.subscribeEmail = true;
                $scope.checkEmail = false;
            }
            console.log(email);
            $scope.subscribe.email = "";
        });
      }

    };






    $scope.tabs = 'upcoming';
    $scope.classp = 'active-tab';
    $scope.classv = '';


    $scope.tabchanges = function(tabs, a) {
        //        console.log(tab);
        $scope.tabs = tabs;
        if (a == 1) {

            $scope.classp = "active-tab";
            $scope.classv = '';

        } else {

            $scope.classp = '';
            $scope.classv = "active-tab";
        }
    };

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
    .controller('DharmaJourneyCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("dharma-journey");
        $scope.menutitle = NavigationService.makeactive("Dharma Journey");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('TvInsideCtrl', function($scope, TemplateService, NavigationService,$stateParams) {
        $scope.template = TemplateService.changecontent("tv-inside");
        $scope.menutitle = NavigationService.makeactive("TV Inside");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        NavigationService.getDharmatvOne($stateParams.id, function(data) {
            console.log('getDharmatvOne',data);
              $scope.allvideos = data.data;
        })



        $scope.allvideos = [{
            img: "img/tv/t1.jpg",
            name: "Dhivara Full Video Song Baahubali (Hindi) "
        }, {
            img: "img/tv/t2.jpg",
            name: "Making of Bahubali - Bull Fight Sequence"
        }, {
            img: "img/tv/t3.jpg",
            name: "Baahubali Trailer | Prabhas,Rana Daggubati, Anushka, Tama..."
        }, {
            img: "img/tv/t4.jpg",
            name: "bahubali song Kaun Hain Voh Singers: Kailash Kher..."
        }, {
            img: "img/tv/t5.jpg",
            name: "Pacha Bottasi Full Video Song || Baahubali (Telugu) || Prabhas..."
        }, {
            img: "img/tv/t6.jpg",
            name: "Manohari song from Bahubali"
        }]

    })
    .controller('MovieInsideCtrl', function($scope, TemplateService, NavigationService, $uibModal,$stateParams,$filter  ) {
        $scope.template = TemplateService.changecontent("movie-inside");
        $scope.menutitle = NavigationService.makeactive("Movie Inside");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.animationsEnabled = true;

        NavigationService.getMovieNews($stateParams.id, function(data) {
            console.log('getMovieNews',data);
              $scope.movieNews = data.data;
        });
        NavigationService.getMovieGal($stateParams.id, function(data) {
            console.log('MovieGal1',data);
              $scope.MovieGal = data.data.gallery;
              console.log($scope.MovieGal);
              // $scope.MovieGal10 = _.chunk($scope.MovieGal, 4);
              // console.log('chunk',$scope.MovieGal10);
        });
        NavigationService.getMovieBehindTheScenes($stateParams.id, function(data) {
          $scope.movieBehindTheScenes = data.data.behindTheScenes;
              console.log('getMovieBehindTheScenes',$scope.movieBehindTheScenes);
        });
        NavigationService.getMovieVideo($stateParams.id, function(data) {
          $scope.movieVideo = data.data.videos;
          console.log('getMovieVideo',  $scope.movieVideo );
        });
        NavigationService.findOne($stateParams.id, function(data) {
          $scope.moviefindOne = data.data;
          $scope.moviefindOne.backgroundImage = $filter('uploadpath')($scope.moviefindOne.backgroundImage);

          console.log('moviefindOne',    $scope.moviefindOne );
        });
        NavigationService.getMovieSynopsisAndNote($stateParams.id, function(data) {
          $scope.movieSynopsisAndNote = data.data;
          console.log('movieSynopsisAndNote',  $scope.movieSynopsisAndNote );
        });

        NavigationService.getMovieAwards($stateParams.id, function(data) {
          $scope.MovieAwards = data.data.awards;
          console.log('MovieAwards',  $scope.MovieAwards );
        });




        $scope.tabing = [{
            name: "Synopsis",
            class: "classa",
            tab: "synopsis",
            id: "1"
        }, {
            name: "CAST & CREDITS",
            class: "classsb",
            tab: "cast",
            id: "2"
        }, {
            name: "News",
            class: "classc",
            tab: "news",
            id: "3"
        }, {
            name: "Gallery",
            class: "classd",
            tab: "gallery",
            id: "4"
        }, {
            name: "behind the scenes",
            class: "classe",
            tab: "scene",
            id: "5"
        }, {
            name: "VIDEOS",
            class: "classf",
            tab: "video",
            id: "6"
        }, {
            name: "WALLPAPERS",
            class: "classg",
            tab: "wallpapper",
            id: "7"
        }, {
            name: "AWARDS",
            class: "classh",
            tab: "awards",
            id: "8"
        }]
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                $('.back-to-top ').fadeIn();
            } else {
                $('.back-to-top ').fadeOut();
            }
        });

        $scope.open = function(size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'views/modal/modal.html',
                controller: 'MovieInsideCtrl',
                size: size,
                resolve: {
                    items: function() {
                        return $scope.items;
                    }
                }
            });

        };

        $scope.toggleAnimation = function() {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };


        $scope.accordian = [];
        $scope.accordian.push({
            isFirstOpen: true,
            isFirstDisabled: false
        });
        $scope.accordian.push({
            isFirstOpen: true,
            isFirstDisabled: false
        });
        $scope.accordian.push({
            isFirstOpen: true,
            isFirstDisabled: false
        });
        $scope.accordian.push({
            isFirstOpen: true,
            isFirstDisabled: false
        });
        $scope.accordian.push({
            isFirstOpen: true,
            isFirstDisabled: false
        });


        $scope.tabs = 'desktop';
        $scope.classp = 'active-list';
        $scope.classv = '';


        $scope.tabchanges = function(tabs, a) {
            //        console.log(tab);
            $scope.tabs = tabs;
            if (a == 1) {

                $scope.classp = "active-list";
                $scope.classv = '';

            } else {

                $scope.classp = '';
                $scope.classv = "active-list";
            }
        };


        $scope.tab = 'synopsis';
        $scope.classa = 'active-list';
        $scope.classb = '';
        $scope.classc = '';
        $scope.classd = '';
        $scope.classe = '';
        $scope.classf = '';
        $scope.classg = '';
        $scope.classh = '';

        $scope.tabchange = function(tab, a) {
            //        console.log(tab);
            $scope.tab = tab;
            if (a == 1) {

                $scope.classa = "active-list";
                $scope.classb = '';
                $scope.classc = '';
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classh = '';
            } else if (a == 2) {

                $scope.classa = '';
                $scope.classb = "active-list";
                $scope.classc = "";
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classh = '';
            } else if (a == 3) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "active-list";
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classh = '';
            } else if (a == 4) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "";
                $scope.classd = 'active-list';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classh = '';
            } else if (a == 5) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "";
                $scope.classd = '';
                $scope.classe = 'active-list';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classh = '';
            } else if (a == 6) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "";
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = 'active-list';
                $scope.classg = '';
                $scope.classh = '';
            } else if (a == 7) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "";
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = 'active-list';
                $scope.classh = '';
            } else if (a == 8) {

                $scope.classa = '';
                $scope.classb = '';
                $scope.classc = "";
                $scope.classd = '';
                $scope.classe = '';
                $scope.classf = '';
                $scope.classg = '';
                $scope.classh = 'active-list';
            }
        };

        $scope.cast = [{
            img: "img/cast/c1.png",
            name: "Ranbir Kapoor",
            nick: "BUNNY"
        }, {
            img: "img/cast/c2.png",
            name: "Deepika Padukone",
            nick: "NAINA"
        }, {
            img: "img/cast/c3.png",
            name: "Kalki Koechlin",
            nick: "ADITI"
        }, {
            img: "img/cast/c4.png",
            name: "Aditya Roy Kapur",
            nick: "AVI"
        }]
        $scope.gallery = [
            "img/gallery/g18.jpg",
            "img/gallery/g19.jpg",
            "img/gallery/g20.jpg",
            "img/gallery/g21.jpg",
            "img/gallery/g22.jpg",
            "img/gallery/g23.jpg",
            "img/gallery/g24.jpg",
            "img/gallery/g25.jpg",
            "img/gallery/g20.jpg"
        ]
        $scope.desktop = [
            "img/wallpapper/d1.jpg",
            "img/wallpapper/d2.jpg",
            "img/wallpapper/d3.jpg",
            "img/wallpapper/d4.jpg",
            "img/wallpapper/d5.jpg",
            "img/wallpapper/d6.jpg"

        ]
        $scope.mobile = [
            "img/wallpapper/m1.jpg",
            "img/wallpapper/m2.jpg",
            "img/wallpapper/m3.jpg",
            "img/wallpapper/m4.jpg",
            "img/wallpapper/m1.jpg",
            "img/wallpapper/m2.jpg",
            "img/wallpapper/m3.jpg",
            "img/wallpapper/m4.jpg"

        ]
        $scope.allvideos = [{
            img: "img/video/v5.jpg",
            name: "KABIRA SONG"
        }, {
            img: "img/video/v6.jpg",
            name: "BALAM PICHKARI SONG"
        }, {
            img: "img/video/v7.jpg",
            name: "GHAGRA SONG"
        }, {
            img: "img/video/v8.jpg",
            name: "BADTAMEEZ DIL SONG"
        }, {
            img: "img/video/v9.jpg",
            name: "ILAHI SONG"
        }, {
            img: "img/video/v10.jpg",
            name: "DILLIWAALI GIRLFRIEND SONG"
        }]
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

        }, {
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
    .controller('ContactUsCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("contact-us");
        $scope.menutitle = NavigationService.makeactive("Contact Us");
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

        $scope.countries = [ // Taken from https://gist.github.com/unceus/6501985
            {
                name: 'Kabhi Khushi Kabhi Gum',
                code: 'kkk'
            }, {
                name: 'Bahubali',
                code: 'BH'
            }, {
                name: 'Varun Dhawan',
                code: 'AA'
            }, {
                name: 'Deepika',
                code: 'D'
            }, {
                name: 'Ranbir Kapoor',
                code: 'RK'
            }
        ];
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

        }, {
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

        $scope.mySlides = [
            'img/video-play.jpg',
            'img/video-play.jpg'
        ];

        NavigationService.getAllDharmatv(function(data) {
            $scope.AllDharmatv = data.data;
            console.log('AllDharmatv', $scope.AllDharmatv);
        });

        $scope.video = [{
            img: "img/movie/m6.jpg",
            name: "Dhivara Full Video Song  Baahubali (Hindi) "

        }, {
            img: "img/movie/m7.jpg",
            name: "Making of Bahubali - Bull Fight Sequence"

        }, {
            img: "img/movie/m8.jpg",
            name: "Baahubali Trailer | Prabhas, Rana Daggubati, Anushka, Tama..."

        }, {
            img: "img/movie/m9.jpg",
            name: "Making Of Bahubali VFX Work On Bull Fight With Rana..."

        }, {
            img: "img/movie/m6.jpg",
            name: "Dhivara Full Video Song  Baahubali (Hindi) "

        }, {
            img: "img/movie/m7.jpg",
            name: "Making of Bahubali - Bull Fight Sequence"

        }, {
            img: "img/movie/m8.jpg",
            name: "Baahubali Trailer | Prabhas, Rana Daggubati, Anushka, Tama..."

        }, {
            img: "img/movie/m9.jpg",
            name: "Making Of Bahubali VFX Work On Bull Fight With Rana..."


        }, {
            img: "img/movie/m6.jpg",
            name: "Dhivara Full Video Song  Baahubali (Hindi) "

        }, {
            img: "img/movie/m8.jpg",
            name: "Baahubali Trailer | Prabhas, Rana Daggubati, Anushka, Tama..."


        }]

    })
    .controller('MoviesCtrl', function($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("movies");
        $scope.menutitle = NavigationService.makeactive("Movies");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        // $scope.upcomingrelease = [{
        //     img: "img/movie-banner-dam.png",
        //     date: "10 March 2017",
        //     director: "Shashank Khaitan",
        //     cast: "Alia Bhatt, Varun Dhawan"
        // }, {
        //     img: "img/movie-banner-dam.png",
        //     date: "10 March 2017",
        //     director: "Shashank Khaitan",
        //     cast: "Alia Bhatt, Varun Dhawan"
        // }]
        // NavigationService.getMovieDetails(function(data) {
        //   $scope.MovieDetails = data.data;
        //   console.log('MovieDetails', $scope.MovieDetails);
        //   console.log('$scope.MovieDetails',$scope.MovieDetails.upcoming);
        //   });



        $scope.video = [{
            img: "img/movie/m11.jpg",
            name: "Ae Dil hai mushkil"

        }, {
            img: "img/movie/m11.jpg",
            name: "BAAR BAAR DEKHO"

        }, {
            img: "img/movie/m11.jpg",
            name: "BADRINATH KI DULHANIYA"

        }, {
            img: "img/movie/m11.jpg",
            name: "RAM LAKHAN"

        }, {
            img: "img/movie/m11.jpg",
            name: "ok jaanu"

        }, {
            img: "img/movie/m11.jpg",
            name: "Ae Dil hai mushkil"

        }, {
            img: "img/movie/m11.jpg",
            name: "BAAR BAAR DEKHO"

        }, {
            img: "img/movie/m11.jpg",
            name: "BADRINATH KI DULHANIYA"

        }]
        $scope.video = _.chunk($scope.video, 4);
        for (var i = 0; i < $scope.video.length; i++) {
            $scope.video[i] = _.chunk($scope.video[i], 4);
        }
        var array = [];
        NavigationService.getMovieDetails(function(data) {
            $scope.MovieDetails = data.data;
            $scope.movieList = _.groupBy($scope.MovieDetails, "releaseType");
            array = _.cloneDeep($scope.movieList.past);
            $scope.movieList.recent = _.chunk($scope.movieList.recent, 4);
            for (var i = 0; i < $scope.movieList.recent.length; i++) {
                $scope.movieList.recent[i] = _.chunk($scope.movieList.recent[i], 4);
            }
            $scope.movieList.past = $scope.movieList.past.splice(0, 10);
            $scope.movieList.past = _.chunk($scope.movieList.past, 5);
        });
        $scope.viewAll = function() {
            $scope.movieList.past = _.chunk(array, 5);
        }
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
