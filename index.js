const express = require ('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.listen(3000, ()=>{
    console.log('The server is on ');
});