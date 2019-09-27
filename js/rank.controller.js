(function () {
    angular.module('rank')
        .controller('rankCtrl', function ($interval) {
            vm = this;
            vm.datos = [];
            vm.tab = 1;
            vm.new = defaultItem();

            vm.tiempoReferencia = 0.000;
            _add = (delta) => () => { vm.new.tiempo = +(vm.new.tiempo + delta).toFixed(2); }
            _sub = (delta) => () => { if (vm.new.tiempo > 0) vm.new.tiempo = +(vm.new.tiempo - delta).toFixed(2); }
            _loop = (fn) => vm.interval = $interval(fn, 200)

            vm.add = (delta) => _loop(_add(delta))
            vm.sub = (delta) => _loop(_sub(delta))

            vm.stop = () => $interval.cancel(vm.interval);
            vm.puedeGuardar = () => true
            vm.guardar = (elem) => {
                elem.ordenSalida = vm.datos.length + 1;
                vm.datos.push(elem)
                vm.new = defaultItem();
                vm.actualizarDiferencias();
            }

            function defaultItem() {
                return {
                    binomio: null,
                    tiempo: 0.0,
                    faltas: 0,
                    comentario: null,
                    diferencia: 0,
                    ordenSalida: 0
                };
            }

            function comparar(a, b) {
                f1 = (a.faltas || 0)
                f2 = (b.faltas || 0)
                d1 = (a.diferencia || 0)
                d2 = (b.diferencia || 0)

                if (f1 == f2) {
                    return d1 - d2;
                }
                else {
                    return f1 - f2
                }
            }

            vm.actualizarDiferencias = function () {
                vm.datos = vm.datos.map(function (item) {
                    item.diferencia = +Math.abs(vm.tiempoReferencia - item.tiempo).toFixed(2);

                    return item;
                });

                vm.datos.sort(comparar);
            }

            vm.exportar = function () {

            }
        })

})();

