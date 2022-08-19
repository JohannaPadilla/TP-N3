const userService = require("../services/userService.js")

// Mostrar todos los usuarios
const getAllUsers = async (req, res) =>{
    const allUsers = await userService.getAllUsers()
    res.status(200).json({status: "ok", data: allUsers})
}

// Mostrar un usuario
const getOneUser = async (req, res) => {
    const id = req.params.id
    const datos = await userService.getOneUser(id)
    res.status(200).json({status: "ok", data: datos})
}

// Crear un usuario
const createNewUser = async (req, res) => {
    const {name, age, email, country} = req.body

    if(!name || !age || !email || !country){
        res.status(400).json({status: "Error", 
                  err: "Debes llenar todos los campos", 
                  reason: "Tienes un campos vacio"})
    } 
    const newUser = {
        name: name,
        age: age,
        email: email,
        country: country
    }
        const createdUser = await userService.createNewUser(newUser)
        res.status(201).json({msg: "Usuario creado exitosamente", data: createdUser})
    
}

// Actualizar un usuario
const updateUser = async (req, res) => {
    const id  = req.params.id
    const {name, age, email, country} = req.body

    if(!id || !name || !age || !email || !country){
        res.status(400).json({status: "Error", 
                  err: "Debes llenar todos los campos", 
                  reason: "Tienes un campos vacio"})
    } 
    const editUser = {
       name,
       age,
       email,
       country
    }
        const editedUser = await userService.updateUser(id, editUser)

    res.status(200).json({msg: "Usuario actualizado", data: editedUser})
}

// Eliminar un usuario
const deleteUser = async (req, res) => {
    const  id  = req.params.id
    if(!id)
    {
        res.status(400).send('ERROR: ID requerida')
    }

    const deleted = await userService.deleteUser(id)

    res.status(202).json({msg: "Usuario eliminado", data: deleted})
}


module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser
}