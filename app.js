const express = require('express')
const homeRouter = require('./routes/home-router.js')
require ('dotenv').config()


// Configuration des variables
const PORT = process.env.PORT || 8080;

// Génération du server web
const app = express()

app.use(express.urlencoded({ extended: true }))


app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});
  
  
  app.listen(PORT, () => console.log(`Server up on port ${PORT}`))