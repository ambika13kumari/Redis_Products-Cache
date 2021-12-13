const app = require("./index")

const connect = require("./configs/db")

app.listen(7352, async () => {
    await connect()
    console.log("Listening on PORT 7352")
})
