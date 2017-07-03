var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as MQTT from 'mqtt';
import * as events from 'events';
var RChat = (function (_super) {
    __extends(RChat, _super);
    function RChat() {
        return _super.call(this) || this;
    }
    RChat.prototype.on = function (event, listener) {
        _super.prototype.on.call(this, event, listener);
    };
    RChat.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return _super.prototype.emit.apply(this, [event].concat(args));
    };
    RChat.prototype.connect = function (chatServerURL, options) {
        this.client = MQTT.connect(chatServerURL, options);
        return this;
    };
    RChat.prototype.addMessage = function (channel, data) {
        this.client.publish(channel, data);
    };
    return RChat;
}(events.EventEmitter));
export { RChat };
//# sourceMappingURL=index.js.map