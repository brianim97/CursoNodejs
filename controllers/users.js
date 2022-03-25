const {request, response} = require('express');

const usersGet = (req,res = response)=>{
   res.json({
       msg:'users get'
   })
}
const usersPost = (req,res = response)=>{
   res.json({
       msg:'users Post'
   })
}
const usersPut = (req = request,res = response)=>{
    const {id} = req.params;
   res.json({
      id
   })
}
const usersDelete = (req = request,res = response)=>{
   res.json({
       msg:'users Delete'
   })
}
const usersPatch = (req = request,res = response)=>{
   res.json({
       msg:'users Patch'
   })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete,
    usersPatch
}