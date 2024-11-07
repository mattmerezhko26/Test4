const express=require("express");
const app=express();
const path=require("path");
const data = require("./test4.js");
const HTTP_PORT = process.env.PORT || 4040;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render("index");
});

app.get('/users', (req, res) => {
  res.render("users", { users: data.users });
});


app.get('/products', (req, res) => {
  res.render("products", { products: data.products });
});
app.get('/filter',(req,res) =>{
  const filter = data.products.filter(products => products.PID > 3);
  res.render("filter",{products:filter});
});
app.listen(HTTP_PORT, () => {
  console.log(`Server listening on: ${HTTP_PORT}`);
});