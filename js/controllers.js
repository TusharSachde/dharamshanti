angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'wu.masonry'])

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
  .controller('TvInsideCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("tv-inside");
    $scope.menutitle = NavigationService.makeactive("TV Inside");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

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
  .controller('MovieInsideCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("movie-inside");
    $scope.menutitle = NavigationService.makeactive("Movie Inside");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

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
      "img/gallery/g10.jpg",
      "img/gallery/g11.jpg",
      "img/gallery/g12.jpg",
      "img/gallery/g13.jpg",
      "img/gallery/g14.jpg",
      "img/gallery/g15.jpg",
      "img/gallery/g16.jpg",
      "img/gallery/g17.jpg",
      "img/gallery/g18.jpg"
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
    $scope.upcomingrelease = [{
      img: "img/movie-banner-dam.jpg",
      date: "10 March 2017",
      director: "Shashank Khaitan",
      cast: "Alia Bhatt, Varun Dhawan"
    }, {
      img: "img/movie-banner-dam.jpg",
      date: "10 March 2017",
      director: "Shashank Khaitan",
      cast: "Alia Bhatt, Varun Dhawan"
    }]
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
    $scope.video = _.chunk($scope.video, 4);
    for (var i = 0; i < $scope.video.length; i++) {
      $scope.video[i] = _.chunk($scope.video[i], 4);
    }
    console.log($scope.video);
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
