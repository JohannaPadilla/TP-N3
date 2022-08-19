const post = require("../database/post.js")

// Mostrar todos los posts
const getAllposts = () => {
    const allposts = post.getAllposts()
    return allposts
}

// Mostrar un post
const getOnepost = (id) => {
    return post.getOnepost(id)
}

// Crear un post
const createNewpost = (newpost) => {
    const createdpost = post.createNewpost(newpost)
    return createdpost
}

// Actualizar un post
const updatepost = (id, newpost) => {
    return post.updatepost(id, newpost)
}

// Eliminar un post
const deletepost = (id) => {
    return post.deletepost(id)
}

module.exports = {
    getAllposts, 
    createNewpost,
    getOnepost,
    updatepost,
    deletepost
}