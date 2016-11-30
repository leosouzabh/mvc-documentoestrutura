'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RenderService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TextoBuilder = require('../builder/html/TextoBuilder');

var _ListaBuilder = require('../builder/html/ListaBuilder');

var _DataBuilder = require('../builder/html/DataBuilder');

var _NumeroBuilder = require('../builder/html/NumeroBuilder');

var _MoedaBuilder = require('../builder/html/MoedaBuilder');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RenderService = exports.RenderService = function () {
    function RenderService(item, readOnlyFields, dadosIndexado, writeService) {
        _classCallCheck(this, RenderService);

        this._write = writeService;
        this._readOnlyFields = readOnlyFields;
        this._dadosIndexado = dadosIndexado;
        this._item = item;
    }

    _createClass(RenderService, [{
        key: 'texto',
        value: function texto() {
            this._write.wr(this._doRender(new _TextoBuilder.TextoBuilder(this._item)).html);
        }
    }, {
        key: 'lista',
        value: function lista() {
            this._write.wr(this._doRender(new _ListaBuilder.ListaBuilder(this._item)).html);
        }
    }, {
        key: 'data',
        value: function data() {
            this._write.wr(this._doRender(new _DataBuilder.DataBuilder(this._item)).html);
        }
    }, {
        key: 'numero',
        value: function numero() {
            this._write.wr(this._doRender(new _NumeroBuilder.NumeroBuilder(this._item)).html);
        }
    }, {
        key: 'moeda',
        value: function moeda() {
            this._write.wr(this._doRender(new _MoedaBuilder.MoedaBuilder(this._item)).html);
        }
    }, {
        key: '_doRender',
        value: function _doRender(builder) {
            return builder.build(this._readOnlyFields, this._dadosIndexado);
        }
    }]);

    return RenderService;
}();
//# sourceMappingURL=RenderService.js.map