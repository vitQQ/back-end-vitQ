const dotenv = require('dotenv')
dotenv.config()

const express = require('express');
const port = process.env.PORT || 3002

const routers = require("./routers")

const db = require("./config/index")
const uri = process.env.MONGO_URI

async function main(){
    try{
        await db.connect_db(uri)
        const app = express()
        
        app.use(express.json())
        app.use(routers)
    
        app.listen(port,() => {
            console.log("Server is listening on port",port)
        })
    }
    catch(error){
        console.log("main:", error.message)
    }
    
}

main()