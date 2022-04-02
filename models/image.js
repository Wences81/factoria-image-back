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

module.exports = {
    Image,
    joiSchema,
}