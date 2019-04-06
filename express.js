const express = require('express');
const app = express();

//Allows you to pass body data url encoded forms.
app.use(express.json());

const courses = [
    {id: 1, name: 'Lewis'},
    {id: 2, name: 'Mike'},
    {id: 3, name: 'Joe'}

];

app.get('/', (req,res) => {
    res.send('Hello World');

});

app.get('/courses', (req,res) => {
    res.send(courses)
});

app.post('/add/course', (req,res) => {
    const course = {
        id:courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.delete('/delete/course/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('Course not found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});
app.get('/course/:id', (req,res) => {
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course){
       res.status(404);
       res.send('Course not found');
   } else {
       res.send(course)
   }
});

app.get('/example', (req,res) => {
    res.send('Example Route')
});


app.listen(9999);