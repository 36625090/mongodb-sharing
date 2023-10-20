use admin;

db.createUser({
	user: 'root',
	pwd: 'password123',
	roles: [ { role: 'root', db: 'admin' } ]
});

db.auth('root','password123');

sh.addShard("shard0ReplSet/mongodb-shard0-1:27017");
sh.addShard("shard0ReplSet/mongodb-shard0-2:27017");

