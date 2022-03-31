const {request, response} = require('express');
const User = require('../models/User')

const usersGet = async(req,res = response)=>{
   const user = await User.find({status:true})
   if(!user){
       return res.status(400).json({
           msg:'No se encontraron usuarios...'
       })
   }
   res.json({
       user
   })
}
const usersPost = (req = request,res = response)=>{
   const {name,mail,password,google,role} = req.body;

   const user = new User({name,mail,password,google,role});

   user.save();

   res.json({
      user
   })
}
const usersPut = async(req = request,res = response)=>{
    const {id} = req.params;
    const{_id, google, mail, ...resto} = req.body;

    //corroborar que es el mismo mail
    
    const {mail:mailOrigin} = await User.findById(id)

    if(mailOrigin){
        if(mailOrigin != mail){
           const mailExistente = await User.findOne({mail})
           if(!mailExistente){
               resto.mail = mail;
           }
           else{
            return res.status(400).json({msg:'El mail ya se encuentra almacenado'})
        }
        }else{
            return res.status(400).json({msg:'El mail es identico al que ya se encuentra almacenado'})
        }
    }
    //ecnriptacion de contraseña


    const userDb  = await User.findByIdAndUpdate(id, resto,{new:true})
   res.json({
      userDb
   })
}
const usersDelete = async(req = request,res = response)=>{
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id,{status:false},{new:true})
   res.json({
       user
   })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
}