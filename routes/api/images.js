const express = require("express");
const { ctrlWrapper, validation } = require("../../middlewares");
const { images: ctrl } = require("../../controllers");
const { joiSchema } = require("../../models/image")

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.listImages));

router.post('/', validation(joiSchema), ctrlWrapper(ctrl.addImage))

router.put('/:id', validation(joiSchema), ctrlWrapper(ctrl.updateImageById))

router.delete('/:id', ctrlWrapper(ctrl.removeImage))

module.exports = router;