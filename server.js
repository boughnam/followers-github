var express = require('express')

const app = express();

app.use(express.static(__dirname + '/dist'));

app.all('*', (req,res) =>{
    res.status(200).sendFile(__dirname + '/dist/index.html');
    console.log('ca marche')
    });


app.listen(process.env.PORT || 8080,() =>{
    console.log("Port 4000");
    });