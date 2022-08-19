const category = require("../database/category.js")

// Mostrar todos las categorias
const getAllcategorys = () => {
    const allcategorys = category.getAllcategorys()
    return allcategorys
}

// Mostrar solo una categoria
const getOnecategory = (id) => {
    return category.getOnecategory(id)
}

// Crear una categoria
const createNewcategory = (newcategory) => {
    const createdcategory = category.createNewcategory(newcategory)
    return createdcategory
}

// Actualizar una categoria
const updatecategory = (id, newcategory) => {
    return category.updatecategory(id, newcategory)
}

// Eliminar una categoria
const deletecategory = (id) => {
    return category.deletecategory(id)
}

module.exports = {
    getAllcategorys, 
    createNewcategory,
    getOnecategory,
    updatecategory,
    deletecategory
}