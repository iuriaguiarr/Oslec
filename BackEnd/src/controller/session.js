const connection = require('../database/connection');

module.exports = {
  async login_cliente(request, response) {
    //requisição do código
    const { code } = request.body;
    //Query SELECT * FROM parceiros_clientes WHERE codigo = code;
    const [result] = await connection('parceiros_clientes')
      .where({ codigo: code })
      .select('*');
    //Caso o resultado não retorne os dados
    if (!result) {
      return response.status(400).json({ "Erro": "Código não cadastrado" });
    }

    return response.json({ result });
  },
  async login_suporte(request, response) {
    //requisição do código
    const { code } = request.body;
    //Query SELECT * FROM suporte WHERE codigo = code;
    const [result] = await connection('suporte')
      .where({ codigo: code })
      .select('*');
    //Caso o resultado não retorne os dados
    if (!result) {
      return response.status(400).json({ "Erro": "Código não cadastrado" });
    }

    return response.json({ result });
  }
}