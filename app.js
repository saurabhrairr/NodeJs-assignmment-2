const express = require("express");//IMPORT EXPRESS
const ejs = require("ejs");//IMPORT EJS
const app = express();
const users = [];   //EMPTY ARRAY
app.set("view engine", "ejs");


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(3300)
 
app.get("/", (req, res)=> {
    res.render("dummy-users", {users});
});

app.get("/form", (req, res)=> {
    res.render("form");
});

app.post("/user/add", (req, res)=>{
       users.push(req.body);
    res.redirect("/");
})