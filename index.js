/*
  0 - Obter um usuário
  1 - Obter o número de telefone do usuário através de seu Id
  2 - Obter endereço do usuário a partir do Id do usuário
*/


function obterUsuario(callback) {
  setTimeout(() => {
    return callback({ id: 123, name: 'Edson Bruno' });
  }, 1000);
}

function obterTelefone(idUser, callback) {
  setTimeout(() => {
    return callback({ tel: '(11) 99586-2568' });
  }, 2000);
}

function obterEndereco(idUser, callback) {
  setTimeout(() => {
    return callback({ address: 'Rua Mococa, 269 - São Paulo - SP' });
  }, 3000);
}

function print(message, callback) {
  return callback(message);
}

// callback hell
function main() {
  obterUsuario(({ id, name }) => {
    obterTelefone(id, ({ tel }) => {
      obterEndereco(id, ({ address }) => {
        return {
          Nome: name,
          Telefone: tel,
          Endereco: address,
        };
      })
    })
  });

}
main();