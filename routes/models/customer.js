const Joi = require("joi")
const mongoose =require("mongoose")

const mongooseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50 
    },
    isVip: {
        type: Boolean,
        default: false
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
})

const Customers = mongoose.model("Customers",mongooseSchema)

const customersSchema = Joi.object({
    name: Joi.string().required().min(5).max(50),
    isVip: Joi.boolean().required(),
    phone: Joi.string().min(5).max(50).required()
})
function validateCustomers(customer) {
    return result = customersSchema.validate(customer)
}

    exports.Customers = Customers
    exports.validate = validateCustomers