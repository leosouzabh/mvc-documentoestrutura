"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListagemBuilder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Builder2 = require("./../_Builder");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListagemBuilder = exports.ListagemBuilder = function (_Builder) {
    _inherits(ListagemBuilder, _Builder);

    function ListagemBuilder(listagem, dadosIndexado) {
        _classCallCheck(this, ListagemBuilder);

        var _this = _possibleConstructorReturn(this, (ListagemBuilder.__proto__ || Object.getPrototypeOf(ListagemBuilder)).call(this, listagem));

        _this._dadosIndexado = dadosIndexado;

        return _this;
    }

    _createClass(ListagemBuilder, [{
        key: "build",
        value: function build(readOnly, totalItens) {

            var id = _get(ListagemBuilder.prototype.__proto__ || Object.getPrototypeOf(ListagemBuilder.prototype), "elemento", this).id;
            var seq = _get(ListagemBuilder.prototype.__proto__ || Object.getPrototypeOf(ListagemBuilder.prototype), "elemento", this).seq;
            var label = _get(ListagemBuilder.prototype.__proto__ || Object.getPrototypeOf(ListagemBuilder.prototype), "elemento", this).label;

            var idBuild = _get(ListagemBuilder.prototype.__proto__ || Object.getPrototypeOf(ListagemBuilder.prototype), "getId", this).call(this, id, this._dadosIndexado);
            var idBtnNovo = "btnNovo-" + id;
            var btnNovoItem = "";
            if (!readOnly) {
                btnNovoItem = "<a class='btn btn-xs btn-novo-item' data-id-listagem='" + idBuild + "' id='" + idBtnNovo + "'><i class='fa fa-plus'></i> Novo</a>";
            }

            var html = "\n            <div class='clearfix nivel1 agragador listagem' data-id='" + id + "' id='" + idBuild + "' data-seq='" + seq + "' data-label='" + label + "'>\n            \t<h3 class='titulo-agregador clearfix'>\n            \t\t<a data-id='" + id + "' class='link-agregador'><i class='fa fa-bars'></i>" + label + "</a>\n                    " + btnNovoItem + "\n            \t</h3>\n                <div class='container-sortable' id='container-" + idBuild + "'>\n                    " + this.buildListaContainerItens(totalItens) + "\n            \t</div>\n            </div>            \n        ";

            return {
                idListagem: idBuild,
                idBotaoNovo: idBtnNovo,
                html: html
            };
        }
    }, {
        key: "buildListaContainerItens",
        value: function buildListaContainerItens(total) {
            var out = "";
            var x = void 0;
            for (x = 0; x < total; x++) {
                out += this.buildContainerItem(x);
            }
            return out;
        }
    }, {
        key: "buildContainerItem",
        value: function buildContainerItem(indice) {
            var botaoDelete = "<a class=\"btn btn-danger btn-xs btn-outline\" id=\"" + this.buildId('btnDelete') + "\">Excluir</a>";
            return "\n            <div class=\"wrap-item\" id=\"" + this.buildWrapItemId(indice) + "\">\n                <div class=\"row cinza campo header-item\">\n                    <div class=\"col-xs-6 indice-item\">#" + (indice + 1) + "</div>                        \n                    <div class=\"col-xs-6\" style=\"text-align:right\">\n                        " + botaoDelete + " \n                    </div>\n                </div>                \n            </div>";
        }
    }, {
        key: "buildWrapItemId",
        value: function buildWrapItemId(indice) {
            return this.buildId('wrapitem') + "-" + indice;
        }
    }, {
        key: "buildId",
        value: function buildId(prefixo) {
            return prefixo + "-" + this.getId(_get(ListagemBuilder.prototype.__proto__ || Object.getPrototypeOf(ListagemBuilder.prototype), "elemento", this).id, this._dadosIndexado);
        }
    }]);

    return ListagemBuilder;
}(_Builder2.Builder);
//# sourceMappingURL=ListagemBuilder.js.map