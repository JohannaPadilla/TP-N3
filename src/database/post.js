const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


// Mostrar todos los posts
const getAllposts = async () => {
    const allposts = await prisma.post.findMany()
    return allposts
}

// Mostrar un post
const getOnepost = async (id) => {
    
    const onepost = await prisma.post.findUnique({
        where: {
            id: Number(id)
        }
    })
    return onepost
}

// Crear un post
const createNewpost = async (newpost) => {
    const createdpost = await prisma.post.create({
        data: newpost
    })
    return createdpost
}

// Actualizar un post
 const updatepost = async (id, newpost) =>{
    const updatepost = await prisma.post.update({
        where: {
            id: Number(id)
        },
        data: newpost
    })
    return updatepost
 }

// Eliminar un post
 const deletepost = async (id) => {
    const deletedpost = await prisma.post.delete({
        where:{
            id: Number(id)
        }
    })
    return deletedpost
 }

module.exports = {
    getAllposts,
    createNewpost,
    getOnepost,
    updatepost,
    deletepost
}