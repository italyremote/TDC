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
                // console.log('costruttore?'+JSON.stringify(taxData));
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
            }
            /*,
            update: function() {
                console.log('name: '+this.name+' value: '+this.value);
            }
            */
        };
        return Tax;
    }]);
    //
    // Aliquota Model
    //
    spApp.factory('Aliquota',['$http', function($http){
        function Aliquota(aliquotaData) {
            if (aliquotaData) {
                this.setData(aliquotaData);
            }
        }
        Aliquota.prototype = {
            setData: function(aliquotaData) {
                angular.extend(this, aliquotaData);
            }
        };
        return Aliquota;
    }]);

    //
    // Controller Main
    //
    spApp.controller( "Main", [ '$scope', 'Tax', 'Aliquota', function($scope, Tax, Aliquota) {
		$scope.menuIsOpen = false;
        $scope.aliquote = {
            "0" : new Aliquota( { "da":0, "a":15000, "perc":23 } ),
            "15" : new Aliquota( { "da":15000, "a":28000, "perc":27 } ),
            "28" : new Aliquota( { "da":28000, "a":55000, "perc":38 } ),
            "55" : new Aliquota( { "da":55000, "a":75000, "perc":41 } ),
            "75" : new Aliquota( { "da":75000, "a":1000000, "perc":43 } )
        };
        $scope.taxes = {
            "affitto" : new Tax( { "name": "Affitto", "value":0, "detrazione":50 } ),
            "alberghi" : new Tax( { "name": "Alberghi", "value":0, "detrazione":75 } ),
            "assicurazione" : new Tax( { "name": "Assicurazione", "value":0, "detrazione":40 } ),
            "assprof" : new Tax( { "name": "Ass.Professionale", "value":0, "detrazione":100 } ),
            "autonoleggio" : new Tax( { "name": "Autonoleggio", "value":0, "detrazione":40 } ),
            "banca" : new Tax( { "name": "Banca", "value":0, "detrazione":50 } ),
            "benistr" : new Tax( { "name": "Beni Strum.", "value":0, "detrazione":100 } ),
            "benzina" : new Tax( { "name": "Benzina", "value":0, "detrazione":40 } ),
            "bicicletta" : new Tax( { "name": "Bicicletta", "value":0, "detrazione":100 } ),
            "bollo" : new Tax( { "name": "Bollo Auto", "value":0, "detrazione":40 } ),
            "corsi" : new Tax( { "name": "Corsi Agg.", "value":0, "detrazione":50 } ),
            "energia" : new Tax( { "name": "Energia El.", "value":0, "detrazione":50 } ),
            "spedizioni" : new Tax( { "name": "Francobolli Sped.", "value":0, "detrazione":100 } ),
            "giornali" : new Tax( { "name": "Giornali Riviste Libri", "value":0, "detrazione":100 } ),
            "leasing" : new Tax( { "name": "Leasing Attr.Mob.Macc.", "value":0, "detrazione":100 } ),
            "pasti" : new Tax( { "name": "Pasti Rist. Mense", "value":0, "detrazione":75 } ),
            "rappresentanza" : new Tax( { "name": "Pasti Rappr.", "value":0, "detrazione":100 } ),
            "software" : new Tax( { "name": "Software", "value":0, "detrazione":100 } ),
            "condominio" : new Tax( { "name": "Sp.Condominiali", "value":0, "detrazione":50 } ),
            "concessione" : new Tax( { "name": "Tax Concessione Gov.", "value":0, "detrazione":100 } ),
            "telefono" : new Tax( { "name": "Telefono Telefonino", "value":0, "detrazione":80 } ),
            "veicolo" : new Tax( { "name": "Veicolo", "value":0, "detrazione":40 } ),
            "viaggi" : new Tax( { "name": "V. Treno Aereo Taxi Pedaggi", "value":0, "detrazione":100 } )
        };
        /*
        $scope.tax = new Tax();
        $scope.tax.setData({ "name":"prova" });
        */
        $scope.update = function() {
            var total = 0;
            for(var t in $scope.taxes) {
                if ($scope.taxes[t].value!==0) {
                    total += $scope.taxes[t].value * $scope.taxes[t].detrazione / 100;
                }
            }
            $scope.total = total;
            for(var a in $scope.aliquote) {
                $scope.aliquote[a].detrazione = $scope.aliquote[a].perc * total / 100;
            }
        };
        $scope.total = 0;
        $scope.toggle = function(e) {
            $scope.menuIsOpen = !$scope.menuIsOpen;
        };
    }]);
