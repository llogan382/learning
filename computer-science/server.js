const express = require('express');
const app = express();


app.use(logger);
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/users', auth, (req, res) => {
  res.send([
    {
      name: 'John',
      age: 30
    },
    {
      name: 'Sarah',
      age: 25
    },
    {
      name: 'Mike',
      age: 20
    }
  ]);
})

function logger(req, res, next){
  console.log('log')
  next()
}

function auth(req, res, next) {
  if( req.query.admin === 'true'){
    req.admin = true;
    next()
    return
  } else {
    res.send('No Auth')
  }
}



app.listen(3000)
