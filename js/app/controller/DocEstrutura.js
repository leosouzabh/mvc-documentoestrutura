'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DocEstrutura = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AgregadorView = require('../view/AgregadorView');

var _AgregadorBuilder = require('../builder/AgregadorBuilder');

var _TextoBuilder = require('../builder/TextoBuilder');

var _Elemento = require('../constantes/Elemento');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DocEstrutura = exports.DocEstrutura = function () {
    function DocEstrutura(jsonEstrutura) {
        _classCallCheck(this, DocEstrutura);

        this._objEstrutura = JSON.parse(jsonEstrutura);
        this._canvas = $("#container-form");
    }

    _createClass(DocEstrutura, [{
        key: 'iniciaConstrucao',
        value: function iniciaConstrucao() {

            this._canvas.empty();

            var div = $('<div></div>');
            div.append(this._renderAgregadorInicial(this._objEstrutura));
            this._canvas.append(div);
        }
    }, {
        key: '_renderAgregadorInicial',
        value: function _renderAgregadorInicial(agregador) {
            var agregadorView = new _AgregadorBuilder.AgregadorBuilder(agregador).build();
            var htmlAgregador = agregadorView.html;
            var idContainerItens = agregadorView.idContainerItens;
            var htmlItens = this._renderItens(agregador.itens);

            htmlAgregador = $(htmlAgregador).append(htmlAgregador);
            $(htmlAgregador).find('#' + idContainerItens).append(htmlItens);
            return htmlAgregador;
        }
    }, {
        key: '_renderCampoTexto',
        value: function _renderCampoTexto(texto) {
            return new _TextoBuilder.TextoBuilder(texto).build().html;
        }
    }, {
        key: '_renderItens',
        value: function _renderItens(listaItens) {
            var _this = this;

            var html = "";
            listaItens.forEach(function (item) {

                if (item.tipo == _Elemento.Elemento.tipo().AGREGADOR) {
                    //html = this._renderAgregadorInicial(item);

                } else if (item.tipo == _Elemento.Elemento.tipo().TEXTO) {
                    html += _this._renderCampoTexto(item);
                }
            });
            console.log('html de retorno ' + html);
            return html;
        }
    }]);

    return DocEstrutura;
}();
//# sourceMappingURL=DocEstrutura.js.map