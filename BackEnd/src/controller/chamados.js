const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async create(request, response) {
    //requisição dos dados do chamado
    const { tipoDeErro, descricaoDeErro, fk_client } = request.body;

    const status = 'Pendente'
    
    var data = new Date();

    var dia = data.getDate();
    var mes = data.getMonth(); 
    var ano = data.getFullYear(); 
    var hora = data.getHours();
    var min = data.getMinutes();

    var dataHoraDoChamado = dia + '/' + mes + '/' + ano + ' ' + hora + ':' + min


    const dataHoraDeExecucao = 'Em andamento'
    const dataHoraDeEncerramento = 'Em andamento'
    const fk_suporte = 'Não aceito'

    //Gerando um código hexadecimal
    const codigo = crypto.randomBytes(4).toString('HEX');
    //Cadastro do chamado
    try {
      await connection('chamado')
        .insert({
          codigo, dataHoraDoChamado, dataHoraDeExecucao, dataHoraDeEncerramento, tipoDeErro,
          descricaoDeErro, status, fk_client, fk_suporte
        });
    } catch (error) {
      return response.json({ "Erro": "Problemas no cadastro do chamado" });
    }

    return response.status(400).json({ "Mensagem": "Chamado cadastrado com sucesso" });
  },

  async read(request, response) {
    //requisição do código
    const codigo = request.params.codigo;
    //Query SELECT * FROM CHAMADO WHERE codigo = codigo;
    const [chamado] = await connection('chamado')
      .where({ codigo: codigo })
      .select('*');
    //Caso o chamado não seja encontrado
    if (!chamado) {
      return response.status(400).json({ "Erro": "Chamado não encontrado" });
    }

    return response.json([chamado]);
  },

  async update(request, response) {
    //Requisição dos dados para efetuar a alteração
    const { fk_suporte, codigo } = request.body;

    const status = 'Andamento' 

    //UPDATE chamado SET tipodeErro = tipodeErro , descricaoDeErro= 'descricaoDeErro WHERE codigo = codigo;
    const result = await connection('chamado')
      .where({ codigo: codigo })
      .update({
        fk_suporte,
        status
      });
    //caso não encontre ou ocorra algum erro
    if (result == 0) {
      return response.status(400).json({ "Erro": "Problema na alteração dos dados" });
    }
    return response.json({ result });
  },

  async delete(request, response) {
    //requisição do código
    const codigo = request.params.codigo;

    //Query DELETE FROM chamado WHERE codigo = codigo;
    const result = await connection('chamado')
      .where({ codigo: codigo })
      .delete();
    //Caso o chamado não seja encontrado
    if (result == 0) {
      return response.status(400).json({ "Erro": "Chamado não encontrado" });
    }
    return response.status(200).json({ "Mensagem": "Chamado deletado com suCelso" });
  },

  async conclude(request, response) {
    //requisição do código
    const codigo = request.params.codigo;
    const status = 'Concluido'
    
    var data = new Date();

    var dia = data.getDate();
    var mes = data.getMonth(); 
    var ano = data.getFullYear(); 
    var hora = data.getHours();
    var min = data.getMinutes();

    var dataHoraDeExecucao = dia + '/' + mes + '/' + ano + ' ' + hora + ':' + min
    //Query DELETE FROM chamado WHERE codigo = codigo;
    const result = await connection('chamado')
      .where({ codigo: codigo })
      .update({status,dataHoraDeExecucao});
    //Caso o chamado não seja encontrado
    if (result == 0) {
      return response.status(400).json({ "Erro": "Chamado não encontrado" });
    }
    return response.status(200).json({ "Mensagem": "Chamado deletado com suCelso" });
  },

  async index(request, response) {
    const status = request.params.status;
    //Query SELECT * FROM chamado WHERE status = status;
    const chamados = await connection('chamado')
      .where({ status: status })
      .select('*');

    return response.json(chamados);
  }
}