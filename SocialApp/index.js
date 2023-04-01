const express = require("express")

const app = express()

const PORT = 3000

app.get("/", (req, res) => {
    const data = {
        "name": "prithvi",
        "follow": 300,
        "follower": 600
    }
    res.status(200).send(data)
})

app.listen(PORT, () => {
    console.log("Server Running")
})