const server = require("./server");

const PORT = process.env.PORT || 2001;

server.listen(PORT, () => {
  console.log(`server on port ${PORT}...`);
});
