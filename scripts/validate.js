use admin;
db.createUser({user:'appuser',pwd:'AppUser@01',roles:[{role:'dbOwner',db:'appdb'}]});

use appdb;
sh.enableSharding("appdb");
db.createCollection("book")
db.device.ensureIndex({createTime:1})
sh.shardCollection("appdb.book", {bookId:"hashed"}, false, { numInitialChunks: 4} )

var cnt = 0;
for(var i=0; i<1000; i++){
    var dl = [];
   for(var j=0; j<100; j++){
       dl.push({
               "bookId" : "BBK-" + i + "-" + j,
               "type" : "Revision",
               "version" : "IricSoneVB0001",
               "title" : "Jackson's Life",
               "subCount" : 10,
               "location" : "China CN Shenzhen Futian District",
               "author" : {
                     "name" : 50,
                     "email" : "RichardFoo@yahoo.com",
                     "gender" : "female"
               },
               "createTime" : new Date()
           });
     }
     cnt += dl.length;
     db.book.insertMany(dl);
     print("insert ", cnt);
}

db.book.getShardDistribution();
