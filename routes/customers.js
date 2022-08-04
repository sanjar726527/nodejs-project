const express = require("express")
const router = express.Router()
const {Customers,validate} = require("./models/customer")

router.get("/" , async (req,res) => {
    const customers = await Customers.find().sort("name")
    res.send(customers)
})


router.post("/",async (req,res) => {
    const {error} = validate(req.body)
    if(error)
        res.status(400).send(error.details[0].message)
    let customer = new Customers ({
        name: req.body.name,
        isVip: req.body.isVip,
        phone: req.body.phone
    })
    customer = await customer.save()
    res.status(201).send(customer)
})

router.get("/:id",async (req,res) => {
    let customer = await Customers.findById(req.params.id)
    if(!customer)
        return res.status(404).send("Berilgan id dagi hujjat topilmadi...")

    res.send(customer)
})

router.put("/:id",async (req,res) => {
    const {error} = validate(req.body)
        if(error)
            res.status(400).send(error.details[0].message)
    
    let customer = await Customers.findByIdAndUpdate(req.params.id, {name: req.body.name},{new:true})
    if(!customer){
        return res.status(404).send("Berilgan ID ga teng bo\'lgan toifa topilmadi...")
    }
    res.send(customer)
})

router.delete("/:id",async (req,res)  => {
    const customer = await Customers.findByIdAndRemove(req.params.id)
    if(!customer)
        res.status(404).send("Berilgan raqamli kitob topilmadi...")
   
    res.send(customer)     
})



module.exports = router