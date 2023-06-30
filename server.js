const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static('public'));
app.use(express.json());

app.post('/webhook', (req, res) => {
  const eventData = req.body;
  io.emit('notification', eventData);
  res.sendStatus(200);
});

const port = 3006;
server.listen(port, () => {
  console.log(`Server aktif pada port ${port}`);
});

