const jsonServer=require("json-server")

const serverStart=jsonServer.create()

const router=jsonServer.router("db.json");

const middleware=jsonServer.defaults();

const port=4000 || process.env.port

serverStart.use(middleware)
serverStart.use(router)

serverStart.listen(port,()=>{
    console.log("connected to port 4000")
})