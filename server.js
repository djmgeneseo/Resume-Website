// const express = require('express');
// const app = express();
// const port =  process.env.PORT || 3000;
// const path = require('path')
// const cookieParser = require('cookie-parser');
// const cors = require('cors')

// http.createServer(app).listen(80)


// // CORS-enabled for all origins
// // app.use(cors({
// //   allowedHeaders: ["Authorization","Content-Type"],
// //   origin: "http://localhost:80",
// //   methods: "GET,PUT,POST,DELETE,OPTIONS",
// //   preflightContinue: false,
// //   credentials: true
// // }))

// // SET HEADERS
// app.use(function (req, res, next) {
//     // Check if user's authentication jwt cookie is saved in their browser
//     if(req.cookies?.token) {
//       req.token = req.cookies.token
//     }
//     next();
// });

// // MIDDLEWARE
// app.use(express.json());
// app.use(cookieParser());
 

// // Handles requests that don't match the ones above
// app.get('*', (req,res) =>{
    //   console.log('server 404')
    //     res.status(404).json({status: '404', messenger: 'That resource does not exist.'})
    // });
    
    // app.listen(3000, 'localhost', () => {
        //     console.log('Express server started on port %s at %s', server.address().port, server.address().address);
        //     console.log("listening on port " + 3000);
        // });
        
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