const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


// Mostrar todos los usuarios
const getAllUsers = async () => {
    const allUsers = await prisma.user.findMany()
    return allUsers
}

// Mostrar un usuario
const getOneUser = async (id) => {
    
    const oneUser = await prisma.user.findUnique({
        where: {
            id: Number(id)
        }
    })
    return oneUser
}

// Crear un usuario
const createNewUser = async (newUser) => {
    const createdUser = await prisma.user.create({
        data: newUser
    })
    return createdUser
}

// Actualizar un usuario
 const updateUser = async (id, newUser) =>{
    const updateUser = await prisma.user.update({
        where: {
            id: Number(id)
        },
        data: newUser
    })
    return updateUser
 }

// Eliminar un usuario
 const deleteUser = async (id) => {
    const deletedUser = await prisma.user.delete({
        where:{
            id: Number(id)
        }
    })
    return deletedUser
 }

module.exports = {
    getAllUsers,
    createNewUser,
    getOneUser,
    updateUser,
    deleteUser
}