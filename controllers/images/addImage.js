const { Image } = require('../../models')
const { NotFound } = require('http-errors')

const addImage = async (req, res) => {
    const result = Image.create(req.body)
    if (!result) {
        throw new NotFound('missing required name field')
    }
    res.status(201).json({
        status: 'success',
        code: 201,
        data: {
            result
        }
    })
}

module.exports = addImage