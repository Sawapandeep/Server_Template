const express = require('express');
const app=express();
const PORT=3000 || process.env.PORT;

app.get('/named-port',(req,res)=>{});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})