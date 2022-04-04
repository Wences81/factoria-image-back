const { Schema, model } = require('mongoose')
const Joi = require('joi')


const imageSchema = Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    }
}, { versionKey: false, timestamps: true })

const joiSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
})


const Image = model('image', imageSchema)


imageSchema.methods.setImgUrl = function setImgUrl() {

}

module.exports = {
    Image,
    joiSchema
}