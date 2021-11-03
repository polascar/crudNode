const express = require('express');
const server = express();
server.use(express.json());
const geeks = [];

//Listar todos
server.get('/geeks', (req, res) => {
	return res.json(geeks);
});

//Listar um
server.get('/geeks/:index', (req, res) => {
	return res.json(req.user);
});

//Criar um
server.post('/geeks', (req, res) => {
	const { name } = req.body;
	geeks.push(name);
	return res.json(geeks);
});

//Editar um
server.put('/geeks/:index', (req, res) => {
	const { index } = req.params;
	const { name } = req.body;

	geeks[index] = name;

	return res.json(geeks);
});

//Deletar um
server.delete('/geeks/:index', (req, res) => {
	const { index } = req.params;

	geeks.splice(index, 1);

	return res.send();
});

server.listen(3000);
