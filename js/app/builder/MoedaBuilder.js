'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MoedaBuilder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Builder2 = require('./_Builder');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MoedaBuilder = exports.MoedaBuilder = function (_Builder) {
    _inherits(MoedaBuilder, _Builder);

    function MoedaBuilder(elementoMoeda) {
        _classCallCheck(this, MoedaBuilder);

        return _possibleConstructorReturn(this, (MoedaBuilder.__proto__ || Object.getPrototypeOf(MoedaBuilder)).call(this, elementoMoeda));
    }

    _createClass(MoedaBuilder, [{
        key: 'build',
        value: function build(readOnly, dadosItmIndexado) {
            var id = _get(MoedaBuilder.prototype.__proto__ || Object.getPrototypeOf(MoedaBuilder.prototype), 'elemento', this).id;
            var seq = _get(MoedaBuilder.prototype.__proto__ || Object.getPrototypeOf(MoedaBuilder.prototype), 'elemento', this).seq;
            var label = _get(MoedaBuilder.prototype.__proto__ || Object.getPrototypeOf(MoedaBuilder.prototype), 'elemento', this).label;

            var html = '            \n\t\t<div class=\'row cinza campo\' data-label=\'' + label + '\' data-seq=\'' + seq + '\'>\n\t\t\t<div class=\'col-md-4\' id=\'label-texto-' + id + '\'> ' + label + ' ' + _get(MoedaBuilder.prototype.__proto__ || Object.getPrototypeOf(MoedaBuilder.prototype), 'tagObrigatorioLabel', this).call(this) + '</div>\n\t\t\t<div class=\'col-md-8\'>\n\t\t\t\t<input type=\'text\'\n                    class=\'form-control campo-moeda\'\n                    data-thousands=\'.\' data-decimal=\',\'\n                    ' + _get(MoedaBuilder.prototype.__proto__ || Object.getPrototypeOf(MoedaBuilder.prototype), 'tagObrigatorioInput', this).call(this) + '\n                    ' + _get(MoedaBuilder.prototype.__proto__ || Object.getPrototypeOf(MoedaBuilder.prototype), 'getReadOnlyHtml', this).call(this, readOnly) + '\n                    ' + _get(MoedaBuilder.prototype.__proto__ || Object.getPrototypeOf(MoedaBuilder.prototype), 'getIdHtml', this).call(this, id, dadosItmIndexado) + '" />\t\t\n\t\t\t</div>\n\t\t</div>\n        ';

            return {
                html: html
            };
        }
    }]);

    return MoedaBuilder;
}(_Builder2.Builder);
//# sourceMappingURL=MoedaBuilder.js.map