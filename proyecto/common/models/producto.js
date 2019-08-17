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
            path: "/busca-por-precio-mayor",
            verb: "get"
        }
    }
    )

};
