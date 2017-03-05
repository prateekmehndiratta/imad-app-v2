var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
var crypto=require('crypto');


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
    res.send(counter.toString());
})
app.get('/ui/style.css', function (req, res) {
    
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});




function hash(input,salt){
    //how to create a hash
    var hashed=crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
return["pbkdf2",salt,"10000",hashed.toString('hex')].join('$');
}  

app.get('/hash/:input', function(req,res) {
var hashedString=hash(req.params.input,'This is sone random string');
res.send(hashedString);
});

app.post('/create-user', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    
    varsalt=crypto.getRandomBytes(128).toString;
    var dbString=hash(passwordsal);
pool.query('INSERT INTO "user"(username,password) VALUES ($1,$2)', [username.dbString], function(err,result) {
   
   if(err) {
            res.status(500).send(err.toString());
        }
        else{
            res.send('USER SUCCESFULLT CREATED'+ username);
        }
});
});
var pool=newPool(config);
app.get('/test-db',function(req,res)
{
    pool.query('SELECT * FROM TEST',function(err,result){
        if(err) {
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result.rows));
        }
    });
});
        

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
app.get('/ui/main.js', function (req, res) {
res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
