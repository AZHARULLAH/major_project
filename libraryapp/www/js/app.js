// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

// $ionicMaterialConfigProvider.enableForAllPlatforms();

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic-material', 'ionMdInput', 'ngCordovaBeacon'])

	.run(function ($ionicPlatform, $ionicPopup) {
		$ionicPlatform.ready(function () {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}
			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
			}
			// Request Bluetooth
			cordova.plugins.diagnostic.isBluetoothAvailable(function (available) {
				console.log("Bluetooth is " + (available ? "available" : "not available"));
				if (!available) {
					cordova.plugins.diagnostic.setBluetoothState(function (available) {
						console.log("Bluetooth is " + (available ? "available2" : "not available2"));
						if (!available) {
							cordova.plugins.diagnostic.switchToBluetoothSettings();
						}
					}, function (error) {
						console.error("Theee following error occurred: " + error);
					}, true);
				}
			}, function (error) {
				console.error("The following error occurred: " + error);
			});
			cordova.plugins.diagnostic.registerBluetoothStateChangeHandler(function (state) {
				// "unknown", "resetting", "unsupported", "unauthorized", "powered_off", "powered_on"
				if (state == "powered_off") {
					cordova.plugins.diagnostic.setBluetoothState(function (available) {
						console.log("Bluetooth is " + (available ? "available2" : "not available2"));
						if (!available) {
							cordova.plugins.diagnostic.switchToBluetoothSettings();
						}
					}, function (error) {
						console.error("Theee following error occurred: " + error);
					}, true);
				}
			});

		});
		// Disable BACK button on home
		$ionicPlatform.registerBackButtonAction(function (event) {
			if (true) { // your check here
				$ionicPopup.confirm({
					title: 'System warning',
					template: 'are you sure you want to exit?'
				}).then(function (res) {
					if (res) {
						ionic.Platform.exitApp();
					}
				})
			}
		}, 100);
	})

	.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$stateProvider

			.state('app', {
				url: '/app',
				templateUrl: 'templates/menu.html',
				controller: 'AppCtrl'
			})

			.state('app.search',
			{
				url: '/search',
				views:
				{
					'menuContent': { templateUrl: 'templates/opac_search/opac_search.html', controller: 'searchBoxController' }
				}
			})

			.state('app.searchResults', 
			{
				url: '/searchResults',
				views:
				{
					'menuContent': { templateUrl: 'templates/opac_search/searchResult.html', controller: 'stateResultController' }
				},
  				params: 
				{
					'searchQuery': ''
  				}
			})

			.state('app.mapLayout', 
			{
				url: '/maplayout',
				views:
				{
					'menuContent': { templateUrl: 'templates/opac_search/library_layout.html', controller: 'mapController' }
				}
			})

			.state('app.layout', {
				url: '/layout',
				views: 
				{
					'menuContent': { templateUrl: 'templates/layout.html', controller: 'mapController' }
				}
			})

			.state('app.beacons', {
				url: '/beacons',
				views: 
				{
					'menuContent': { templateUrl: 'templates/beacons.html', controller: 'beaconController' }
				}
			})

			// .state('app.share', {
			// 	url: '/share',
			// 	views: {
			// 		'menuContent': {
			// 			templateUrl: 'templates/playlists.html',
			// 			controller: 'PlaylistsCtrl'
			// 		}
			// 	},
			// 	'fabContent': {
			// 		template: ''
			// 	}
			// })

			// .state('app.books', {
			// 	url: '/books',
			// 	views: {
			// 		'menuContent': {
			// 			templateUrl: 'templates/books.html',
			// 			controller: 'booksController'
			// 		}
			// 	}
			// })
			;
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/app/search');
	}]);