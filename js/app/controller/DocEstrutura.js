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
            this._renderAgregador('container-form', this._objEstrutura);
        }
    }, {
        key: '_renderAgregador',
        value: function _renderAgregador(idContainer, agregador, dadosItmIndexado) {
            var write = new _WriterService.WriterService(idContainer);
            var agregadorView = new _AgregadorBuilder.AgregadorBuilder(agregador).build(dadosItmIndexado);

            write.wr(agregadorView.html);
            this._renderItens(agregadorView.idContainerItens, agregador.itens, dadosItmIndexado);
        }
    }, {
        key: '_renderListagem',
        value: function _renderListagem(idContainer, listagem, dadosItmIndexado) {
            var _this = this;

            var write = new _WriterService.WriterService(idContainer);
            var totalItens = this._getTotalItensListagem(listagem.id);
            var builder = new _ListagemBuilder.ListagemBuilder(listagem);

            var listagemView = builder.build(this._readOnlyFields, totalItens, dadosItmIndexado);
            write.wr(listagemView.html, function () {
                $('#' + listagemView.idBotaoNovo).on('click', function (evt) {
                    _this.adicionaItemLista(listagem.id);
                });
            });

            var _loop = function _loop() {
                var idItemCorrente = 'wrap-componentes-' + listagem.id + '-' + idxEl;
                _this._renderItens(idItemCorrente, listagem.itens, _this._montaDadosItmIndexado(listagem.id, idxEl));

                var idWrapCorrente = 'wrap-item-' + listagem.id + '-' + idxEl;
                var botaoDeleteView = builder.buildBotaoDelete(idxEl);

                new _WriterService.WriterService(idWrapCorrente).wr(botaoDeleteView.html, function () {
                    $('#' + botaoDeleteView.idBotaoDelete).on('click', function (evt) {
                        return _this.removerItens(listagem.id, botaoDeleteView.indice);
                    });
                });
            };

            for (var idxEl = 0; idxEl < totalItens; idxEl++) {
                _loop();
            }
        }
    }, {
        key: '_montaDadosItmIndexado',
        value: function _montaDadosItmIndexado(idListagem, idxEl) {
            return { idListagem: idListagem, posicaoIndice: idxEl };
        }
    }, {
        key: 'adicionaItemLista',
        value: function adicionaItemLista(idListagem) {
            var _this2 = this;

            var indiceNovoElemento = this._getProximoSequencial(idListagem);
            var listagem = _JsonUtil.JsonUtil.findListagem(this._objEstrutura, idListagem);
            var builder = new _ListagemBuilder.ListagemBuilder(listagem);

            new _WriterService.WriterService('container-' + idListagem).wr(builder.buildContainerItem(indiceNovoElemento));

            var idItemCorrente = 'wrap-componentes-' + idListagem + '-' + indiceNovoElemento;
            this._renderItens(idItemCorrente, listagem.itens, this._montaDadosItmIndexado(listagem.id, indiceNovoElemento));

            var idWrapCorrente = 'wrap-item-' + listagem.id + '-' + indiceNovoElemento;
            var botaoDeleteView = builder.buildBotaoDelete(indiceNovoElemento);

            new _WriterService.WriterService(idWrapCorrente).wr(botaoDeleteView.html, function () {
                $('#' + botaoDeleteView.idBotaoDelete).on('click', function (evt) {
                    return _this2.removerItens(listagem.id, botaoDeleteView.indice);
                });
            });
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
        key: '_renderItens',
        value: function _renderItens(idContainer, listaItens, dadosItmIndexado) {
            var _this3 = this;

            console.log(idContainer);

            listaItens.forEach(function (item) {
                if (item.tipo == _Elemento.Elemento.tipo.AGREGADOR) {
                    _this3._renderAgregador(idContainer, item, dadosItmIndexado);
                } else if (item.tipo == _Elemento.Elemento.tipo.LISTAGEM) {
                    _this3._renderListagem(idContainer, item, dadosItmIndexado);
                } else {
                    var htmlRender = new _RenderService.RenderService(item, _this3._readOnlyFields, dadosItmIndexado, new _WriterService.WriterService(idContainer));

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
    }]);

    return DocEstrutura;
}();

var docEstruturaController = new DocEstrutura();

function currentInstance() {
    return docEstruturaController;
}
//# sourceMappingURL=DocEstrutura.js.map