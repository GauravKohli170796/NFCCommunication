const express = require('express');
const app = express();
const Port=process.env.PORT || 3000;
const path=require("path");


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+"/Public/NFCComm.html"));
})

app.listen(Port,()=>{
    console.log(`Server is listening at port ${Port}`);
}).on('error', function (err) {
    console.log(`Error in hosting  :- ${err.message}`);
    setTimeout(() => {
        process.exit(0);
      }, 500);
});