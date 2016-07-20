var adminurl = "http://192.168.1.113:1337/";
var imgurl = adminurl + "upload/";
var imgpath = imgurl + "readFile";
var uploadurl = imgurl;

// if(isproduction)
// {
//   adminURL =  "http://www.wohlig.co.in/demo/index.php";
// }
// else {
//   adminURL = "http://localhost/demo/index.php";
// }

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Overview",
    classis: "active",
    anchor: "overview",
    subnav: []
  },
  {
    name: "Movies",
    classis: "active",
    anchor: "movies",
    subnav: []
  },

  {
    name: "Dharma TV",
    classis: "active",
    anchor: "dharma-tv",
    subnav: []
  },
  {
    name: "Dharma World",
    classis: "active",
    anchor: "dharma-world",
    subnav: []
  },{
    name: "News & Events",
    classis: "active",
    anchor: "news-events",
    subnav: []
  },{
    name: "Contact Us",
    classis: "active",
    anchor: "contact-us",
    subnav: []
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

    getMovieDetails: function(callback) {
        // console.log('form data: ', formData);
        $http({
            url: adminurl + 'movie/getMovieDetails',
            method: 'POST',
            withCredentials: true
        }).success(callback);
    },



  };
});
