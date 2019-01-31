// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5c51f40dc750ab2248153782')
//   }, {
//     $set: {
//       completed: true
//     }
//   }, {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
//   });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c4f057d99f7bb04a53183ca')
  }, {
    $set: {
      name: 'Abhay'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
