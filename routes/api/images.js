const express = require("express");
const { ctrlWrapper } = require("../../middlewares");
const { images: ctrl } = require("../../controllers");
const { joiSchema } = require("../../models/image")

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:id', ctrlWrapper(ctrl.getImageById))

router.post('/', auth, validation(joiSchema), ctrlWrapper(ctrl.addImage))

router.put('/:id', validation(joiSchema), ctrlWrapper(ctrl.updateImageById))

router.delete('/:id', ctrlWrapper(ctrl.removeImage))

module.exports = router;