rs.initiate({
  _id: "shard0ReplSet",
  members: [
      { _id: 0, host: "mongodb-shard0-1:27017" },
      { _id: 1, host: "mongodb-shard0-2:27017" }
  ]
});
