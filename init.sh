docker  exec mongodb-config mongosh /docker-entrypoint-initdb.d/init-configsvr.js
docker  exec mongodb-shard0-1 mongosh /docker-entrypoint-initdb.d/init-shard1.js
docker  exec mongodb-router mongosh  mongodb://127.0.0.1:27017/admin  /docker-entrypoint-initdb.d/init-mongos.js
