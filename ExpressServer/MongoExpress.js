const cors = require('cors');
const express = require('express');
const MongoClient = require('mongodb');

const app = express();
app.use(express.json());


const d =  () => {
    MongoClient.connect( 'mongodb://localhost:27017/',{ useNewUrlParser: true })
        .then(db => db.db('test'))
        .then(db => db.collection('customer').find({firstName: 'Bob'}).toArray()
        .then(r => console.log(r))
            .catch(err => console.log(err)))

};
d();
// d.collection('customer').find({firstName: 'Bob'}).toArray();

app.get('/',(req,res) => {

});


app.listen(9090, () => {
    console.log('Connected')
});
