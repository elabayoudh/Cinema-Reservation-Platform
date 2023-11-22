const express = require('express') ;
const app = express(); 

const productRoutes = require('./routes/products.js') ; 

app.use('/products', productRoutes);


module.exports={app};

app.use((req,res,next)=>{
    res.status(200).json({
        message : 'it works!  '
    });
    });

const mysql = require("mysql");
const PORT = 8080 ;

 // to fire up an API

app.listen (  
    PORT,()=> console.log(`it is alive on http ://localhost:${PORT}`) 
   // as an optional second arg to listen we can fire a callbackto let us know when the API is ready
)

app.use(express.json());
// method on app USE : as a middleware  , get request and response 


app.get('/cinemaRes', (req,res)=>{
    res.status(200).send({
          
    })
});

 app.post('/cinemaRes/:idRes',(req,res)=>{

  const {idRES} = req.params ;

  const {nom,prenom,numtel,place,seance,iduser} = req.body     
  

 })




 
