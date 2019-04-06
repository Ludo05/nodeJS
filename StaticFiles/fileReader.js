const fs = require('fs');

const text = `Hi There this is the test that I want to read to the file`;
fs.writeFile('MyTestFiles.txt',text,(err) => {
    if(err){
        console.log(err)
    } else {
        console.log('Was succesfull written');
        fs.rename('MyTestFiles.txt','NewName.txt', err=> {
            if(!err){
                console.log('Renamed Files')
            }
        })
        fs.readFile('NewName.txt','utf8',(err,data) => {
    if(!err){
        console.log(data)
    }
})
    }
});

