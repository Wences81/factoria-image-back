const { Image } = require('../../models');

const listImages = async (req, res) => {
    const images = await Image.find({})
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: images
        }
    })
}

module.exports = listImages