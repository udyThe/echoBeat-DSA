require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json()); // allows me to use json
const connectDb = require ("./utils/db")
const authRoute = require("./router/auth-router")
const contactRouter = require("./router/contact-router")
app.use("/api/auth" , authRoute);
app.use("/api/form" , contactRouter);
const PORT = 5000;
connectDb().then(() =>{
app.listen(PORT, () =>{
    console.log(`server is running at ${PORT}`);
});
});