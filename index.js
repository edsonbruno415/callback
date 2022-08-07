/*
  0 - Obter um usuário
  1 - Obter o número de telefone do usuário através de seu Id
  2 - Obter endereço do usuário a partir do Id do usuário
*/

function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      try {
        return resolve({ id: 1243, name: 'Edson Bruno' });
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

function obterEndereco(idUser) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      try {
        if (idUser !== 123) {
          throw Error('ERRO ID DIFERENTE');
        }
        return resolve({ address: 'Rua Mococa, 269 - São Paulo - SP' });
      } catch (error) {
        return reject({ error: true, message: `${error} DEU RUIM NO ENDERECO` });
      }
    }, 3000);
  });
}

const usuarioPromise = obterUsuario();

function main() {
  usuarioPromise
    .then(({ id, name }) => {
      return obterTelefone(id)
        .then(({ tel }) => {
          return obterEndereco(id)
            .then(({ address }) => ({
              id,
              name,
              tel,
              address,
            }));
        })
    })
    .then((resultado) => console.log(resultado))
    .catch(({ error, message }) => console.log(message))
}
main();