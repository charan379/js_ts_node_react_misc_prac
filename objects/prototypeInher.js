"use strict";

function SError(message) {
    this.message = message;
    this.stack = (new Error()).stack
};

SError.prototype = Object.create(Error.prototype);
SError.prototype.name = "SError"


throw new SError("sdfdsf");