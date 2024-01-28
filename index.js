
const express = require("express")
const app = express()
const port  = 80
const data = require("./data.js")
const sata = require("./data.json")


//Routes
///

app.get("/api", (req,res)=> {
    return res.json(sata)
})

app.use("/", (req, res, next)=> {
    const filters = req.query;
    const filterdUser = data.filter(user => {
        let isvalid = true
        for(key in filters) {
            console.log(key, user[key, filters[key]]);
            isvalid = isvalid && user[key] == filters[key];
        }
        return isvalid;
    })
    res.send(filterdUser)
})



app.listen(port, ()=> console.log(`server started at port ${port}`) )