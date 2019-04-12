const cors = require('cors');
const express = require('express');
const Joi = require('joi');
const data = require('./data');

const app = express();
//mongodb://<lewis1501>:<Pluto!23>@ds119663.mlab.com:19663/courses

//Allows you to pass body data url encoded forms.
app.use(express.json());
app.use(cors());

const { courses } = data;
console.log(courses);

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
    const schema = {
        name: Joi.string().min(3).max(10).required()
    };

    const {error} =  Joi.validate(req.body, schema);
    // const result =  Joi.validate(req.body, schema);
    if(error){
        console.log(error.details[0].message);
        res.status(404).send(error.details[0].message);
        return;
    }
    course.name = req.body.name;
    res.send(course)
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
app.get('/hello/:string', (req,res) => {

    const schema = {
        string: Joi.string().min(1).max(7).required()
    };
    //results validates the req.params.num1 against the schema and returns a error
    //JSON if it doesn't pass the validations.
    //TODO MUST BE A OBJECT
    const {results} = Joi.validate(req.params,schema);
    if(results) {
        console.log(results.error);
        res.send(results.error.details[0].message);
        return;
    }
    res.send('Hello' + req.params.string);
});


const validateCourse = course => {
    const schema = {
        name: Joi.string().min(3).max(10).required()
    };

    return Joi.validate(course, schema);

};
app.listen(9999);