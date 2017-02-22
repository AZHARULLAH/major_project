angular.module('starter.controllers', ['ionic'])

	.config(function ($sceDelegateProvider) {
		$sceDelegateProvider.resourceUrlWhitelist(['**']);
	})

	.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

		$.noConflict();

		$scope.hideNavBar = function () {
			document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
		};

		$scope.showNavBar = function () {
			document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
		};

		$scope.noHeader = function () {
			var content = document.getElementsByTagName('ion-content');
			for (var i = 0; i < content.length; i++) {
				if (content[i].classList.contains('has-header')) {
					content[i].classList.toggle('has-header');
				}
			}
		};

		$scope.setExpanded = function (bool) {
			$scope.isExpanded = bool;
		};

		$scope.setHeaderFab = function (location) {
			var hasHeaderFabLeft = false;
			var hasHeaderFabRight = false;

			switch (location) {
				case 'left':
					hasHeaderFabLeft = true;
					break;
				case 'right':
					hasHeaderFabRight = true;
					break;
			}

			$scope.hasHeaderFabLeft = hasHeaderFabLeft;
			$scope.hasHeaderFabRight = hasHeaderFabRight;
		};

		$scope.hasHeader = function () {
			var content = document.getElementsByTagName('ion-content');
			for (var i = 0; i < content.length; i++) {
				if (!content[i].classList.contains('has-header')) {
					content[i].classList.toggle('has-header');
				}
			}

		};

		$scope.hideHeader = function () {
			$scope.hideNavBar();
			$scope.noHeader();
		};

		$scope.showHeader = function () {
			$scope.showNavBar();
			$scope.hasHeader();
		};

		$scope.clearFabs = function () {
			var fabs = document.getElementsByClassName('button-fab');
			if (fabs.length && fabs.length > 1) {
				fabs[0].remove();
			}
		};

	})

	.controller('searchBoxController', function ($scope, $state, $timeout, $stateParams, ionicMaterialInk, $ionicPlatform) {

		// $scope.$parent.clearFabs();
		// $timeout(function () {
		// 	$scope.$parent.hideHeader();
		// }, 0);
		// ionicMaterialInk.displayEffect();

		$scope.doSearch = function () {
			var searchInputRaw = $scope.searchQueryInput;
			var searchInput = searchInputRaw.split(' ').join('+');
			console.log("data is", searchInput);
			window.localStorage.setItem("searchQueryStorage", searchInput);
			$state.go('app.searchResults', { searchQuery: searchInput });
		}

		var deregisterFirst = $ionicPlatform.registerBackButtonAction(
			function () {
				// alert("This is the first page")
				$state.go('app');
			}, 100
		);
		$scope.$on('$destroy', deregisterFirst);

	})

	.controller('stateResultController', function ($scope, $state, $stateParams, $http, baseURL, $ionicPlatform, $ionicLoading) {

		// Loading Screen
		// Setup the loader
		$ionicLoading.show({
			content: 'Loading',
			animation: 'fade-in',
			template: '<ion-spinner icon="bubbles" class="spinner-assertive"></ion-spinner>',
			showBackdrop: true,
			maxWidth: 400,
			showDelay: 0
		});

		// $scope.searchQueryInput = $stateParams.searchQuery;
		$scope.searchQueryInput = window.localStorage.getItem("searchQueryStorage");
		console.log("again data is", $scope.searchQueryInput);
		console.log("base", baseURL);
		var searchResults = $http.get(baseURL + $scope.searchQueryInput)
			.success(function (data) {
				console.log(data[0]);
				$scope.books = data;
				$ionicLoading.hide();
				// for(var i=0; i<data.length; i++)
				// {
				// 	$scope.bookTitle = data[i]['bookTitle'];
				// 	$scope.bookLink = data[i]['bookLink'];
				// 	$scope.bookAvailabilityStatus = data[i]['bookAvailabilityStatus'];
				// 	$scope.bookRack = data[i]['bookRack'];
				// }
			}).error(function (data) {
				console.log("Cannot contact the server, try again...");
				$ionicLoading.hide();
				alert("Cannot contact the server...Please try again later!");
			});

		$scope.storeRack = function (bookRack) {
			window.localStorage.setItem("rackNumber", bookRack);
			console.log("Rack is", window.localStorage.getItem("rackNumber"));
			if (bookRack != "NA") {
				$state.go('app.mapLayout');
			}
			else {
				alert("This book is currently not available in the library");
			}
		}

		var deregisterFirst = $ionicPlatform.registerBackButtonAction(
			function () {
				// alert("This is the first page")
				$state.go('app.search');
			}, 100
		);
		$scope.$on('$destroy', deregisterFirst);

	})

	.controller('mapController', function ($scope, $state, $ionicScrollDelegate, $timeout, $ionicPlatform, $ionicHistory) {

		// var jq = $.noConflict();
		var rackno = window.localStorage.getItem("rackNumber");

		// $.noConflict();
		jQuery(document).ready(function ($) {
			function coloring() {
				var flag = 0;
				var to_be_colored = rackno;
				console.log("In jQuery, rack is", to_be_colored);
				// alert(to_be_colored);
				$('.rack_part1').each(function () {
					var thisval = $(this).text();
					// alert(thisval)
					if (thisval == to_be_colored) {
						// alert(thisval)
						$(this).css("background-color", "lightgreen");
						flag = 1;
						// alert("thisval")
					}
				});

				$('.rack_part2').each(function () {
					var thisval = $(this).text();
					// alert(thisval)
					if (thisval == to_be_colored) {
						// alert(thisval)
						$(this).css("background-color", "lightgreen");
						flag = 1;
						// alert("thisval")
					}
				});
				if (flag == 0) {
					// alert($ionicHistory.backView());
					alert("The required book rack is not present in this area!")
				}
			}
			setTimeout(coloring, 1000);
		})

		// to_be_colored = null;

		// $scope.iframeURL = "http://athena.nitc.ac.in/azharullahshariff_b130727cs/assets/library_layout.html"

		$scope.eee = [
			{ no: '1', id1: '621.3', id2: '621.3' },
			{ no: '2', id1: '621.301', id2: '621.31239' },
			{ no: '3', id1: '621.3124', id2: '621.3189' },
			{ no: '4', id1: '621.319', id2: '621.31921' },
			{ no: '5', id1: '621.31921', id2: '621.369' },
			{ no: '6', id1: '621.37', id2: '621.384022' }
		];

		$scope.cse = [
			{ no: '69', id1: '001.4', id2: '001.64' },
			{ no: '68', id1: '001.64', id2: '001.642' },
			{ no: '67', id1: '001.6424', id2: '003.4' },
			{ no: '66', id1: '003.01', id2: '004.649' },
			{ no: '65', id1: '004.6', id2: '005.299' },
			{ no: '64', id1: '005.2', id2: '005.99' },
			{ no: '63', id1: '005.8', id2: '621.38195' }
		];

		$scope.coe = [
			{ no: '62', id1: '621.38195', id2: '621.381957' },
			{ no: '61', id1: '621.381958', id2: '621.3829' },
			{ no: '60', id1: '621.3801', id2: '621.38819' },
			{ no: '59', id1: '620', id2: '621.3999' }
		];

		$scope.cte = [
			{ no: '13', id1: '629.8', id2: '629.836' },
			{ no: '14', id1: '629.836', id2: '569.9' }
		];

		$scope.cie1 = [
			{ no: '15', id1: '551', id2: '620.109' },
			{ no: '16', id1: '620.101', id2: '620.11299' },
			{ no: '17', id1: '620.1123', id2: '623.889' },
			{ no: '18', id1: '624', id2: '624.151' },
			{ no: '19', id1: '624.15101', id2: '624.171' }
		];

		$scope.cie2 = [
			{ no: '20', id1: '624.171', id2: '624.176' },
			{ no: '21', id1: '624.176', id2: '624.183' },
			{ no: '22', id1: '624.1834', id2: '627' },
			{ no: '23', id1: '627', id2: '628.09' },
			{ no: '24', id1: '628.1', id2: '690' }
		];

		$scope.art = [
			{ no: '25', id1: '690.01', id2: '720-720.99' },
			{ no: '26', id1: '720-720.99', id2: '743.99' },
			{ no: '27', id1: '744', id2: '799' }
		];

		$scope.mtm = [
			{ no: '46', id1: '510-510.620', id2: '510.1-510.69' },
			{ no: '47', id1: '510.1-510.69', id2: '512' },
			{ no: '48', id1: '512', id2: '515' },
			{ no: '49', id1: '515', id2: '515.69' },
			{ no: '50', id1: '515.7', id2: '519.2-519.29' },
			{ no: '51', id1: '519.2-519.29', id2: '519.99' }
		];

		$scope.phy = [
			{ no: '52', id1: '530', id2: '530.15' },
			{ no: '53', id1: '530.15', id2: '531.59' },
			{ no: '54', id1: '531.38-531.59', id2: '533.2-533.99' },
			{ no: '55', id1: '533.2-533.99', id2: '538' },
			{ no: '56', id1: '538.3', id2: '610-619.99' }
		];

		$scope.ece1 = [
			{ no: '8', id1: '621.38102', id2: '621.3814' },
			{ no: '7', id1: '621.380422', id2: '621.38' }
		];

		$scope.ece2 = [
			{ no: '10', id1: '621.381502', id2: '621.38152' },
			{ no: '9', id1: '621.3815', id2: '621.381502' }
		];

		$scope.ece3 = [
			{ no: '11', id1: '621.381528', id2: '621.38172' },
			{ no: '12', id1: '621.38173', id2: '629.8' }
		];

		$scope.gen = [
			{ no: '58', id1: '620.004', id2: '620.4699' },
			{ no: '57', id1: '600', id2: '619.99' }
		];

		var delegate = $ionicScrollDelegate.$getByHandle('mainScroll');
		// delegate.scrollBottom([true]);
		// delegate.zoomTo(3);

		$timeout(function () {
			delegate.zoomTo(.05);
		}, 300)

		var deregisterFirst = $ionicPlatform.registerBackButtonAction(
			function () {
				// alert("This is the first page")
				$state.go('app.searchResults');
			}, 100
		);
		$scope.$on('$destroy', deregisterFirst);

		// console.log("hhere it is!");

	})

	.controller("beaconController", function ($scope, $rootScope, $ionicPlatform, $cordovaBeacon) {

		$scope.beacons = {};
		$ionicPlatform.ready(function () {
			$cordovaBeacon.requestWhenInUseAuthorization();
			$rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function (event, pluginResult) {
				var uniqueBeaconKey;
				for (var i = 0; i < pluginResult.beacons.length; i++) {
					uniqueBeaconKey = pluginResult.beacons[i].uuid + ":" + pluginResult.beacons[i].major + ":" + pluginResult.beacons[i].minor;
					$scope.beacons[uniqueBeaconKey] = pluginResult.beacons[i];
				}
				$scope.$apply();
			});
			$cordovaBeacon.startRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion("estimote", "B9407F30-F5F8-466E-AFF9-25556B57FE6D"));
		});
	});