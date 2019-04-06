const EventEmitter = require('events');
const eventsEmitter = new EventEmitter();

eventsEmitter.on('tutorial', (num1,num2) => {
    console.log(num1+num2);
});

eventsEmitter.emit('tutorial',1,33);