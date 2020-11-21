const http = require('http');
const app = require('../app');

const server = http.createServer(app);


server.listen(3030,()=>{
    console.log('server started at port 3030');
})