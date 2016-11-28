"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListaBuilder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Builder2 = require("./_Builder");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListaBuilder = exports.ListaBuilder = function (_Builder) {
    _inherits(ListaBuilder, _Builder);

    function ListaBuilder(elementoLista) {
        _classCallCheck(this, ListaBuilder);

        return _possibleConstructorReturn(this, (ListaBuilder.__proto__ || Object.getPrototypeOf(ListaBuilder)).call(this, elementoLista));
    }

    _createClass(ListaBuilder, [{
        key: "build",
        value: function build(readOnly, dadosItmIndexado) {
            var id = _get(ListaBuilder.prototype.__proto__ || Object.getPrototypeOf(ListaBuilder.prototype), "elemento", this).id;
            var seq = _get(ListaBuilder.prototype.__proto__ || Object.getPrototypeOf(ListaBuilder.prototype), "elemento", this).seq;
            var label = _get(ListaBuilder.prototype.__proto__ || Object.getPrototypeOf(ListaBuilder.prototype), "elemento", this).label;

            var html = "\n\t\t<div class='row cinza campo' data-label='" + label + "'>\n\t\t\t<div class='col-md-4' id='label-texto-'" + id + "'>" + label + " " + _get(ListaBuilder.prototype.__proto__ || Object.getPrototypeOf(ListaBuilder.prototype), "tagObrigatorioLabel", this).call(this) + "</div>\n\t\t\t<div class='col-md-8'>\n\t\t\t\t<div class='input-group' style='width:100%'>\n\t\t\t\t\t<select class='form-control placeholder'\n                        " + _get(ListaBuilder.prototype.__proto__ || Object.getPrototypeOf(ListaBuilder.prototype), "getDisabledHtml", this).call(this) + "\n                        " + _get(ListaBuilder.prototype.__proto__ || Object.getPrototypeOf(ListaBuilder.prototype), "getIdHtml", this).call(this, id, dadosItmIndexado) + "\n                        " + _get(ListaBuilder.prototype.__proto__ || Object.getPrototypeOf(ListaBuilder.prototype), "tagObrigatorioInput", this).call(this) + ">\n                        \n                        <option value>Selecione...</opcao>\n                        " + this._buildListaOpcoes() + "\n                    </select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n        ";

            return {
                html: html
            };
        }
    }, {
        key: "_buildListaOpcoes",
        value: function _buildListaOpcoes() {
            var opcoes = "";
            _get(ListaBuilder.prototype.__proto__ || Object.getPrototypeOf(ListaBuilder.prototype), "elemento", this).opcoes.forEach(function (item) {
                return opcoes += "<option>" + item + "</opcao>";
            });
            return opcoes;
        }
    }]);

    return ListaBuilder;
}(_Builder2.Builder);
//# sourceMappingURL=ListaBuilder.js.map