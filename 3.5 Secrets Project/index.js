//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";


const app =express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const password = "ILoveProgramming";
var user_password = "";

app.use(bodyParser.urlencoded({extended : true}));

function userpassword(req, res, next) {
    console.log(req.method);
    user_password = req.body["password"];
    next();
}
app.use(userpassword);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


app.post("/check", (req, res) => {
    if(user_password == password) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.sendFile(__dirname +"/public/index.html");
    }

    console.log(req.body);
    res.status(200);
})


app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});