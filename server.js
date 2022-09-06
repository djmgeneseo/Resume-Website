var express = require('express');
var app = express();
const path = require('path')
const cors = require('cors')

// CORS-enabled for all origins
app.use(cors({
  allowedHeaders: ["Authorization","Content-Type"],
  origin: "http://localhost:3000",
  methods: "GET,PUT,POST,DELETE,OPTIONS",
  preflightContinue: false,
  credentials: true
}))
const PORT =  process.env.PORT || 3000;
// DEFINE ROUTES
app.use(express.static(path.join(__dirname, '/client/build')));

// app.get("*",(req,res,next) => {
//     res.sendFile('404.html', {root: path.join(__dirname)}, (err) => {
//         if(err) next(err)
//     })
// });


app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})