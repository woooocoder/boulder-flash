const express = require('express')
const router = express.Router()

const Model = require('./../model/model')

router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const saveData = await data.save()
        res.status(200).json(saveData)
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find()
        res.json(data)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id)
        res.json(data)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id
        const updatedData = req.body
        const options = { new : true }

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await Model.findByIdAndDelete(id)
        res.send(`${data.name} has been deleted`)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
})

module.exports = router