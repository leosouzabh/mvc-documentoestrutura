"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Builder = exports.Builder = function () {
    function Builder(elemento) {
        _classCallCheck(this, Builder);

        this._elemento = elemento;
    }

    _createClass(Builder, [{
        key: "tagObrigatorioLabel",
        value: function tagObrigatorioLabel() {
            return this._elemento.obrigatorio ? "*" : "";
        }
    }, {
        key: "tagObrigatorioInput",
        value: function tagObrigatorioInput() {
            return this._elemento.obrigatorio ? "required" : "";
        }
    }, {
        key: "getIdHtml",
        value: function getIdHtml(idElemento, dadosIndexado) {
            return "id=\"" + this.getId(idElemento, dadosIndexado) + "\"";
        }
    }, {
        key: "getReadOnlyHtml",
        value: function getReadOnlyHtml(readOnly) {
            var propReadOnly = "";
            if (readOnly == true) {
                propReadOnly = "readonly='readonly'";
            }
            return propReadOnly;
        }
    }, {
        key: "getDisabledHtml",
        value: function getDisabledHtml(readOnly) {
            var propDisabled = "";
            if (readOnly == true) {
                propDisabled = "disabled='disabled'";
            }
            return propDisabled;
        }
    }, {
        key: "getId",
        value: function getId(idElemento, dadosIndexado) {
            var arr = [];
            if (dadosIndexado.idPai) {
                arr.push(dadosIndexado.idPai);
            }
            arr.push(dadosIndexado.indice);
            arr.push(idElemento);
            return arr.join("-");
        }
    }, {
        key: "elemento",
        get: function get() {
            return this._elemento;
        }
    }]);

    return Builder;
}();
//# sourceMappingURL=_Builder.js.map