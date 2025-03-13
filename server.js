const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);

// Rota de Login
server.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = router.db.get("users").value();
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({ token: "fake-jwt-token", user });
  } else {
    res.status(401).json({ error: "Usuário ou senha incorretos" });
  }
});

server.use(router);
server.listen(8000, () => {
  console.log("JSON Server rodando na porta 8000");
});
