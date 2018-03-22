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

    //  Insert the document
    // db.collection('test').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert Test');
    //     }
    //     console.log(JSON.stringify(result.ops));
    // })

    //Fetch the document
    db.collection('test').find({_id:new ObjectID('5ab3f34280f2cfab9a2a2415')}).toArray()
    .then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos',err);
    });
    client.close();
});