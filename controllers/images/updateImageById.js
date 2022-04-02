const { Image } = require('../../models')
const { NotFound } = require('http-errors')

const updateImageById = async (req, res) => {
    const { id } = req.params
    const result = await Image.findByIdAndUpdate(id, req.body, { new: true })
    if (!result) {
        throw new NotFound(`Image with id=${id} not found`)
    }
    res.json({
        status: 'success',
        code: 200,
        message: 'image deleted',
        data: {
            result
        }
    })
}

module.exports = updateImageById