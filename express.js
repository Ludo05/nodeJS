const express = require('express');
const Joi = require('joi');

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

    const { error } = validateCourse(req.body);
    if(error) {
        res.status(404).send(error.details[0].message);
        return;
    }

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
app.put('/put/course/:id', (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course ID was not found');

    const { error } = validateCourse(req.body);
    if(error) {
        res.status(404).send(error.details[0].message);
        return;
    }
    course.name = req.body.name;
    res.send(course)
})
app.get('/course/:id', (req,res) => {
   const course = courses.find(c => c.id === parseInt(req.params.id));
   if(!course){
       res.status(404);
       res.send('Course not found');
   } else {
       res.send(course)
   }
});


const validateCourse = course => {
    const schema = {
        name: Joi.string().min(3).max(10).required()
    };

    return Joi.validate(course, schema);

}
app.listen(9999);