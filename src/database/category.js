const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()


// Mostrar todos las categorias
const getAllcategorys = async () => {
    const allcategorys = await prisma.category.findMany()
    return allcategorys
}

// Mostrar una sola categoria
const getOnecategory = async (id) => {
    
    const onecategory = await prisma.category.findUnique({
        where: {
            id: Number(id)
        }
    })
    return onecategory
}

// Crear una categoria
const createNewcategory = async (newcategory) => {
    const createdcategory = await prisma.category.create({
        data: newcategory
    })
    return createdcategory
}

// Actualizar una categoria
 const updatecategory = async (id, newcategory) =>{
    const updatecategory = await prisma.category.update({
        where: {
            id: Number(id)
        },
        data: newcategory
    })
    return updatecategory
 }

// Eliminar una categoria
 const deletecategory = async (id) => {
    const deletedcategory = await prisma.category.delete({
        where:{
            id: Number(id)
        }
    })
    return deletedcategory
 }

module.exports = {
    getAllcategorys,
    createNewcategory,
    getOnecategory,
    updatecategory,
    deletecategory
}