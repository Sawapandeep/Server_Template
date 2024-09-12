const express = require('express');
const axios = require('axios');
const address="https://jsonplaceholder.typicode.com/";
const app=express();
const PORT=3000 || process.env.PORT;


//! A simple get endpoint

app.get('/users',async(req,res)=>{
    try{
   const response=await  axios.get(address+'users');
        console.log('data fetched 👍🏻')
        res.status(200).json(response.data); 
    }
     catch(error){
        res.status(500).json({ message: 'Error fetching data 🥹' });
    }
});



app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}/`);
})