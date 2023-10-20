rs.initiate({
  _id: "shard1ReplSet",
  members: [
      { _id: 0, host: "mongodb-shard1-1:27017" },
      { _id: 1, host: "mongodb-shard1-2:27017" }
  ]
});
