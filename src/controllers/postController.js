const postService = require("../services/postService.js")

// Mostrar todos los posts
const getAllposts = async (req, res) =>{
    const allposts = await postService.getAllposts()
    res.status(200).json({status: "ok", data: allposts})
}

// Mostrar un post
const getOnepost = async (req, res) => {
    const id = req.params.id
    const datos = await postService.getOnepost(id)
    res.status(200).json({status: "ok", data: datos})
}

// Crear un post
const createNewpost = async (req, res) => {
    const {title, content, authorid} = req.body

    if(!title || !content || !authorid){
        res.status(400).json({status: "Error", 
                  err: "Debes llenar todos los campos", 
                  reason: "Tienes un campos vacio"})
    } 
    const newpost = {
        title: title,
        content: content,
        authorid: authorid
    }
        const createdpost = await postService.createNewpost(newpost)
        res.status(201).json({msg: "post creado exitosamente", data: createdpost})
    
}

// Actualizar un post
const updatepost = async (req, res) => {
    const id  = req.params.id
    const {title, content, authorid} = req.body

    if(!id || !title || !content || !authorid){
        res.status(400).json({status: "Error", 
                  err: "Debes llenar todos los campos", 
                  reason: "Tienes un campos vacio"})
    } 
    const editpost = {
        title,
        content,
        authorid
    }
        const editedpost = await postService.updatepost(id, editpost)

    res.status(200).json({msg: "post actualizado", data: editedpost})
}

// Eliminar un post
const deletepost = async (req, res) => {
    const  id  = req.params.id
    if(!id)
    {
        res.status(400).send('ERROR: ID requerida')
    }

    const deleted = await postService.deletepost(id)

    res.status(202).json({msg: "post eliminado", data: deleted})
}


module.exports = {
    getAllposts,
    getOnepost,
    createNewpost,
    updatepost,
    deletepost
}