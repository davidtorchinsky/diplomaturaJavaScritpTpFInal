"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Esquema Usuario
var UsuarioSchema = Schema({
    mail: {
        type: String,
        unique: true,
    },
    password: String,

    //ver esta parte
    logoUrl: String,

    //Relacion con Post
    post: [{
        type: Schema.Types.ObjectId,
        ref: "Post",
    }, ],

    //Relacion con comentarios
    comentarios: [{
        type: Schema.Types.ObjectId,
        ref: "Comentario",
    }, ],
});
var Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;