    var spApp = angular.module( "ngTDC", ['ngRoute'] );
	//
    // Defining Routes
    //
    spApp.config(function($routeProvider) {
    });
    //
    // Tax Model
    //
    spApp.factory('Tax',['$http', function($http){
        function Tax(taxData) {
            if (taxData) {
                console.log('costruttore?'+JSON.stringify(taxData));
                this.setData(taxData);
            }
        }
        Tax.prototype = {
            setData: function(taxData) {
                angular.extend(this, taxData);
            },
            setName: function(name) {
                console.log('set name');
                this.setData({ "name": name });
            },
            update: function() {
                console.log('name: '+this.name+' value: '+this.value);
            }
        };
        return Tax;
    }]);

    //
    // Controller Main
    //
    spApp.controller( "Main", [ '$scope', 'Tax', function($scope, Tax) {
		$scope.menuIsOpen = false;

        $scope.taxes = {
            "affitto" : new Tax( { "name": "Affitto", "value":0, "detrazione":100 } )
        };
        /*
        $scope.tax = new Tax();
        $scope.tax.setData({ "name":"prova" });
        */
        $scope.toggle = function(e) {
            $scope.menuIsOpen = !$scope.menuIsOpen;
        };
    }]);
