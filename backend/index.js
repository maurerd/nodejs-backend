const express = require('express'),

    server = express(),
    cors = require('cors'),
    mysql = require('mysql');

const database = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "fullstackeletro"
})    

server.use(cors());
server.use(express());

server.get('/', (req, res) => {
    res.end("<html>Hello, World!</html>")
})    

server.get('/produtos', (req, res) => {
    const sql = "SELECT * FROM produtos JOIN pedidos ON produtos.idproduto = pedidos.idpedidos;";
    database.query(sql, (error, results) => {
        if(error){
            return error;  
        } res.json(results)
    })
})

server.get('/comentarios', (req, res) => {
    const sql = "SELECT * FROM comentarios";
    database.query(sql, (error, results) => {
        if(error){
            return error;  
        } res.json(results)
    })
})

server.post('/comentarios', (req, res) => {
    const {nome_comentarios, msg } = req.body
    const sql = `INSERT INTO comentarios(nome_msg, msg) VALUES ('${nome_msg}', '${msg}')`; 
    database.query(sql, (error, results) => {
        if(error){
            return error;  
        } res.json(results)
    })
})

    server.listen(5000, ()=>{
        console.log("Server on")
    })