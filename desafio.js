let usuario = {
  nome: "Sophia",
  email: "sosofe@email.com",
  idade: 18,
  saudacao: function () {
    return "Olá, meu nome é " + this.nome;
  }
};

for (let propriedade in usuario) {
  console.log(propriedade + ": " + usuario[propriedade]);
}

let usuarioAtualizado = {
  ...usuario,
  idade: 19
};

for (let propriedade in usuarioAtualizado) {
  console.log(propriedade + ": " + usuarioAtualizado[propriedade]);
}