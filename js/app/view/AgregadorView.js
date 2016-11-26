"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AgregadorView = exports.AgregadorView = function () {
    function AgregadorView() {
        _classCallCheck(this, AgregadorView);
    }

    _createClass(AgregadorView, null, [{
        key: "render",
        value: function render(agregador) {
            var id = agregador.id;
            var seq = agregador.seq;
            var label = agregador.label;

            return "\n            <div class='clearfix nivel1 agragador' id='" + id + "' data-seq='" + seq + "' data-label='" + label + "'>\n                <h3 class='titulo-agregador clearfix'>\n                    <a data-id='" + id + "' class='link-agregador' id='link-" + id + "'>" + label + "</a>\n                </h3>\n                <div class='container-sortable' id='container-" + id + "'></div\n            </div>\n        ";
        }
    }]);

    return AgregadorView;
}();
//# sourceMappingURL=AgregadorView.js.map