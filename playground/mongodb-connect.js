const MongoClient = require('mongodb').MongoClient;

MongoClient.connect( 'mongodb://localhost:27017/ToDoAppDB' , (err , client) => {

    if( err ){
        return console.log("Unable to connect to mongodb : " , err);
    }

    const db = client.db('ToDoAppDB');
    console.log("Connected to MongoDB server");

//    db.collection('Todos').insertOne( {
//
//        text : 'Hello World',
//        completed : false
//
//    } , (err,result) => {
//
//        if(err){
//            return console.log('Unable to insert todo : ' , err);
//        }
//
//        console.log(JSON.stringify(result.ops , undefined , 2));
//
//    } );

    db.collection('Users').insertOne( {

        name : 'User 1',
        age : 22,
        location : 'Delhi'

    } , (err,result) => {

        if(err){
            return console.log('Unable to insert todo : ' , err);
        }

        console.log(JSON.stringify(result.ops , undefined , 2));

    } );

    client.close();

} );


