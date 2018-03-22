const {MongoClient,ObjectID} = require('mongodb');
// Connection url
const url = 'mongodb://localhost:27017/';
// Database Name
const dbName = 'test';

MongoClient.connect(url+dbName,(err,client)=>{
    if(err){
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongodbServer');
    const db = client.db('test');


    //Delete the document
    // db.collection('test').deleteMany({_id:new ObjectID('5ab3f34280f2cfab9a2a2415')})
    // .then((docs)=>{
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to delete test',err);
    // });

    db.collection('test').findOneAndDelete({_id:new ObjectID('5ab16808eac31925b4cf0459')})
    .then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to delete test',err);
    });
    client.close();
});