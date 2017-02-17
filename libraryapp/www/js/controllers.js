angular.module('starter.controllers', ['ionic'])

	.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

		// With the new view caching in Ionic, Controllers are only called
		// when they are recreated or on app start, instead of every page change.
		// To listen for when this page is active (for example, to refresh data),
		// listen for the $ionicView.enter event:
		//$scope.$on('$ionicView.enter', function(e) {
		//});

		// Form data for the login modal
		$scope.loginData = {};

		// Create the login modal that we will use later
		$ionicModal.fromTemplateUrl('templates/login.html', {
			scope: $scope
		}).then(function (modal) {
			$scope.modal = modal;
		});

		// Triggered in the login modal to close it
		$scope.closeLogin = function () {
			$scope.modal.hide();
		};

		// Open the login modal
		$scope.login = function () {
			$scope.modal.show();
		};

		// Perform the login action when the user submits the login form
		$scope.doLogin = function () {
			console.log('Doing login', $scope.loginData);

			// Simulate a login delay. Remove this and replace with your login
			// code if using a login system
			$timeout(function () {
				$scope.closeLogin();
			}, 1000);
		};
	})

	.controller('PlaylistsCtrl', function ($scope) {
		$scope.playlists = [
			{ title: 'Reggae', id: 1 },
			{ title: 'Chill', id: 2 },
			{ title: 'Dubstep', id: 3 },
			{ title: 'Indie', id: 4 },
			{ title: 'Rap', id: 5 },
			{ title: 'Cowbell', id: 6 }
		];
	})

	.controller('PlaylistCtrl', function ($scope, $stateParams) {
	})

	.controller('searchBoxController', function ($scope, $state) {
		
		$scope.doSearch = function(){
			var searchInputRaw = $scope.searchQueryInput;
			var searchInput = searchInputRaw.split(' ').join('+');
			console.log("data is", searchInput);
			$state.go('app.searchResults', { searchQuery: searchInput });
		}
	})

	.controller('stateResultController', function ($scope, $state, $stateParams, $http, baseURL) {

		$scope.searchQueryInput = $stateParams.searchQuery;
		console.log("again data is", $scope.searchQueryInput);
		console.log("base", baseURL);
		var searchResults = $http.get(baseURL + $scope.searchQueryInput)
			.success(function (data) {
				console.log(data[0]);
				$scope.books = data;
				// for(var i=0; i<data.length; i++)
				// {
				// 	$scope.bookTitle = data[i]['bookTitle'];
				// 	$scope.bookLink = data[i]['bookLink'];
				// 	$scope.bookAvailabilityStatus = data[i]['bookAvailabilityStatus'];
				// 	$scope.bookRack = data[i]['bookRack'];
				// }
			}).error(function (data) {
				console.log("Cannot contact the server, try again...");
			});

			$scope.storeRack = function(bookRack){
				 window.localStorage.setItem("rackNumber", bookRack);
				 console.log("Rack is", window.localStorage.getItem("rackNumber"));
				 $state.go('app.mapLayout');
			}

	})
	
	.controller('layout_controller', function($scope) {
		$scope.iframeURL = "templates/opac_search/assets/library_layout.html";
	})

	.controller('static_layout_controller', function($scope){
		$scope.iframeURL = "templates/opac_search/assets/library_layout.html";
	})

	;
