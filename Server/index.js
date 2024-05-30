const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const PORT=3001;
const exphbs=require("express-handlebars");
const fileupload=require('express-fileupload');
const multer = require('multer');
const upload = multer({dest: 'public/uploads/'}).single('file');


app.use(express.json())
// app.engine("hbs",exphbs({extname:'.hbs'}));

app.set('view engine','hbs')
app.use(fileupload());



const mysql = require("mysql");

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'aarib',
    database: "cruddatabase"
});

app.use(express.json())



app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.send("hello Wd")
})

app.get("/getData", (req, res) => {
    const sqlSelect = "SELECT * FROM postedrecipes;";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
        console.log(err)

    })


});

app.get("/getData/:customer", (req, res) => {
    const customer = req.params.customer
    const sqlSelect = "SELECT id,strMeal,strMealThumb,strIngredients,strInstructions FROM postedrecipes WHERE strMeal=?;";
    db.query(sqlSelect,customer, (err, result) => {
        res.send(result)
        console.log(err)

    })


});



app.get("/api/newId", (req, res) => {
    const sqlSelect = "SELECT * FROM postedrecipes ORDER BY id DESC LIMIT 1;";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
        const chabi=result[0].id
        console.log(result[0].id)

    })
    


});


app.post("/post-recipe", function (req, res){
    let samplefile;
    let uploadpath;
   


    
    const id=req.body.id;
    const recipe = req.body.name;
    const image = req.body.image;
   
    const ingredients = req.body.ingredients;
    const procedure = req.body.procedure;
    // uploadpath=__dirname+"/upload/"+image.name;

    console.log(image);
    res.send("Done")
    


    const sqlInsert = "INSERT INTO `postedrecipes`  (id,strMeal,strMealThumb,strIngredients,strInstructions) VALUES (?,?,?,?,?);";
    db.query(sqlInsert, [id,recipe,image,ingredients,procedure], (err, result) => {
        // res.send(result)
        // console.log(err)

    })




});



// app.post("/api/insert", function (req, res) {

//     const name = req.body.name;
//     const billno = req.body.billno;
//     const contactno = req.body.contactno;

 
//     const address = req.body.address;
//     const age = req.body.age;


//     const sqlInsert = "INSERT INTO customerdetails (name,billno,contactno,address,age) VALUES (?,?,?,?,?);";
//     db.query(sqlInsert, [name, billno, contactno, address, age], (err, result) => {
//         res.send(result)
//         // console.log(err)

//     })
// })









app.listen(3001, () => {
    console.log("Server started")
});

