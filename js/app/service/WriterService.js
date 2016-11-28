"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WriterService = exports.WriterService = function () {
    function WriterService(selector) {
        _classCallCheck(this, WriterService);

        this._selector = selector;
    }

    _createClass(WriterService, [{
        key: "wr",
        value: function wr(html) {
            this.write(html, null);
        }
    }, {
        key: "wr",
        value: function wr(html, callback) {
            $("#" + this._selector).append(html);
            if (callback) {
                callback();
            }
        }
    }]);

    return WriterService;
}();
//# sourceMappingURL=WriterService.js.map