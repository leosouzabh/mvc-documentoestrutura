'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NovoItemService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TextoBuilder = require('../builder/html/TextoBuilder');

var _ListaBuilder = require('../builder/html/ListaBuilder');

var _DataBuilder = require('../builder/html/DataBuilder');

var _NumeroBuilder = require('../builder/html/NumeroBuilder');

var _MoedaBuilder = require('../builder/html/MoedaBuilder');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NovoItemService = exports.NovoItemService = function () {
    function NovoItemService(idListagem) {
        _classCallCheck(this, NovoItemService);

        this._idListagem = idListagem;
        this._idContainer = '#container-' + idListagem;
    }

    _createClass(NovoItemService, [{
        key: 'geraNovoItem',
        value: function geraNovoItem() {
            var novoItem = this._clonaItem();

            this._alteraNumeroSequencial(novoItem);
            this._limpaItensEmListagens(novoItem);
            this._limpaValoresEmInputs(novoItem);
            this._alteraIdsChildren(novoItem);

            $(this._idContainer).append(novoItem);
        }
    }, {
        key: '_clonaItem',
        value: function _clonaItem() {
            var idItemRef = '#wrapitem-' + this._idListagem + '-0';
            return $(idItemRef).clone();
        }
    }, {
        key: '_alteraNumeroSequencial',
        value: function _alteraNumeroSequencial(novoItem) {
            var totalFilho = this._getTotalItens();
            $(novoItem.children()[0]).find(".indice-item").text('#' + (totalFilho + 1));
        }
    }, {
        key: '_limpaItensEmListagens',
        value: function _limpaItensEmListagens(novoItem) {
            var listagensChildren = novoItem.find(".listagem");
            if (listagensChildren.length > 0) {
                $.each(listagensChildren, function (idx, listagem) {
                    var itensListagemChildren = $(listagem).find('#container-' + listagem.id).children();
                    $.each(itensListagemChildren, function (idx2, itemDaListagem) {
                        if (idx2 > 0) itemDaListagem.remove();
                    });
                });
            }
        }
    }, {
        key: '_alteraIdsChildren',
        value: function _alteraIdsChildren(novoItem) {
            var idOriginal = $('#' + this._idListagem).data('id');
            var fragIdOriginal = '0-' + idOriginal;
            var fragNovoId = this._getTotalItens() + '-' + idOriginal;

            this._doUpdateIds([novoItem], fragIdOriginal, fragNovoId);
        }
    }, {
        key: '_doUpdateIds',
        value: function _doUpdateIds(listaItens, fragIdOriginal, fragNovoId) {
            var _this = this;

            $.each(listaItens, function (idx, item) {
                var id = $(item).attr('id');
                if (id) {
                    $(item).attr('id', id.replace(fragIdOriginal, fragNovoId));
                }

                var dataId = $(item).data('id-listagem');
                if (dataId) {
                    console.log('alterou data');
                    $(item).data('id-listagem', dataId.replace(fragIdOriginal, fragNovoId));
                }

                if ($(item).children().length > 0) {
                    _this._doUpdateIds($(item).children(), fragIdOriginal, fragNovoId);
                }
            });
        }
    }, {
        key: '_limpaValoresEmInputs',
        value: function _limpaValoresEmInputs(novoItem) {
            novoItem.find("input.form-control").val("");
        }
    }, {
        key: '_getTotalItens',
        value: function _getTotalItens() {
            return $(this._idContainer).children().length;
        }
    }]);

    return NovoItemService;
}();
//# sourceMappingURL=NovoItemService.js.map