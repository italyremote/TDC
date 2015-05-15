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
            "affitto" : new Tax( { "name": "Affitto", "value":0, "detrazione":50 } ),
            "alberghi" : new Tax( { "name": "Alberghi", "value":0, "detrazione":75 } ),
            "assicurazione" : new Tax( { "name": "Assicurazione", "value":0, "detrazione":40 } ),
            "assprof" : new Tax( { "name": "Ass.Professionale", "value":0, "detrazione":100 } ),
            "autonoleggio" : new Tax( { "name": "Autonoleggio", "value":0, "detrazione":40 } ),
            "banca" : new Tax( { "name": "Banca", "value":0, "detrazione":50 } ),
            "benistr" : new Tax( { "name": "Beni Strum.", "value":0, "detrazione":100 } ),
            "benzina" : new Tax( { "name": "Benzina", "value":0, "detrazione":40 } ),
            "bollo" : new Tax( { "name": "Bollo Auto", "value":0, "detrazione":40 } ),
            "corsi" : new Tax( { "name": "Corsi Agg.", "value":0, "detrazione":50 } ),
            "energia" : new Tax( { "name": "Energia El.", "value":0, "detrazione":50 } ),
            "spedizioni" : new Tax( { "name": "Francobolli Sped.", "value":0, "detrazione":100 } ),
            "giornali" : new Tax( { "name": "Giornali Riviste Libri", "value":0, "detrazione":100 } ),
            "leasing" : new Tax( { "name": "Leasing Attr.Mob.Macc.", "value":0, "detrazione":100 } ),
            "pasti" : new Tax( { "name": "Pasti Rist. Mense", "value":0, "detrazione":75 } ),
            "rappresentanza" : new Tax( { "name": "Pasti Rappr.", "value":0, "detrazione":100 } ),
            "software" : new Tax( { "name": "Software", "value":0, "detrazione":100 } )
        };
        /*
        $scope.tax = new Tax();
        $scope.tax.setData({ "name":"prova" });
        */
        $scope.toggle = function(e) {
            $scope.menuIsOpen = !$scope.menuIsOpen;
        };
    }]);
