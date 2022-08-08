/*
  0 - Obter um usuário
  1 - Obter o número de telefone do usuário através de seu Id
  2 - Obter endereço do usuário a partir do Id do usuário
*/

const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      try {
        return resolve({ id: 123, name: 'Edson Bruno' });
      } catch {
        return reject({ error: true, message: 'DEU RUIM NO USUARIO' });
      }
    }, 1000);
  });
};

function obterTelefone(idUser) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      try {
        if (idUser !== 123) {
          throw Error('ERRO ID DIFERENTE');
        }
        return resolve({ tel: '(11) 99586-2568' });
      } catch (error) {
        return reject({ error: true, message: `${error} DEU RUIM NO TELEFONE` });
      }
    }, 2000);
  });
};

function obterEndereco(idUser, callback) {
  setTimeout(() => {
    return callback(null, { address: 'Rua Mococa, 269 - São Paulo - SP' });
  }, 3000);
};

const usuarioPromise = obterUsuario();

async function main() {

  const { id, name } = await obterUsuario();
  const { tel: telefone } = await obterTelefone(id);
  const { address: endereco } = await obterEnderecoAsync(id);

  console.log(`
  Nome: ${name},
  Telefone: ${telefone}
  Endereço: ${endereco}
  `);
}
main();