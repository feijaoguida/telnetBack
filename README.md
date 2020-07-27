# TelNet - Telecon

Desenvolvimento Api para Simulação de planos de minutos para os clientes da TelNet Telecon. Foram criados algumas rotas para Simulação, Cadastros, Listagem e Deleção.

Para acessar aplicação hospedada em um servidor online, use o link. https://telnetback.herokuapp.com este serviço esta usando um plano gratuido, por esse motivo, depois de algum tempo de inatividade o servidor hiberna, logo, no primeiro acesso que fizer haverá uma demora um pouco maior.

  - **post /session** - Gera o token Jwt -  No backend esta implementado a Logica porem no front como não consegui terminar a parte de login, ela esta inutilizada aqui.

  - **get /user** - Rota retorna os usuário cadastrados na base.
  - **post /user** - Criação de usuários na base.
Recebe os paramentros para a Criação.
{ name, email, password, validatePassword }

  - **delete /user/:id** - Fez a Deleção do usuário na Base de dados, Recebe o Id como paramentro na URL.

  - **get /plans** - Lista os Planos da base
  - **post /plans** - Cadastro do Plano
Recebe os paramentros para a Criação.
{ description, period }
  - **delete /plans/:id** - Fez a Deleção do Plano do usuário na Base de dados, Recebe o Id como paramentro na URL.

  - **get /tariff** - Lista Tarifas da base, com base na origem e destino do cliente.
  - **post /tariff** - Cadastro de Tarifas.
Recebe os paramentros para a Criação.
{ origin, destiny, price }
  - **delete /tariff/:id**  Fez a Deleção da tarifa na Base de dados, Recebe o Id como paramentro na URL.

  - **post /simulacao** - Com base nos paramentros enviados faz a simulação dos valores com ou sem plano.
Recebe os paramentros para simular.
{ idPlans, period, idTariff }


# Download e Local

  - Você pode fazer o download da aplicação em sua maquina, rodar o comando **npm** para ele atualizar os pacotes, feito isso **npm dev** para execultar como desenvolvedor.
  - 
### Tecnologias

 - Backend foi desenvolvidor usando NodeJs + Express
 - Utilizando o banco de dados sqlite3 + knex como ponte
 - JWT para geração de token e autenticação - Este esta a regra e negocio implementada, porem esta "comentada" a utilização, pois no frontEnd não deu prazo de entregar.
