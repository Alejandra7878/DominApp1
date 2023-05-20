const User = require('../models/User')

const getUsu= async (req, res)=>{
    const users = await User.find()
    res.json(users)
}

const createUser = async(req, res)=>{
    const{ name } = req.body;
    const newUsu =new User({
        name: name
    })
    await newUsu.save();
    res.json({message: "El usuario ha sido creado"})
}

const getUser = async(req, res)=>{
    const user= await User.findById(req.params.id)
    res.json(user)
}

const deleteUser= async(req, res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.json({message: 'usuario ha sido eliminado'})
}

const updateUser= async  (req, res)=>{
    const {name}= req.body;
    await User.findByIdAndUpdate( req.params.id,{
        name
    })
    res.json({ message:'el usuario ha sido actualizado'})
}


module.exports={
    getUsu,
    createUser,
    getUser,
    deleteUser,
    updateUser
}