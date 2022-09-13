// Importamos el response de express para que nos ayude con las sugerencias del objeto.
const { response, request } = require("express");

const getUser = (req, res = response) => {
  res.json({ msg: "get API response controlador" });
};

const postUser = (req, res) => {
	// obtenemos lo que recibimos como body en la peticion.
	const body = req.body;

	res.json({
		msg: "post API response controlador", 
		body 
	});
};

const putUser = (req = request, res) => {
	// obtenemos el id de forma dinamica, lo hemos configurado en routes.js
	const id = req.params.id;
	
  res.json({
		msg: "put API response controlador", 
		id
	});
};

const deleteUser = (req, res) => {
  res.json({ msg: "delete API response controlador" });
};

const patchUser = (req, res) => {
  res.json({ msg: "patch API response controlador" });
};

module.exports = {
  getUser,
  putUser,
  postUser,
  deleteUser,
  patchUser,
};
