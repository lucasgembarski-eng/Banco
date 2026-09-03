# 🏦 Banco POO — Aula de Encapsulamento e Polimorfismo

Exemplo em Node.js para a aula de POO (Backend 2DAT2).

## Conceitos que aparecem no código
- **Encapsulamento**: o saldo fica guardado dentro da classe (`#saldo`).
- **Controle de visibilidade**: `#saldo` é privado; só um *getter* deixa ler.
- **Polimorfismo**: `render()` existe na classe base e cada subclasse
  (Poupança / Corrente) faz do seu jeito.

## Como rodar
```bash
cd codigo
npm install        # instala o express
node server.js     # abre em http://localhost:3000
```
Depois abra o navegador em **http://localhost:3000**.

## Arquivos
- `contas.js`  -> as classes (Conta, ContaPoupanca, ContaCorrente)
- `server.js`  -> servidor Express que usa as classes
- `public/index.html` -> front-end visual (não precisa digitar em aula)
