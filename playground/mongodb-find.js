
const {MongoClient , ObjectID } = require('mongodb');

MongoClient.connect( 'mongodb://localhost:27017/ToDoAppDB' , (err , client) => {

    if( err ){
        return console.log("Unable to connect to mongodb : " , err);
    }

    const db = client.db('ToDoAppDB');

    db.collection('Todos').find({completed : false}).toArray().then((docs) => {
        console.log(JSON.stringify( docs , undefined , 2 ));
    } , (err) => {
        console.log(err);
    });

    client.close();

} );


