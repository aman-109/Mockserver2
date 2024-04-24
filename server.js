const jsonServer = require("json-server"); // importing json-server library
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(cors({
    origin: ["http://localhost:3000","https://20-create-gallery-view-ui-for-glotrack-all-shipment-page.d38br0ukmeynzb.amplifyapp.com"]
  }));
server.use(router);

server.listen(port);