(function () {
    angular.module('rank')
        .controller('rankCtrl', function () {
            vm = this;
            vm.datos = [];
            vm.tiempoReferencia = 0.000;

            for (var i = 0; i < 8; i++) {
                vm.datos.push(defaultItem(i+1))
            }

            function defaultItem(ord) {
                return {
                    orden: ord,
                    binomio: null,
                    tiempo: 0,
                    faltas: Math.floor(Math.random() * 10),
                    comentario: null,
                    puesto: null,
                    diferencia : 0
                };
            }

            function comparar(a, b) {
                va = '' + (a.diferencia || 0) + (a.faltas || 0);
                vb = '' + (b.diferencia || 0) + (b.faltas || 0);
                return va - vb;
            }

            vm.actualizarDiferencias = function(){
                vm.datos = vm.datos.map(function(item){
                    item.diferencia = Math.abs(vm.tiempoReferencia - item.tiempo);

                    return item;
                });

                vm.datos.sort(comparar);
            }

            vm.exportar = function () {
                
            }
        })

})();

