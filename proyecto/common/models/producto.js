'use strict';

module.exports = function (Producto) {
    Producto.ByPriceGreater = function (serial, cb) {
        Producto.find({
            where: {
                serial: {
                    gte: serial
                }
            }
        }, cb);
    };

    Producto.remoteMethod("ByPriceGreater", {
        accepts: {
            arg: "serial",
            type: "number"
        },
        returns: {
            arg: "productos",
            type: "array"
        },
        http: {
            path: "/busca-por-precio-mayoroigual",
            verb: "get"
        }
    }
    )

    Producto.ByPriceLower = function (serial, cb) {
        Producto.find({
            where: {
                serial: {
                    lt: serial
                }
            }
        }, cb);
    };

    Producto.remoteMethod("ByPriceLower", {
        accepts: {
            arg: "serial",
            type: "number"
        },
        returns: {
            arg: "productos",
            type: "array"
        },
        http: {
            path: "/busca-por-precio-menor",
            verb: "get"
        }
    }
    )

    Producto.sendEmail = function (bodyMessage, cb) {
        let message = "Este es el mensaje del email: " + bodyMessage;
        cb(null, message);
    };

    Producto.remoteMethod("sendEmail", {
        accepts: {
            arg: "bodyMessage",
            type: "string"
        },
        returns: {
            arg: "message",
            type: "string"
        },
        http: {
            path: "/sendEmail",
            verb: "get"
        }
    }
    )

};
