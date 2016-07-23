var adminurl = "http://104.199.151.75:82/";
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
            $http({
            url: adminurl + 'movie/getMovieDetails',
            method: 'POST',
            withCredentials: true
        }).success(callback);
    },
    getJourney: function(callback) {
            $http({
            url: adminurl + 'journey/getall',
            method: 'POST',
            withCredentials: true
        }).success(function(data) {
          var a = _.orderBy(data.data, ["date"], ["desc"]);
          _.each(a, function(n) {
            n.dateShow = moment(a.date).format("D MMM YYYY");
          });
          a=_.reverse(_.toArray(_.groupBy(a, "year")));
          callback(a);
        });
    },
    getNews: function(callback) {

        $http({
            url: adminurl + 'News/getAll',
            method: 'POST',
            withCredentials: true
        }).success(callback);
    },
    subScribe: function(email ,callback) {
console.log(email);
        $http({
            url: adminurl + 'subscribe/saveData',
            method: 'POST',
            withCredentials: true,
            data:{"email":email}
        }).success(callback);
    },
    getAllDharmatv: function(callback) {

        $http({
            url: adminurl + 'Dharmatv/getAllDharmatv',
            method: 'POST',
            withCredentials: true
        }).success(callback);
    },
    getDharmatvOne: function(id, callback) {
           $http({
            url: adminurl + 'Dharmatv/getOne',
            method: 'POST',
            withCredentials: true,
            data: {
                _id: id
            }

        }).success(callback);
    },
    getAllUpcomingMovies: function(callback) {

        $http({
            url: adminurl + 'Movie/getAllUpcomingMovies',
            method: 'POST',
            withCredentials: true
        }).success(callback);
    },
    getAllRecentMovies: function(callback) {

        $http({
            url: adminurl + 'Movie/getAllRecentMovies',
            method: 'POST',
            withCredentials: true
        }).success(callback);
    },
    getMovieNews: function(id, callback) {
           $http({
            url: adminurl + 'Movie/getMovieNews',
            method: 'POST',
            withCredentials: true,
            data: {
                _id: id
            }

        }).success(callback);
    },
    getMovieGal: function(id, callback) {
           $http({
            url: adminurl + 'Movie/getMovieGal',
            method: 'POST',
            withCredentials: true,
            data: {
                _id: id
            }

        }).success(callback);
    },
    getMovieBehindTheScenes: function(id, callback) {
           $http({
            url: adminurl + 'Movie/getMovieBehindTheScenes',
            method: 'POST',
            withCredentials: true,
            data: {
                _id: id
            }

        }).success(callback);
    },
    getMovieVideo: function(id, callback) {
           $http({
            url: adminurl + 'Movie/getMovieVideo',
            method: 'POST',
            withCredentials: true,
            data: {
                _id: id
            }

        }).success(callback);
    },

    findOne: function(id, callback) {
           $http({
            url: adminurl + 'Movie/findOne',
            method: 'POST',
            withCredentials: true,
            data: {
                _id: id
            }

        }).success(callback);
    },
    getMovieSynopsisAndNote: function(id, callback) {
           $http({
            url: adminurl + 'Movie/getMovieSynopsisAndNote',
            method: 'POST',
            withCredentials: true,
            data: {
                _id: id
            }

        }).success(callback);
    },
    getMovieAwards: function(id, callback) {
           $http({
            url: adminurl + 'Movie/getMovieAwards',
            method: 'POST',
            withCredentials: true,
            data: {
                _id: id
            }

        }).success(callback);
    },
    getMovieCast: function(id, callback) {
           $http({
            url: adminurl + 'Movie/getMovieCast',
            method: 'POST',
            withCredentials: true,
            data: {
                _id: id
            }

        }).success(callback);
    },
    getMovieCrew: function(id, callback) {
           $http({
            url: adminurl + 'Movie/getMovieCrew',
            method: 'POST',
            withCredentials: true,
            data: {
                _id: id
            }

        }).success(callback);
    },
    getMovieWallpaper: function(id, callback) {
           $http({
            url: adminurl + 'Movie/getMovieWallpaper',
            method: 'POST',
            withCredentials: true,
            data: {
                _id: id
            }

        }).success(callback);
    },
    getNewsHome: function(request, callback) {
      console.log("myrequest",request);
           $http({
            url: adminurl + 'news/findlimited',
            method: 'POST',
            withCredentials: true,
            data:request
            }).success(callback);

    },






  };
});
