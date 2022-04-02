const { Image } = require('../../models')
const { NotFound } = require('http-errors')

const removeImage = async (req, res) => {
    const { _id } = req.params
    const result = await Image.findByIdAndRemove(_id)
    if (!result) {
        throw new NotFound(`Image with id=${_id} not found`)
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

module.exports = removeImage