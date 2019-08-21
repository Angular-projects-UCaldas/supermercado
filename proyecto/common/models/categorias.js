'use strict';

module.exports = function(Categorias) {

    Categorias.sendEmail = (mensaje, asunto, emailAddresses, cb) => {
        Categorias.app.models.Email.send({
            to: emailAddresses,
            from: "email test sender",
            subject: asunto,
            text: mensaje,
            html: mensaje
        }, function ( err, mail){
            console.log("email enviado");
            if (err) return err;
        }
        );
        cb(null, 'mensaje enviado: ' + mensaje);
    }

    Categorias.remoteMethod(
        'sendEmail', 
    {
        http:{
            path:'/sendEmail',
            verb: 'get'
        },
            description: [
                "Api para enviar mensajes de email."
            ],
            accepts: [
                {
                    arg: 'mensaje',
                    type: 'string',
                    required: true
                },
                {
                    arg: "asunto",
                    type: 'string',
                    required: true
                },
                {
                    arg: "emailAddresses",
                    type: 'string',
                    required: true
                }
            ],
            returns: {arg  : 'Email', type: 'string'}
    });
};
