// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

// $ionicMaterialConfigProvider.enableForAllPlatforms();

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

	.run(function ($ionicPlatform) {
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
		});
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
					'menuContent': { templateUrl: 'templates/opac_search/library_layout.html', controller: 'layout_controller' }
				}
			})

			.state('app.layout', {
				url: '/layout',
				views: 
				{
					'menuContent': { templateUrl: 'templates/layout.html', controller: 'static_layout_controller' }
				}
			})

			.state('app.share', {
				url: '/share',
				views: {
					'menuContent': {
						templateUrl: 'templates/playlists.html',
						controller: 'PlaylistsCtrl'
					}
				}
			})

			.state('app.single', {
				url: '/playlists/:playlistId',
				views: {
					'menuContent': {
						templateUrl: 'templates/playlist.html',
						controller: 'PlaylistCtrl'
					}
				}
			});
		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/app');
	}]);
