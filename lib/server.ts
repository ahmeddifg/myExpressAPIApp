import app from "./app";

// @ts-ignore
const port:number = process.env.PORT | 8881;

app.listen(port,()=>{

    console.log("Hello server is running here!!! on port"+port);
});
