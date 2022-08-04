const Joi = require("joi")
const mongoose =require("mongoose")

const mongooseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50 
    }
})


const Category = mongoose.model("Category",mongooseSchema)

const categorySchema = Joi.object({
    name: Joi.string().required().min(3)
})
function validateCategory(category) {
    return result = categorySchema.validate(category)
}

    exports.Category = Category
    exports.validate = validateCategory