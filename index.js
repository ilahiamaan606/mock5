const JsonServer = require('json-server');
const cors = require('cors');
require("dotenv").config();
const server = JsonServer.create();
const router = JsonServer.router('db.json');
const middleware = JsonServer.defaults()


server.use(middleware);
server.use(router);
server.use(JsonServer.bodyParser);

server.listen(process.env.port,()=>{
    console.log('running on port '+process.env.port);
})