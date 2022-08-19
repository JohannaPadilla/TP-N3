const User = require("../database/user.js")

// Mostrar todos los usuarios
const getAllUsers = () => {
    const allUsers = User.getAllUsers()
    return allUsers
}

// Mostrar un usuario
const getOneUser = (id) => {
    return User.getOneUser(id)
}

// Crear un usuario
const createNewUser = (newUser) => {
    const createdUser = User.createNewUser(newUser)
    return createdUser
}

// Actualizar un usuario
const updateUser = (id, newUser) => {
    return User.updateUser(id, newUser)
}

// Eliminar un usuario
const deleteUser = (id) => {
    return User.deleteUser(id)
}

module.exports = {
    getAllUsers, 
    createNewUser,
    getOneUser,
    updateUser,
    deleteUser
}