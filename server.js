const express = require("express");
const { ContaPoupanca, ContaCorrente } = require("./contas");

const app = express();
app.use(express.json());
app.use(express.static("public"));


const contas =[
    new ContaPoupanca("Ana",1000),
    new ContaCorrente("Bruno", 1000),
];


const estado = () =>
    contas.map((c,id) => ({ id, titular: c.titular, tipo: c.tipo(), saldo: c.saldo }));

app.get("/contas", (req, res) => res.json(estado()));

app.post("/contras/:id/:acao", (req, res) => {
    const conta = contas[req.params.id];
    const valor = Number(req.body.valor);
    try {
        if(req.params.acao === "depositar") conta.depositar(valor);
        else if (req.params.acao == "sacar") conta.sacar(valor);

        else if (req.params.acao === "render") contas.forEach((c) => c.render ());
        res.json(estado());
    } catch (e) {
        res.status(400).json({ erro: e.message});
    }
});

app.listen(300, () => console.log("Banco rodando em http://localhost:3000"));