angular.module('app.controllers', [])
  
.controller('mapCtrl', function($scope) {
	
var init = function() { 
 navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      //$scope.positions.push({lat: pos.k,lng: pos.B});
      //console.log(pos);
      $scope.map.setCenter(pos);
    });
}
  
})
   
.controller('homeCtrl', function($scope) {

})
   
.controller('shareGiveBacksCtrl', function($scope,$state, $rootScope, $ionicLoading) {

$scope.capture = function() {
  navigator.camera.getPicture(function(imageURI) {

    // imageURI is the URL of the image that we can use for
    // an <img> element or backgroundImage.

  }, function(err) {

    // Ruh-roh, something bad happened

  }, cameraOptions);
};

$scope.post = function() {

            $scope.loading = $ionicLoading.show({
            content: 'Logging in',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });

        var post = new Parse.Object("Post");
        post.set("message",$scope.post.message);
        //post.set("user",$rootScope.user);
        post.save(null, {
			  success: function(post) {
			    // Execute any logic that should take place after the object is saved.
			    $ionicLoading.hide();
			    alert('New object created with objectId: ');
			  },
			  error: function(post, error) {
			    // Execute any logic that should take place if the save fails.
			    // error is a Parse.Error with an error code and message.
			    $ionicLoading.hide();
                alert('Failed to create new object, with error code: ');
			  }
			});

    	};

$scope.uploadFromGallary = function() {
    var options = {
   maximumImagesCount: 10,
   width: 800,
   height: 800,
   quality: 80
  };

  $cordovaImagePicker.getPictures(options)
    .then(function (results) {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
    }, function(error) {
      // error getting photos
    });
};

})
      
.controller('notificationsCtrl', function($scope) {

})
   
.controller('suggestGiveBacksCtrl', function($scope) {

})
   
.controller('profileCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope, $state, $rootScope, $ionicLoading) {
    $scope.user = {
        username: null,
        password: null
    };

    $scope.error = {};

    $scope.login = function() {
        $scope.loading = $ionicLoading.show({
            content: 'Logging in',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });

        var user = $scope.user;
        Parse.User.logIn(('' + user.username).toLowerCase(), user.password, {
            success: function(user) {
                $ionicLoading.hide();
                $rootScope.user = user;
                $rootScope.isLoggedIn = true;
                $state.go('tab.map', {
                    clear: true
                });
            },
            error: function(user, err) {
                $ionicLoading.hide();
                // The login failed. Check error to see why.
                if (err.code === 101) {
                    $scope.error.message = 'Invalid login credentials';
                } else {
                    $scope.error.message = 'An unexpected error has ' +
                        'occurred, please try again.';
                }
                $scope.$apply();
            }
        });
    };

    $scope.forgot = function() {
        $state.go('forgot');
    };
})
   
.controller('signupCtrl', function($scope, $state, $ionicLoading, $rootScope) {
    $scope.user = {};
    $scope.error = {};

    $scope.signup = function() {

        // TODO: add age verification step

        $scope.loading = $ionicLoading.show({
            content: 'Sending',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });

        var user = new Parse.User();
        user.set("username", $scope.user.username);
        user.set("password", $scope.user.password);
        user.set("email", $scope.user.email);

        user.signUp(null, {
            success: function(user) {
                $ionicLoading.hide();
                $rootScope.user = user;
                $rootScope.isLoggedIn = true;
                $state.go('tab.map', {
                    clear: true
                });
            },
            error: function(user, error) {
                $ionicLoading.hide();
                if (error.code === 125) {
                    $scope.error.message = 'Please specify a valid email ' +
                        'address';
                } else if (error.code === 202) {
                    $scope.error.message = 'The email address is already ' +
                        'registered';
                } else {
                    $scope.error.message = error.message;
                }
                $scope.$apply();
            }
        });
    };
})

 

 .controller('welcomeCtrl', function($scope, $state, $rootScope, $ionicHistory, $stateParams) {
    if ($stateParams.clear) {
        $ionicHistory.clearHistory();
        $ionicHistory.clearCache();
    }

    $scope.login = function() {
        $state.go('login');
    };

    $scope.signUp = function() {
        $state.go('signup');
    };
        
    if ($rootScope.isLoggedIn) {
        $state.go('tab.home');
    }else {
    	 $state.go('tab.map'); //TODO login
    }
})