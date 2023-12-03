const express = require('express');
const path= require('path');
const http= require('http');
const socketio= require('socket.io');


const app = express();
 const server= http.createServer(app);
// middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('Public'))
//setting port number
//socket
const io= socketio(server);

//run wen client connect
io.on('connection', socket=>{
    console.log('new connection');
})
const PORT= 5555 || process.env.PORT;
server.listen(PORT, (err)=>{
    if (err) console.log(err);
    else console.log(`app listening in port ${PORT}`)
});

//setting view engine

app.set('view engine', 'ejs');


//defining our route
app.get('/', (req, res)=>{
    res.render('index');
})
app.get('/chat', (req, res)=>{
    res.render('chat');
})
app.get('/chatRoom', (req, res)=>{
    res.render('chatRoom');
})
app.get('/school', (req, res)=>{
    res.render('school')
})
app.get("/school/adminJunior", (req, res)=>{
    res.render('adminJunior')
})
app.get("/school/adminSenior", (req, res)=>{
    res.render('adminSenior')
})
app.post("/school/adminSenior", (req, res) =>{
    res.redirect('adminSenior')
    console.log(req.url)  
})
app.post("/school/adminSenior", (req, res)=>{
    res.redirect('adminJunior')
})
