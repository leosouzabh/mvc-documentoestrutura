"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GeraJsonService = exports.GeraJsonService = function () {
    function GeraJsonService() {
        _classCallCheck(this, GeraJsonService);

        this._mapaListagemTotalElementos = new Map();
        this._jsonFinal = {
            "nomeGrupo": "",
            "detalhe": {}
        };
        this._paths = [];
        this._stackPath = ["$", "detalhe"];
    }

    _createClass(GeraJsonService, [{
        key: "geraJson",
        value: function geraJson() {
            this._jsonFinal.nomeGrupo = $("#0-root").data('label');

            var filhos = $("#container-0-root").children();

            this._processaItens(filhos);
            console.log(JSON.stringify(this._jsonFinal));
            console.log(JSON.stringify(this._paths));
        }
    }, {
        key: "_processaItens",
        value: function _processaItens(filhos) {
            var _this = this;

            console.log(filhos);
            $.each(filhos, function (i, item) {
                if ($(item).hasClass("listagem")) {
                    var campo = _this._processaListagem(item);
                    _this._addObject(campo);
                } else if ($(item).hasClass("campo")) {
                    var campo = _this._processaItem(item);
                    _this._addObject(campo);
                } else {
                    var objAgregador = _this._processaAgregador($(item).attr('id'));
                    _this._addObject(objAgregador);
                }
            });
        }
    }, {
        key: "_addObject",
        value: function _addObject(novoObj) {
            var jsonDetalhe = this._jsonFinal['detalhe'];
            var extendido = $.extend({}, jsonDetalhe, novoObj);
            this._jsonFinal['detalhe'] = extendido;
        }
    }, {
        key: "_processaAgregador",
        value: function _processaAgregador(id) {
            var _this2 = this;

            var nomeObj = $("#" + id).data('label');
            var out = {};
            out[nomeObj] = {};
            this._stackPath.push("'" + nomeObj + "'");

            $.each($("#container-" + id).children(), function (i, item) {
                if ($(item).hasClass("listagem")) {
                    var listagem = _this2._processaListagem(item);
                    $.extend(out[nomeObj], out[nomeObj], listagem);
                } else if ($(item).hasClass("campo")) {
                    var campo = _this2._processaItem(item);
                    $.extend(out[nomeObj], out[nomeObj], campo);
                } else {
                    var objAgregador = _this2._processaAgregador($(item).attr('id'));
                    $.extend(out[nomeObj], out[nomeObj], objAgregador);
                }
            });
            this._stackPath.pop();
            return out;
        }
    }, {
        key: "_processaListagem",
        value: function _processaListagem(listagem) {
            var _this3 = this;

            var labelGrupo = $(listagem).data('label');
            var out = {};
            out[labelGrupo] = {};
            out[labelGrupo].itens = [];

            this._stackPath.push("'" + labelGrupo + "'");

            var arrWrapItens = $("#container-" + $(listagem).attr('id')).children();
            $.each(arrWrapItens, function (i, wrapItem) {

                var registro = {};
                _this3._stackPath.push("itens[" + i + "]");
                $.each($(wrapItem).children(), function (i2, item) {
                    if (i2 > 0) {
                        var itemParseado = _this3._processaItem(item);
                        if (itemParseado) {
                            $.extend(registro, itemParseado, itemParseado);
                        }
                    }
                });
                out[labelGrupo].itens.push(registro);
                _this3._stackPath.pop();
            });

            this._stackPath.pop();
            return out;
        }
    }, {
        key: "_processaItem",
        value: function _processaItem(item) {

            if ($(item).hasClass("listagem")) {
                return this._processaListagem(item);
            } else if ($(item).hasClass("campo")) {
                var campo = $(item).find(".form-control")[0];
                if (campo) {
                    var label = $(item).data('label');
                    var desc = campo.value;

                    if ($(campo).hasClass('campo-data')) {
                        if (campo.value != "") {
                            var dataIso = 'DATA'; //moment(campo.value, "DD/MM/YYYY").toISOString();
                            desc = "ISODate(" + dataIso + ")";
                        }
                    }
                    this._addPath(label);
                    return jQuery.parseJSON("{\"" + label + "\":\"" + desc + "\"}");
                }
            } else {
                return this._processaAgregador($(item).attr('id'));
            }
        }
    }, {
        key: "_addPath",
        value: function _addPath(id) {
            this._paths.push({
                campo: id,
                path: this._stackPath.join('.') + ".'" + id + "'"
            });
        }
    }]);

    return GeraJsonService;
}();
//# sourceMappingURL=GeraJsonService.js.map