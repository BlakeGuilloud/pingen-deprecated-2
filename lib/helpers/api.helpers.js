'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateKey = generateKey;
function generateKey() {
    var length = 32;
    var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var result = '';

    for (var i = length; i > 0; --i) {
        result += characters[Math.floor(Math.random() * characters.length)];
    };

    return result;
}