const express = require("express")
const mongoose = require("mongoose")
const app = express()
const categories = require("./routes/categories")
const customers = require("./routes/customers")
const port = process.env.PORT || 5000

mongoose.connect("mongodb://localhost/categories")
    .then(() => {
        console.log("MongoDb ga ulandi ...")
    })
    .catch((err) => {
        console.log("MongoDb ga ulanmadi xato ...",err)
    })


app.use(express.json())
app.use("/api/categories", categories)
app.use("/api/customers", customers)


app.listen(port,() => {
    console.log(`${port} ni portni eshitib boshladim ....`)
})