var MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/day5',function(err,db){
  console.log('open DB');
  var collection = db.collection('user');

  //collection.find().forEach();

  var value = {user_id:"test",status:"logout"};
  //value={user_id:"お昼にしよう"};
  collection.insertOne(value,function(err,r){
    console.log(value);
  });
/*  collection.updateOne({user_id:"test"},{$set:{user_id:"TEST"}},
    function(err,r){
      console.log("修正作業");
    });
  collection.deleteMany({user_id:null},function(err,r){
    console.log("削除");
  });*/
  db.on('close',function(){
    console.log('close DB');
  });
  db.close();
});
