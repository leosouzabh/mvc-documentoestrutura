'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.currentInstance = currentInstance;

var _AgregadorBuilder = require('../builder/grupo/AgregadorBuilder');

var _ListagemBuilder = require('../builder/grupo/ListagemBuilder');

var _WriterService = require('../service/WriterService');

var _RenderService = require('../service/RenderService');

var _NovoItemService = require('../service/NovoItemService');

var _GeraJsonService = require('../service/GeraJsonService');

var _Elemento = require('../constantes/Elemento');

var _JsonUtil = require('../util/JsonUtil');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DocEstrutura = function () {
    function DocEstrutura() {
        _classCallCheck(this, DocEstrutura);

        this._mapaListagemTotalElementos = new Map();
    }

    _createClass(DocEstrutura, [{
        key: 'iniciaConstrucao',
        value: function iniciaConstrucao(jsonEstrutura, readOnlyFields) {
            this._objEstrutura = JSON.parse(jsonEstrutura);
            this._readOnlyFields = readOnlyFields;

            $("#container-form").empty();
            this._renderAgregador('container-form', this._objEstrutura, this._newDadosIndexado(null, 0));
        }
    }, {
        key: 'montaJson',
        value: function montaJson() {
            new _GeraJsonService.GeraJsonService().geraJson();
        }
    }, {
        key: '_renderAgregador',
        value: function _renderAgregador(idContainer, agregador, dadosIndexado) {
            var write = new _WriterService.WriterService(idContainer);
            var agregadorView = new _AgregadorBuilder.AgregadorBuilder(agregador).build(dadosIndexado);
            write.wr(agregadorView.html);

            dadosIndexado.idPai = agregadorView.idBuild;
            this._renderItens(agregadorView.idContainerItens, agregador.itens, dadosIndexado);
        }
    }, {
        key: '_renderListagem',
        value: function _renderListagem(idContainer, listagem, dadosIndexado) {
            var write = new _WriterService.WriterService(idContainer);
            var builder = new _ListagemBuilder.ListagemBuilder(listagem, dadosIndexado);

            var idBuild = builder.getId(listagem.id, dadosIndexado);
            var totalItens = this._getTotalItensListagem(idBuild);

            var listagemView = builder.build(this._readOnlyFields, totalItens, dadosIndexado);
            write.wr(listagemView.html);

            this._bindEvents();

            for (var idxEl = 0; idxEl < totalItens; idxEl++) {
                var idWrapItem = builder.buildWrapItemId(idxEl);
                this._renderItens(idWrapItem, listagem.itens, this._newDadosIndexado(listagemView.idListagem, idxEl));
            }
        }
    }, {
        key: '_renderItens',
        value: function _renderItens(idContainer, listaItens, dadosIndexado) {
            var _this = this;

            listaItens.forEach(function (item) {
                if (item.tipo == _Elemento.Elemento.tipo.AGREGADOR) {
                    _this._renderAgregador(idContainer, item, dadosIndexado);
                } else if (item.tipo == _Elemento.Elemento.tipo.LISTAGEM) {
                    _this._renderListagem(idContainer, item, dadosIndexado);
                } else {
                    var htmlRender = new _RenderService.RenderService(item, _this._readOnlyFields, dadosIndexado, new _WriterService.WriterService(idContainer));

                    switch (item.tipo) {
                        case _Elemento.Elemento.tipo.TEXTO:
                            htmlRender.texto();
                            break;

                        case _Elemento.Elemento.tipo.LISTA:
                            htmlRender.lista();
                            break;

                        case _Elemento.Elemento.tipo.NUMERO:
                            htmlRender.numero();
                            break;

                        case _Elemento.Elemento.tipo.MOEDA:
                            htmlRender.moeda();
                            break;

                        case _Elemento.Elemento.tipo.DATA:
                            htmlRender.data();
                            break;

                        default:
                            console.error("Desculpe, estamos sem nenhuma " + item.tipo + ".");
                    }
                }
            });
        }
    }, {
        key: '_newDadosIndexado',
        value: function _newDadosIndexado(idPai, indice) {
            return { idPai: idPai, indice: indice };
        }
    }, {
        key: 'adicionaItemLista',
        value: function adicionaItemLista(botao) {
            var idBuild = $(botao.target).data('id-listagem');
            var novoItemService = new _NovoItemService.NovoItemService(idBuild);
            novoItemService.geraNovoItem();
            this._bindEvents();
        }
    }, {
        key: 'removerItens',
        value: function removerItens(idListagem, indice) {
            var idContainer = "wrap-item-" + idListagem + "-" + indice;
            var totalItens = this._mapaListagemTotalElementos.get(idListagem);
            this._mapaListagemTotalElementos.set(idListagem, totalItens - 1);

            $("#" + idContainer).remove();
            this.reorganizaIndiceIdsListagem(idListagem);
        }
    }, {
        key: 'reorganizaIndiceIdsListagem',
        value: function reorganizaIndiceIdsListagem(idListagem) {
            $.each($("#container-" + idListagem).children(), function (i, item) {
                $.each($(item).find(".form-control"), function (i2, input) {
                    var arr = $(input).attr('id').split("-");
                    arr[1] = i;
                    $(input).attr('id', arr.join('-'));
                });
            });
        }
    }, {
        key: '_getTotalItensListagem',
        value: function _getTotalItensListagem(idListagem) {
            if (this._mapaListagemTotalElementos.get(idListagem) == null) {
                this._mapaListagemTotalElementos.set(idListagem, 1);
            }
            return this._mapaListagemTotalElementos.get(idListagem);
        }
    }, {
        key: '_getProximoSequencial',
        value: function _getProximoSequencial(idListagem) {
            var indiceNovoElemento = this._mapaListagemTotalElementos.get(idListagem);
            this._mapaListagemTotalElementos.set(idListagem, indiceNovoElemento + 1);
            return indiceNovoElemento;
        }
    }, {
        key: '_bindEvents',
        value: function _bindEvents() {
            var _this2 = this;

            $('.btn-novo-item').off('click');
            $('.btn-novo-item').on('click', function (evt) {
                return _this2.adicionaItemLista(evt);
            });

            $('.btn-delete-item').off('click');
            $('.btn-delete-item').on('click', function (evt) {
                return _this2.removerItens(evt);
            });
        }
    }]);

    return DocEstrutura;
}();

var docEstruturaController = new DocEstrutura();

function currentInstance() {
    return docEstruturaController;
}
//# sourceMappingURL=DocEstrutura.js.map