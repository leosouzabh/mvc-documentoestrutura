'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.JsonUtil = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Elemento = require('../constantes/Elemento');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JsonUtil = exports.JsonUtil = function () {
	function JsonUtil() {
		_classCallCheck(this, JsonUtil);
	}

	_createClass(JsonUtil, null, [{
		key: '_find',
		value: function _find(elementos, tipo, id) {
			for (var x = 0; x < elementos.length; x++) {
				var e = elementos[x];

				if (e.tipo == tipo && e.id == id) {
					return e;
				} else {
					if (e.itens) {
						var grupo = JsonUtil._find(e.itens, tipo, id);
						if (grupo != null) {
							return grupo;
						}
					}
				}
			}
			return null;
		}
	}, {
		key: 'findListagem',
		value: function findListagem(rootJson, id) {
			return JsonUtil._find([rootJson], _Elemento.Elemento.tipo.LISTAGEM, id);
		}
	}]);

	return JsonUtil;
}();
//# sourceMappingURL=JsonUtil.js.map