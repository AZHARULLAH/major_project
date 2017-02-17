angular.module('starter.services', [])

// .constant("baseURL", "http://192.168.40.62:5000/")
.constant("baseURL", "http://localhost:5000/")

.service('opacService', ['$http', 'baseURL', function($http, baseURL){
    
    this.getbooks = function(searchQuery){
        console.log("Complete URl", baseURL+searchQuery);
        return $http.get(baseURL + searchQuery);
    }

}]);