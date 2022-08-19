const categoryService = require("../services/categoryService.js")

// Mostrar todos las categorias
const getAllcategorys = async (req, res) =>{
    const allcategorys = await categoryService.getAllcategorys()
    res.status(200).json({status: "ok", data: allcategorys})
}

// Mostrar una categoria
const getOnecategory = async (req, res) => {
    const id = req.params.id
    const datos = await categoryService.getOnecategory(id)
    res.status(200).json({status: "ok", data: datos})
}

// Crear una categoria
const createNewcategory = async (req, res) => {
    const {name} = req.body

    if(!name){
        res.status(400).json({status: "Error", 
                  err: "Debes llenar todos los campos", 
                  reason: "Tienes un campos vacio"})
    } 
    const newcategory = {
        name: name,
    }
        const createdcategory = await categoryService.createNewcategory(newcategory)
        res.status(201).json({msg: "categoria creada exitosamente", data: createdcategory})
    
}

// Actualizar una categoria
const updatecategory = async (req, res) => {
    const id  = req.params.id
    const {name} = req.body

    if(!id || !name){
        res.status(400).json({status: "Error", 
                  err: "Debes llenar todos los campos", 
                  reason: "Tienes un campos vacio"})
    } 
    const editcategory = {
       name,
    }
        const editedcategory = await categoryService.updatecategory(id, editcategory)

    res.status(200).json({msg: "categoria actualizada", data: editedcategory})
}

// Eliminar una categoria
const deletecategory = async (req, res) => {
    const  id  = req.params.id
    if(!id)
    {
        res.status(400).send('ERROR: ID requerida')
    }

    const deleted = await categoryService.deletecategory(id)

    res.status(202).json({msg: "category eliminado", data: deleted})
}


module.exports = {
    getAllcategorys,
    getOnecategory,
    createNewcategory,
    updatecategory,
    deletecategory
}