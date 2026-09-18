const express = require("express");
const { createClient } = require("redis");

const app = express();
const PORT = 8081;

const redisClient = createClient({
  url: "redis://redis-server:6379"
});

redisClient.on("error", (err) => {
  console.error("Redis Error:", err);
});

async function startServer() {
  await redisClient.connect();

  app.get("/", async (req, res) => {
    let visits = await redisClient.get("visits");

    visits = visits ? parseInt(visits) + 1 : 1;

    await redisClient.set("visits", visits);

    res.send(`
      <h1>Docker Node.js + Redis Application</h1>
      <h2>Visitor Count: ${visits}</h2>
    `);
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
