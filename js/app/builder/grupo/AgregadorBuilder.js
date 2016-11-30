'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AgregadorBuilder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Builder2 = require('./../_Builder');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AgregadorBuilder = exports.AgregadorBuilder = function (_Builder) {
    _inherits(AgregadorBuilder, _Builder);

    function AgregadorBuilder(agregador) {
        _classCallCheck(this, AgregadorBuilder);

        return _possibleConstructorReturn(this, (AgregadorBuilder.__proto__ || Object.getPrototypeOf(AgregadorBuilder)).call(this, agregador));
    }

    _createClass(AgregadorBuilder, [{
        key: 'build',
        value: function build(dadosIndexado) {
            var id = _get(AgregadorBuilder.prototype.__proto__ || Object.getPrototypeOf(AgregadorBuilder.prototype), 'elemento', this).id;
            var seq = _get(AgregadorBuilder.prototype.__proto__ || Object.getPrototypeOf(AgregadorBuilder.prototype), 'elemento', this).seq;
            var label = _get(AgregadorBuilder.prototype.__proto__ || Object.getPrototypeOf(AgregadorBuilder.prototype), 'elemento', this).label;

            var idBuild = _get(AgregadorBuilder.prototype.__proto__ || Object.getPrototypeOf(AgregadorBuilder.prototype), 'getId', this).call(this, id, dadosIndexado);
            var idContainerItens = 'container-' + idBuild;

            var html = '\n            <div class=\'clearfix nivel1 agragador\' id=\'' + idBuild + '\' data-id=\'' + id + '\' data-seq=\'' + seq + '\' data-label=\'' + label + '\'>\n                <h3 class=\'titulo-agregador clearfix\'>\n                    <a data-id=\'' + id + '\' class=\'link-agregador\' id=\'link-' + id + '\'>' + label + '</a>\n                </h3>\n                <div class=\'container-sortable\' id=\'' + idContainerItens + '\'></div\n            </div>\n        ';

            return {
                idContainerItens: idContainerItens,
                html: html,
                idBuild: idBuild
            };
        }
    }]);

    return AgregadorBuilder;
}(_Builder2.Builder);
//# sourceMappingURL=AgregadorBuilder.js.map