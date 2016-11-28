'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NumeroBuilder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Builder2 = require('./../_Builder');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumeroBuilder = exports.NumeroBuilder = function (_Builder) {
    _inherits(NumeroBuilder, _Builder);

    function NumeroBuilder(elementoNumero) {
        _classCallCheck(this, NumeroBuilder);

        return _possibleConstructorReturn(this, (NumeroBuilder.__proto__ || Object.getPrototypeOf(NumeroBuilder)).call(this, elementoNumero));
    }

    _createClass(NumeroBuilder, [{
        key: 'build',
        value: function build(readOnly, dadosItmIndexado) {
            var id = _get(NumeroBuilder.prototype.__proto__ || Object.getPrototypeOf(NumeroBuilder.prototype), 'elemento', this).id;
            var seq = _get(NumeroBuilder.prototype.__proto__ || Object.getPrototypeOf(NumeroBuilder.prototype), 'elemento', this).seq;
            var label = _get(NumeroBuilder.prototype.__proto__ || Object.getPrototypeOf(NumeroBuilder.prototype), 'elemento', this).label;

            var html = '            \n\t\t<div class=\'row cinza campo\' data-label=\'' + label + '\' data-seq=\'' + seq + '\'>\n\t\t\t<div class=\'col-md-4\' id=\'label-texto-' + id + '\'> ' + label + ' ' + _get(NumeroBuilder.prototype.__proto__ || Object.getPrototypeOf(NumeroBuilder.prototype), 'tagObrigatorioLabel', this).call(this) + '</div>\n\t\t\t<div class=\'col-md-8\'>\n\t\t\t\t<input type=\'text\'\n                    style=\'text-align:right\'\n                    class=\'form-control\'\n                    ' + _get(NumeroBuilder.prototype.__proto__ || Object.getPrototypeOf(NumeroBuilder.prototype), 'tagObrigatorioInput', this).call(this) + '\n                    ' + _get(NumeroBuilder.prototype.__proto__ || Object.getPrototypeOf(NumeroBuilder.prototype), 'getReadOnlyHtml', this).call(this, readOnly) + '\n                    ' + _get(NumeroBuilder.prototype.__proto__ || Object.getPrototypeOf(NumeroBuilder.prototype), 'getIdHtml', this).call(this, id, dadosItmIndexado) + '" />\t\t\n\t\t\t</div>\n\t\t</div>\n        ';

            return {
                html: html
            };
        }
    }]);

    return NumeroBuilder;
}(_Builder2.Builder);
//# sourceMappingURL=NumeroBuilder.js.map