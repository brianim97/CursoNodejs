const {Schema,model} = require('mongoose');

const UserSchema = Schema({
    name:{
        type:String,
        required:[true,'El nombre es obligatorio'],
    },
    mail:{
        type:String,
        required:[true,'El mail es obligatorio'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'La password es obligatoria'],
    },
    img:{
        type:String,
    },
    role:{
        type:String,
        required:[true, 'El role es obligatorio'],
    },
    status:{
        type:Boolean,
        default:true,
    },
    google:{
        type:Boolean,
        default:false,
    }
})

module.exports = model('User',UserSchema)
