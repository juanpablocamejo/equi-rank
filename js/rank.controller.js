(function () {
    angular.module('rank')
        .controller('rankCtrl', function () {
            vm = this;
            vm.datos = []

            for (var i = 0; i < 8; i++) {
                vm.datos.push(defaultItem(i+1))
            }
            function defaultItem(ord) {
                return {
                    orden: ord,
                    binomio: null,
                    tiempo: '0000000',
                    faltas: 0,
                    comentario: null,
                    puesto: null
                };
            }
            function comparar(a, b) {
                va = '' + (a.faltas || 0) + (a.tiempo || 0);
                vb = '' + (b.faltas || 0) + (b.tiempo || 0);
                return va - vb;
            }

            vm.calcular = function () {
                sorted = vm.datos.sort(comparar);
            }
        })

})();

