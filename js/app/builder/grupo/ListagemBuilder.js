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

    function ListagemBuilder(listagem) {
        _classCallCheck(this, ListagemBuilder);

        return _possibleConstructorReturn(this, (ListagemBuilder.__proto__ || Object.getPrototypeOf(ListagemBuilder)).call(this, listagem));
    }

    _createClass(ListagemBuilder, [{
        key: "build",
        value: function build(readOnly, totalItens, dadosItmIndexado) {

            var id = _get(ListagemBuilder.prototype.__proto__ || Object.getPrototypeOf(ListagemBuilder.prototype), "elemento", this).id;
            var seq = _get(ListagemBuilder.prototype.__proto__ || Object.getPrototypeOf(ListagemBuilder.prototype), "elemento", this).seq;
            var label = _get(ListagemBuilder.prototype.__proto__ || Object.getPrototypeOf(ListagemBuilder.prototype), "elemento", this).label;

            var idBtnNovo = "btnNovo-" + id;
            var btnNovoItem = "";
            if (!readOnly) {
                btnNovoItem = "<a class='btn btn-xs' id='" + idBtnNovo + "'><i class='fa fa-plus'></i> Novo</a>";
            }

            var html = "\n            <div class='clearfix nivel1 agragador listagem' id='" + id + "' data-seq='" + seq + "' data-label='" + label + "'>\n            \t<h3 class='titulo-agregador clearfix'>\n            \t\t<a data-id='" + id + "' class='link-agregador' id='link-" + id + "'><i class='fa fa-bars'></i>" + label + "</a>\n                    " + btnNovoItem + "\n            \t</h3>\n                <div class='container-sortable' id='container-" + id + "'>\n                    " + this.buildListaContainerItens(totalItens) + "\n            \t</div>\n            </div>            \n        ";

            return {
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
            return "\n            <div class=\"wrap-item\" id=\"wrap-item-" + _get(ListagemBuilder.prototype.__proto__ || Object.getPrototypeOf(ListagemBuilder.prototype), "elemento", this).id + "-" + indice + "\" >\n                <div class=\"row cinza campo\" style=\"border-bottom:1px solid #dcdbdb\">\n                    <div class=\"col-md-12\">\n                        #" + (indice + 1) + "\n                    </div>\n                </div>\n                <div class=\"wrap-componentes\" id=\"wrap-componentes-" + _get(ListagemBuilder.prototype.__proto__ || Object.getPrototypeOf(ListagemBuilder.prototype), "elemento", this).id + "-" + indice + "\"></div>                    \n            </div>";
        }
    }, {
        key: "buildBotaoDelete",
        value: function buildBotaoDelete(indice) {
            var idBtnDelete = "btnDelete-" + _get(ListagemBuilder.prototype.__proto__ || Object.getPrototypeOf(ListagemBuilder.prototype), "elemento", this).id + "-" + indice;
            var html = "\n            <div class=\"row cinza campo\">\n                <div class=\"col-md-12\" style=\"text-align:right\">\n                    <a class=\"btn btn-danger btn-xs\" id=\"" + idBtnDelete + "\">Excluir</a>\n                </div>\n            </div>";

            return {
                html: html,
                idBotaoDelete: idBtnDelete,
                indice: indice
            };
        }
    }]);

    return ListagemBuilder;
}(_Builder2.Builder);
//# sourceMappingURL=ListagemBuilder.js.map