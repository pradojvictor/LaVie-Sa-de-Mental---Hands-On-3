### La Vie - Saúde Mental
##
Api La Vie 1.0.0

=> Necessario antes da inicialização (instalação)

    npm i nodemon
    npm i sequelize
    npm i mysql2
    npm i jsonwebtoken
    npm i express
    npm i express-validator
    npm i express-jwt
    npm i joi
    npm i jsonwebtoken
    npm i bcrypt


=> Criação do bando de dados (Criação-MySql)

    {caminho}: "LaVie-Hands-On-3-master\sql_start\bando de dados.sql"

=> start

    {digite}: a senha do seu banco de dados "database/index.js"
    {digite}:  crie uma coleção n Insomnia, todas informações estão em "\docs" 
    {digite/terminal}: npm rum agoravai 
##   

### HANDS ON WEEK 3
Um grupo de psicólogos se juntaram e criaram a clínica La Vie - Saúde Mental e
oferecem diversos tipos de terapia.
Para ajudar nos atendimentos, eles precisam de uma API que permita criar registros de
psicólogos, pacientes e prontuários. Em uma conversa com os Front-end eosPOforam
decididos alguns grupos de endpoints que devem ser criados.
BANCO DE DADOS
Nossa equipe também ficará responsável por criar o bancodedadosqueinclui:Criação
do DER e do script SQL que gera o banco.
Deve ser analisado os endpoints para seja montado de acordo com a necessidade,
observando os dados que constituem a 3 entidades do sistema:
- Pacientes
- Psicólogos
- Atendimentos

Se atentar corretamente a criação das relações das entidades
FUNCIONALIDADES OBRIGATÓRIAS
1. Login
O sistema deve permitir autenticação dos psicólogos para acessar a plataforma.
Os dados de autenticação devem ser um e-mail válido e umasenha(mínimo 6
caracteres).  As informações de autenticação devem ser criadas no mesmo
momento que é feito o cadastro do psicólogo.
E para formar esse sistema deve existir os seguintes endpoints:
- POST /login
Esse endpoint irá receber no body dois parâmetros que devem ser obrigatórios:
email e senha. E devem ser validados de acordo com as informações do banco
de dados.
Caso o email não exista, ou a senha não esteja correta para esse e-mail deverá
ser exibida como resposta a seguinte mensagem com o status 401:
“E-mail ou senha inválido, verifique e tente novamente”
Caso as informações estejam corretas, deve ser gerado um token JWT que
contenha o id, email e nome do psicólogo que fez o login dentro do seu
conteúdo. Esse token deve ser enviado como resposta com o status 200.
2. CRUD Psicólogos
- GET /psicologos
Deve ser listado todos os psicólogos cadastrados no banco de dados, exibindo
todos os atributos da entidade.
Caso não exista nenhum psicólogo, basta enviar um array vazio como resposta.
Em todos os casos deve ser retornado o status 200
- GET /psicologos/:id
Deve devolver um objeto com todas as informações do psicólogo do id
informado na url, com exceção da senha. O status deve ser 200 para resposta.
Caso não exista um psicólogo com o id informado deve retornar a seguinte
menssagem de erro acompanhada do status 404:
“Id não encontrado”
- POST /psicologos
Deve receber no body da requisição um objeto com as seguintes propriedades:
-nome ( Campo string ) Ex: Fabricio Oliveira
-email (Campo string) Ex:fabricio.psicologo@email.com
-senha (Campo string) Ex: 123456
-apresentacao (Campo String) Ex: Sou um psicólogoincrível e muito bom!
Todas essas informações são obrigatórias  e caso não sejam enviadas devem
exibir um status 400 indicando que há um erro na requisição.
Se o cadastro ocorrer corretamente deve devolver a resposta com o status 201 e
com as informações que foram criadas no banco.
- PUT /psicologos/:id
Você irá receber pelo params, o id do psicólogo que será atualizado.
Deve receber no body da requisição um objeto com as seguintes propriedades:
-nome ( Campo String ) Ex: Fabricio Oliveira
-email (Campo String) Ex:fabricio.psicologo@email.com
-senha (Campo String) Ex: 123456
-apresentacao (Campo String) Ex: Sou um psicólogoincrível e muito bom!
Todas essas informações são obrigatórias  e caso não sejam enviadas devem
exibir um status 400 indicando que há um erro na requisição.
Se a atualização ocorrer corretamente deve devolver a resposta com o status 200
e com as informações que foram atualizadas no banco.
- DELETE /psicologos/:id
Você irá receber pelo params, o id do psicólogo que será deletado.
Se o id existir deve ser deletado do banco de dados o psicólogo informado e
devolve como resposta o status 204
Caso não exista um psicólogo com o id informado deve retornar a seguinte
menssagem de erro acompanhada do status 404:
“Id não encontrado”
3. CRUD Pacientes
- GET /pacientes
Deve ser listado todos os pacientes cadastrados no banco de dados, exibindo
todos os atributos da entidade.
Caso não exista nenhum psicólogo, basta enviar um array vazio como resposta.
Em todos os casos deve ser retornado o status 200
- GET /pacientes/:id
Deve devolver um objeto com todas as informações do paciente do id informado
na url. O status deve ser 200 para resposta.
Caso não exista um psicólogo com o id informado deve retornar a seguinte
menssagem de erro acompanhada do status 404:
“Id não encontrado”
- POST /pacientes
Deve receber no body da requisição um objeto com as seguintes propriedades:
-nome (Campo string) Ex: Fabricio Oliveira
-email (Campo string) Ex:fabricio.psicologo@email.com
-idade (Campo Date) Ex: 06/12/1997
Todas essas informações são obrigatórias  e caso não sejam enviadas devem
exibir um status 400 indicando que há um erro na requisição.
Se o cadastro ocorrer corretamente deve devolver a resposta com o status 201 e
com as informações que foram criadas no banco.
- PUT /pacientes/:id
Você irá receber pelo params, o id do paciente que será atualizado.
Deve receber no body da requisição um objeto com as seguintes propriedades:
-nome ( Campo string ) Ex: Fabricio Oliveira
-email (Campo string) Ex:fabricio.psicologo@email.com
-idade (Campo Date) Ex: 06/12/1997
Todas essas informações são obrigatórias  e caso não sejam enviadas devem
exibir um status 400 indicando que há um erro na requisição.
Se a atualização ocorrer corretamente deve devolver a resposta com o status 200
e com as informações que foram atualizadas no banco.
- DELETE /pacientes/:id
Você irá receber pelo params, o id do paciente que será deletado.
Se o id existir deve ser deletado do banco de dados o paciente informado e
devolve como resposta o status 204
Caso não exista um paciente com o id informado deve retornar a seguinte
menssagem de erro acompanhada do status 404:
“Id não encontrado”
4. CRUD Atendimentos
- GET /atendimentos
Deve ser listado todos os atendimentos realizados por todos os psicólogos
cadastrados no banco de dados, exibindo todos os atributos da entidade.
Caso não exista nenhum atendimento, basta enviar um array vazio como resposta.
Em todos os casos deve ser retornado o status 200
- GET /atendimentos/:id
Deve devolver um objeto com todas as informações do atendimento do id
informado na url. O status deve ser 200 para resposta.
Caso não exista o atendimento com o id informado deve retornar a seguinte
menssagem de erro acompanhada do status 404:
“Id não encontrado”
- POST /atendimentos
Deve receber no body da requisição um objeto com as seguintes propriedades:
- paciente_id (Campo inteiro) Ex:: 1
- data_atendimento (Campo Data) Ex: 2020-01-01T10:10:00z
- observação (Campo String) - Ex: Descrição do atendimento,pode ser um
campo longo.
Além das informações recebidas no body, é preciso pegar o id do psicólogo que
está logado para associá-lo a esse atendimento. Lembre-se que essas
informações ficam presentes dentro do Token JWT.
Todas essas informações são obrigatórias  e caso não sejam enviadas devem
exibir um status 400 indicando que há um erro na requisição.
Se o cadastro ocorrer corretamente deve devolver a resposta com o status 201 e
com as informações que foram criadas no banco.
5. Documentação da API
Deve ser gerado uma documentação da api, colocando os endpoints existentes
assim como os dados que devem ser passados na requisição e o que será
devolvido pelo servidor como resposta.
Para isso pode ser usado o Insomnia junto com o pluginExport HTML
Documentation (Ensinado do material assíncrono), ou o postman.
6. FUNCIONALIDADE OPCIONAL
##
Dashboard
Deverá ser criados um grupo de endpoints a partir da rota /dashboard para cada tipo de
informação presente nesta lista:
- Número de pacientes
- Número de atendimentos
- Número de psicólogos
- Média de atendimentos por psicólogos
Ficando por exemplo: /dashboard/numero-paciente. Osdados a serem retornando
podem ser apenas os números dos resultados em si!
##
CRITÉRIOS DE AVALIAÇÃO
- Boas práticas em relação ao uso de JS
- Boa organização do projeto usando os princípios do  MVC
- Validação dos dados que entram na api
- Feedback de erros para os usuários
-Divisão de tarefas entre os membros da equipe seguindo os princípios da
Metodologia Ágil Scrum
-Utilizar boas práticas de versi
-onamento de código com Git
Entrega:
Deverá ser enviado o link do Github pela plataforma da Gama Academy até a próxima
sexta-feira às 11:45h

##


<body>
  <noscript>In order to view this documentation page, you have to enable JavaScript in your web browser.</noscript>
  <div id="app" data-root="."> <header style="border-top: 6px solid rgb(106, 87, 213);"><div class="header-left"><a href="javascript:" class="hamburger-toggler"><i class="fa fa-bars" aria-hidden="true"></i></a> <div class="logo"><img src="lavie_arquivos/logo.png" alt="lavie"></div> <h1 class="title">lavie</h1></div> <div class="header-right"><div class="run"><a href="https://insomnia.rest/run/?label=lavie&amp;uri=https%3A%2F%2Frafaelsangali.github.io.%2Finsomnia.json" target="_blank"><img src="lavie_arquivos/run.svg" alt="Run in Insomnia"></a></div> <div class="environment"><label for="env" style="display: inline-block;">Environment:</label> <select id="env"><option value="0" selected="selected">Base Environment</option></select></div> <a href="javascript:;" class="example-toggler" title="Toggle request examples"><i class="fa fa-code" aria-hidden="true"></i></a></div></header> <section class="wrapper"><aside class="svelte-qjien1"> <ul class="svelte-1banbqx"><li class="folder"><a href="javascript:;" class="sidebar-list-link name svelte-1banbqx"><span>DASHBOARD</span></a> </li><li class="folder"><a href="javascript:;" class="sidebar-list-link name svelte-1banbqx"><span>ATENDIMENTOS</span></a> </li><li class="folder"><a href="javascript:;" class="sidebar-list-link name svelte-1banbqx"><span>PACIENTES</span></a> </li><li class="folder"><a href="javascript:;" class="sidebar-list-link name svelte-1banbqx"><span>PSICOLOGOS</span></a> </li> </ul></aside> <section class="content svelte-uhjpwm"><div class="row"><div class="left"><h1>lavie</h1> </div> <div class="right"><div class="language-selector svelte-uhjpwm"><div class="selectContainer  svelte-1ik40xa" style=""> <input autocomplete="off" autocorrect="off" spellcheck="false" readonly="true" placeholder="" style="" class="svelte-1ik40xa"> <div class="selectedItem svelte-1ik40xa"><div class="selection">cURL</div></div>  <div class="indicator svelte-1ik40xa"><svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" class="css-19bqh2r svelte-1ik40xa"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg></div> </div></div></div></div> <div class="row"><div class="left"><h2>DASHBOARD</h2> <div class="description"><p>Através do módulo <strong>Dashboard</strong> é possível obter as seguintes <strong>métricas importantes</strong> referentes ao sistema:</p>
<ul>
<li><strong>Média De Atendimentos</strong></li>
<li><strong>Visualizar Atendimentos</strong></li>
<li><strong>Visualizar Número De Psicólogos</strong></li>
<li><strong>Visualizar Número De Pacientes</strong></li>
</ul></div> <hr></div> <div class="right"></div></div> <div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_f13779c731bb4dd9a7b57a3564382b84">&nbsp;</div> <h3 class="request-title"><strong class="get svelte-fapltk">GET</strong> Média De Atendimentos</h3> <pre class="url svelte-fapltk">localhost:3000/dashboard/media-atendimento</pre> <div class="description"><p>Endpoint para visualização da <strong>Média De Atendimentos</strong>.</p>
<p>Ao ser feita a solicitação para visualização da <strong>Média De Atendimentos</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>200:</strong> Sucesso da solicitação.</li>
<li><strong>400:</strong> Indica que a solicitação está incorreta.</li>
<li><strong>404:</strong> URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk">Bearer
 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ</div></div> </div> </div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/dashboard/media-atendimento"</span> \
  -H <span class="hljs-string">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ'</span> \
  -X GET </code></pre></div> </div></div><div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_2c0227d3a8ef4aa99a8c77c0aabf4dc3">&nbsp;</div> <h3 class="request-title"><strong class="get svelte-fapltk">GET</strong> Visualizar Atendimentos</h3> <pre class="url svelte-fapltk">localhost:3000/dashboard/numero-atendimento</pre> <div class="description"><p>Endpoint para <strong>Visualização Dos Atendimentos</strong> existentes.</p>
<p>Ao ser feita a solicitação para <strong>Visualização Dos Atendimentos</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>200:</strong> Sucesso da solicitação.</li>
<li><strong>400:</strong> Indica que a solicitação está incorreta.</li>
<li><strong>404:</strong> URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk">Bearer
 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ</div></div> </div> </div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/dashboard/numero-atendimento"</span> \
  -H <span class="hljs-string">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ'</span> \
  -X GET </code></pre></div> </div></div><div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_251debd235ac4e3da12f81100a88a29c">&nbsp;</div> <h3 class="request-title"><strong class="get svelte-fapltk">GET</strong> Visualizar Número De Pacientes</h3> <pre class="url svelte-fapltk">localhost:3000/dashboard/numero-paciente</pre> <div class="description"><p>Endpoint para visualizaçõa do <strong>Número De Pacientes</strong>.</p>
<p>Ao ser feita a solicitação para <strong>Visualizar Número De Pacientes</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>200:</strong> Sucesso da solicitação.</li>
<li><strong>400:</strong> Indica que a solicitação está incorreta.</li>
<li><strong>404:</strong> URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk">Bearer
 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ</div></div> </div> </div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/dashboard/numero-paciente"</span> \
  -H <span class="hljs-string">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ'</span> \
  -X GET </code></pre></div> </div></div><div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_20dce5550eac4a1b9b2e8d2bd4c1ebb3">&nbsp;</div> <h3 class="request-title"><strong class="get svelte-fapltk">GET</strong> Visualizar Números De Psicólogos</h3> <pre class="url svelte-fapltk">localhost:3000/dashboard/numero-psicologo</pre> <div class="description"><p>Endpoint para visualização do <strong>Número De Psicóligos</strong>.</p>
<p>Ao ser feita a solicitação para Visualizar <strong>Número De Psicólogos</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>200:</strong> Sucesso da solicitação.</li>
<li><strong>400:</strong> Indica que a solicitação está incorreta.</li>
<li><strong>404:</strong> URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk">Bearer
 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ</div></div> </div> </div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/dashboard/numero-psicologo"</span> \
  -H <span class="hljs-string">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ'</span> \
  -X GET </code></pre></div> </div></div><div class="row"><div class="left"><h2>ATENDIMENTOS</h2> <div class="description"><p>Através do módulo <strong>ATENDIMENTOS</strong> é possível executar e obter as seguintes informações:</p>
<ul>
<li><strong>Criar Novo Atendimento</strong></li>
<li><strong>Visualizar Todos Os Atendimentos</strong></li>
</ul></div> <hr></div> <div class="right"></div></div> <div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_b383e80c6e494edca4b3f058ee86bc96">&nbsp;</div> <h3 class="request-title"><strong class="post svelte-fapltk">POST</strong> Criar Novo Atendimento</h3> <pre class="url svelte-fapltk">http://localhost:3000/atendimentos</pre> <div class="description"><p>Endpoint para criação de novo atendimento.</p>
<p>Conteúdo esperado no body:</p>
<ul>
<li>paciente_id: int, requerido</li>
<li>data_atendimento: date, requerido (utilizar padrão norte americano)</li>
<li>obs: string, requerido</li>
</ul>
<p>Modelo de conteúdo esperado no body para criação de novo atendimento: <br>
{ <br>
    "paciente<em>id": 1, <br>
    "data</em>atendimento": "2020-01-01T10:10:00z", <br>
    "obs": "Descrição do atendimento para o paciente com id: 1" <br>
} <br></p>
<p>Ao ser feita a solicitação para <strong>Criação De novo Atendimento</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>200:</strong> Sucesso da solicitação.</li>
<li><strong>400:</strong> Indica que a solicitação está incorreta.</li>
<li><strong>404:</strong> URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Content-Type</div> <div class="value svelte-1wblyuk">application/json</div></div> <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk">Bearer
 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ</div></div> </div> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Body</span> <span class="note svelte-1wblyuk">json</span></div> <div class="raw-data"><pre>{
  "paciente_id": "id_paciente",
  "data_atendimento": "data_hora_atendimento",
  "obs": "Descrição do atendimento para o paciente com id: 1"
}</pre></div> </div></div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"http://localhost:3000/atendimentos"</span> \
  -H <span class="hljs-string">'Content-Type: application/json'</span> \
  -H <span class="hljs-string">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ'</span> \
  -X POST \
  -d <span class="hljs-string">'{
  "paciente_id": "id_paciente",
  "data_atendimento": "data_hora_atendimento",
  "obs": "Descrição do atendimento para o paciente com id: 1"
}
'</span> </code></pre></div> </div></div><div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_8e8ba185c596441aa5093609fe43c5a1">&nbsp;</div> <h3 class="request-title"><strong class="get svelte-fapltk">GET</strong> Visualizar Todos Os Atendimentos</h3> <pre class="url svelte-fapltk">localhost:3000/atendimentos</pre> <div class="description"><p>Endpoint para visualização dos atendimentos existentes.</p>
<p>Ao ser feita a solicitação para <strong>Visualizar Todos Os Atendimentos</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>200:</strong> Sucesso da solicitação.</li>
<li><strong>404:</strong> URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk">Bearer
 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsIm5vbWUiOiJwc2kgMzIiLCJlbWFpbCI6InRAZ21haWwuY29tIiwiaWF0IjoxNjUzNDExNDg2fQ.OnMWZxqYIxBAzY34_HGxgzkk87GFnUjH2dTmCQ4zyNQ</div></div> </div> </div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/atendimentos"</span> \
  -H <span class="hljs-string">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsIm5vbWUiOiJwc2kgMzIiLCJlbWFpbCI6InRAZ21haWwuY29tIiwiaWF0IjoxNjUzNDExNDg2fQ.OnMWZxqYIxBAzY34_HGxgzkk87GFnUjH2dTmCQ4zyNQ'</span> \
  -X GET </code></pre></div> </div></div><div class="row"><div class="left"><h2>PACIENTES</h2> <div class="description"><p>Através do módulo <strong>PACIENTES</strong> é possível executar e obter as seguintes informações:</p>
<ul>
<li><strong>Atualizar Paciente</strong></li>
<li><strong>Criar Paciente</strong></li>
<li><strong>Deletar Paciente</strong></li>
<li><strong>Pesquisar Paciente</strong></li>
<li><strong>Visualizar Todos Os Pacientes</strong></li>
</ul></div> <hr></div> <div class="right"></div></div> <div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_27417242fe4f410ca7138cec259fb81b">&nbsp;</div> <h3 class="request-title"><strong class="put svelte-fapltk">PUT</strong> Atualizar Paciente</h3> <pre class="url svelte-fapltk">localhost:3000/pacientes/6</pre> <div class="description"><p>O endpoint <strong>Atualizar Pacientes</strong> é utilizado para alterar informações referentes ao cadastro de um determinado paciente.</p>
<p>É necessário inserir o <strong>ID</strong> do paciente na URL da requisição:</p>
<p>http://localhost:3000/pacientes/id_paciente</p>
<p>Modelo de URL para solicitação da atualização de um paciente:</p>
<p>http://localhost:3000/pacientes/1</p>
<p>O número '1' é a indicação de qual paciente deve ser atualizado.</p>
<p>Conteúdo esperado no body:</p>
<ul>
<li>nome: string, requerido</li>
<li>email: string, requerido</li>
<li>idade: string, requerido (inserir ano de nascimento do paciente)</li>
</ul>
<p>Modelo de conteúdo esperado no body para criação de novo atendimento: <br>
{ <br>
    "nome": "nome<em>atualizado</em>paciente", <br>
    "email": "exemplo@email.com", <br>
    "idade": 18 <br>
} <br></p>
<p><strong>OBS.:</strong> As informações que não serão atualizadas não necessitam ser inseridas.</p>
<p>Ao ser feita a solicitação para <strong>Atualizar PAciente</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>200:</strong> Sucesso da solicitação.</li>
<li><strong>400:</strong> Indica que a solicitação está incorreta.</li>
<li><strong>404:</strong> URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Content-Type</div> <div class="value svelte-1wblyuk">application/json</div></div> <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk">Bearer
 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ</div></div> </div> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Body</span> <span class="note svelte-1wblyuk">json</span></div> <div class="raw-data"><pre>{
  "nome": "nome_paciente",
  "email": "email_paciente",
  "idade": "idade_paciente"
}</pre></div> </div></div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/pacientes/6"</span> \
  -H <span class="hljs-string">'Content-Type: application/json'</span> \
  -H <span class="hljs-string">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ'</span> \
  -X PUT \
  -d <span class="hljs-string">'{
    "nome": "nome_paciente",
    "email": "email_paciente",
    "idade": "idade_paciente"
}'</span> </code></pre></div> </div></div><div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_ed1184e3c8e846aca8f8b2e49360197a">&nbsp;</div> <h3 class="request-title"><strong class="post svelte-fapltk">POST</strong> Criar Paciente</h3> <pre class="url svelte-fapltk">localhost:3000/pacientes</pre> <div class="description"><p>O endpoint <strong>Criar Pacientes</strong> é utilizado para inserir um novo paciente no sistema.</p>
<p>Conteúdo esperado no body:</p>
<ul>
<li>nome: string, requerido</li>
<li>email: string, requerido</li>
<li>idade: string, requerido (inserir o ano de nascimento do paciente)</li>
</ul>
<p>Modelo de conteúdo esperado no body para criação de novo paciente: <br>
{ <br>
    "nome": "nome<em>novo</em>paciente", <br>
    "email": "exemplo@email.com", <br>
    "idade": 18 <br>
} <br></p>
<p>Ao ser feita a solicitação para <strong>Criar Paciente</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>200:</strong> Sucesso da solicitação.</li>
<li><strong>400:</strong> Indica que a solicitação está incorreta.</li>
<li><strong>404:</strong> URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Content-Type</div> <div class="value svelte-1wblyuk">application/json</div></div> <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk">bearer
 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsIm5vbWUiOiJwc2kgMzEiLCJlbWFpbCI6InRAZ21haWwuY29tIiwiaWF0IjoxNjUzMzI0NjczfQ.Uj6X0Z-ED45oBX2ufpStkIyfxQsyXCHyI5BlAqK5bhU</div></div> </div> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Body</span> <span class="note svelte-1wblyuk">json</span></div> <div class="raw-data"><pre>{
  "nome": "nome_novo_paciente",
  "email": "exemplo@email.com",
  "idade": "ano_nascimento__paciente"
}</pre></div> </div></div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/pacientes"</span> \
  -H <span class="hljs-string">'Content-Type: application/json'</span> \
  -H <span class="hljs-string">'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsIm5vbWUiOiJwc2kgMzEiLCJlbWFpbCI6InRAZ21haWwuY29tIiwiaWF0IjoxNjUzMzI0NjczfQ.Uj6X0Z-ED45oBX2ufpStkIyfxQsyXCHyI5BlAqK5bhU'</span> \
  -X POST \
  -d <span class="hljs-string">'{
    "nome": "nome_novo_paciente",
    "email": "exemplo@email.com",
    "idade": "ano_nascimento__paciente"
  }'</span> </code></pre></div> </div></div><div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_995361f53ecb4cf5a878398be548fa57">&nbsp;</div> <h3 class="request-title"><strong class="delete svelte-fapltk">DELETE</strong> Deletar Paciente</h3> <pre class="url svelte-fapltk">localhost:3000/pacientes/1</pre> <div class="description"><p>O endpoint <strong>Deletar Paciente</strong> é utilizado para remover um paciente do sistema.</p>
<p>É necessário inserir o <strong>ID</strong> do paciente na URL da requisição:</p>
<p>http://localhost:3000/pacientes/id_paciente</p>
<p>Modelo de URL para solicitação para deletar um paciente:</p>
<p>http://localhost:3000/pacientes/1</p>
<p>O número '1' é a indicação de qual paciente deve ser atualizado.</p>
<p>Ao ser feita a solicitação para <strong>Deletar Paciente</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>204:</strong> Sucesso da solicitação.</li>
<li><strong>404:</strong> Indica que a solicitação está incorreta ou URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk">bearer
 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsIm5vbWUiOiJwc2kgMzEiLCJlbWFpbCI6InRAZ21haWwuY29tIiwiaWF0IjoxNjUzMzI0NjczfQ.Uj6X0Z-ED45oBX2ufpStkIyfxQsyXCHyI5BlAqK5bhU</div></div> </div> </div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/pacientes/1"</span> \
  -H <span class="hljs-string">'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsIm5vbWUiOiJwc2kgMzEiLCJlbWFpbCI6InRAZ21haWwuY29tIiwiaWF0IjoxNjUzMzI0NjczfQ.Uj6X0Z-ED45oBX2ufpStkIyfxQsyXCHyI5BlAqK5bhU'</span> \
  -X DELETE </code></pre></div> </div></div><div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_e24e4181b268487790c8827eaee5ebaf">&nbsp;</div> <h3 class="request-title"><strong class="get svelte-fapltk">GET</strong> Pesquisar Paciente</h3> <pre class="url svelte-fapltk">localhost:3000/pacientes/1</pre> <div class="description"><p>Endpoint para pesquisar de um determinado paciente.</p>
<p>É necessário inserir o <strong>ID</strong> do paciente na URL da requisição:</p>
<p>http://localhost:3000/pacientes/id_paciente</p>
<p>Modelo de URL para solicitação de pesquisa de um paciente:</p>
<p>http://localhost:3000/pacientes/1</p>
<p>O número '1' é a indicação de qual paciente deve ser pesquisado.</p>
<p>Ao ser feita a solicitação para <strong>Pesquisar Paciente</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>204:</strong> Sucesso da solicitação.</li>
<li><strong>404:</strong> Indica que a solicitação está incorreta ou URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">null</div> <div class="value svelte-1wblyuk"></div></div> <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk">bearer
 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsIm5vbWUiOiJwc2kgMzEiLCJlbWFpbCI6InRAZ21haWwuY29tIiwiaWF0IjoxNjUzMzI0NjczfQ.Uj6X0Z-ED45oBX2ufpStkIyfxQsyXCHyI5BlAqK5bhU</div></div> </div> </div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/pacientes/1"</span> \
  -H <span class="hljs-string">'null: '</span> \
  -H <span class="hljs-string">'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjgsIm5vbWUiOiJwc2kgMzEiLCJlbWFpbCI6InRAZ21haWwuY29tIiwiaWF0IjoxNjUzMzI0NjczfQ.Uj6X0Z-ED45oBX2ufpStkIyfxQsyXCHyI5BlAqK5bhU'</span> \
  -X GET </code></pre></div> </div></div><div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_65274732cb6944d8a3c4b06560b47962">&nbsp;</div> <h3 class="request-title"><strong class="get svelte-fapltk">GET</strong> Visualizar Todos Os Pacientes</h3> <pre class="url svelte-fapltk">localhost:3000/pacientes</pre> <div class="description"><p>Endpoint para visualização de todos os pacientes existentes.</p>
<p>Ao ser feita a solicitação para <strong>Visualizar Todos Os Pacientes</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>200:</strong> Sucesso da solicitação.</li>
<li><strong>404:</strong> URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk">Bearer
 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ</div></div> </div> </div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/pacientes"</span> \
  -H <span class="hljs-string">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ'</span> \
  -X GET </code></pre></div> </div></div><div class="row"><div class="left"><h2>PSICOLOGOS</h2> <div class="description"><p>Através do módulo <strong>PSICOLOGOS</strong> é possível executar e obter as seguintes informações:</p>
<ul>
<li><strong>Atualizar Psicologo</strong></li>
<li><strong>Criar Psicolog</strong></li>
<li><strong>Deletar Psicologo</strong></li>
<li><strong>Login Psicologo</strong></li>
<li><strong>Pesquisar Psicologo</strong></li>
<li><strong>Todos Os Psicologos</strong></li>
</ul></div> <hr></div> <div class="right"></div></div> <div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_a65c80ec930446c5a12fd2210a1062b0">&nbsp;</div> <h3 class="request-title"><strong class="put svelte-fapltk">PUT</strong> Atualizar Psicologo</h3> <pre class="url svelte-fapltk">localhost:3000/psicologos/45</pre> <div class="description"><p>O endpoint <strong>Atualizar Psicologo</strong> é utilizado para alterar informações referentes ao cadastro de um determinado psicologo.</p>
<p>É necessário inserir o <strong>ID</strong> do psicologo na URL da requisição:</p>
<p>http://localhost:3000/psicologos/id_psicologo</p>
<p>Modelo de URL para solicitação da atualização de um psicologo:</p>
<p>http://localhost:3000/psicologos/1</p>
<p>O número '1' é a indicação de qual psicologo deve ser atualizado.</p>
<p>Conteúdo esperado no body:</p>
<ul>
<li>nome: string, requerido</li>
<li>apresenacao: string, requerido (inserir ano de nascimento do paciente)</li>
</ul>
<p>Modelo de conteúdo esperado no body para atualizar cadastro de um psicologo: <br>
{ <br>
    "nome": "nome<em>atualizado</em>psicologo", <br>
    "email": "exemplo@email.com", <br>
    "senha": "senha<em>atualizada</em>psicologo", <br>
    "apresentacao": "Apresentação atualizada psicologo" <br>
} <br></p>
<p><strong>OBS.:</strong> As informações que não serão atualizadas não necessitam ser inseridas.</p>
<p>Ao ser feita a solicitação para <strong>Atualizar Psicologo</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>200:</strong> Sucesso da solicitação.</li>
<li><strong>400:</strong> Indica que a solicitação está incorreta.</li>
<li><strong>404:</strong> URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Content-Type</div> <div class="value svelte-1wblyuk">application/json</div></div> <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk">Bearer
 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ</div></div> </div> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Body</span> <span class="note svelte-1wblyuk">json</span></div> <div class="raw-data"><pre>{
  "nome": "nome_atualizado_psicologo",
  "apresentacao": "Apresentação atualizada do psicologo"
}</pre></div> </div></div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/psicologos/45"</span> \
  -H <span class="hljs-string">'Content-Type: application/json'</span> \
  -H <span class="hljs-string">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ'</span> \
  -X PUT \
  -d <span class="hljs-string">'{
    "nome": "nome_atualizado_psicologo",
    "apresentacao": "Apresentação atualizada do psicologo"
}'</span> </code></pre></div> </div></div><div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_3781520352c2465e8b1e3424ffa2265d">&nbsp;</div> <h3 class="request-title"><strong class="post svelte-fapltk">POST</strong> Criar Psicologo</h3> <pre class="url svelte-fapltk">localhost:3000/psicologos</pre> <div class="description"><p>O endpoint <strong>Criar Psicologo</strong> é utilizado para inserir um novo psicologo no sistema.</p>
<p>Conteúdo esperado no body:</p>
<ul>
<li>nome: string, requerido</li>
<li>email: string, requerido</li>
<li>senha: string, requerido</li>
<li>apresentacao: string, </li>
</ul>
<p>Modelo de conteúdo esperado no body para criação de novo psicologo: <br>
{ <br>
    "nome": "nome<em>novo</em>paciente", <br>
    "email": "exemplo@email.com", <br>
    "senha": "senha<em>novo</em>psicologo", <br>
    "idade": 18 <br>
} <br></p>
<p>Ao ser feita a solicitação para <strong>Criação De novo Psicologo</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>200:</strong> Sucesso da solicitação.</li>
<li><strong>400:</strong> Indica que a solicitação está incorreta.</li>
<li><strong>404:</strong> URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Content-Type</div> <div class="value svelte-1wblyuk">application/json</div></div> </div> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Body</span> <span class="note svelte-1wblyuk">json</span></div> <div class="raw-data"><pre>{
  "nome": "psi teste 01",
  "email": "teste01@gmail.com",
  "senha": "senha_nova_psicologo",
  "apresentacao": "teste"
}</pre></div> </div></div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/psicologos"</span> \
  -H <span class="hljs-string">'Content-Type: application/json'</span> \
  -X POST \
  -d <span class="hljs-string">'{
    "nome": "psi teste 01",
    "email": "teste01@gmail.com",
    "senha": "senha_nova_psicologo",
    "apresentacao": "teste"
}'</span> </code></pre></div> </div></div><div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_39e724bf72864ccfb3e3488ca3f8b3d3">&nbsp;</div> <h3 class="request-title"><strong class="delete svelte-fapltk">DELETE</strong> Deletar Psicologo</h3> <pre class="url svelte-fapltk">localhost:3000/psicologos/500</pre> <div class="description"><p>O endpoint <strong>Deletar Psicologo</strong> é utilizado para remover um psicologo do sistema.</p>
<p>É necessário inserir o <strong>ID</strong> do psicologo na URL da requisição:</p>
<p>http://localhost:3000/psicologos/id_paciente</p>
<p>Modelo de URL para solicitação para remover um psicologo do sistema:</p>
<p>http://localhost:3000/psicologos/1</p>
<p>O número '1' é a indicação de qual psicologo deve ser removido.</p>
<p>Ao ser feita a solicitação para <strong>Deletar Psicologo</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>204:</strong> Sucesso da solicitação.</li>
<li><strong>404:</strong> Indica que a solicitação está incorreta ou URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk">Bearer
 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ</div></div> </div> </div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/psicologos/500"</span> \
  -H <span class="hljs-string">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ'</span> \
  -X DELETE </code></pre></div> </div></div><div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_0a8af112fdcf49b9b80faa0a3928e668">&nbsp;</div> <h3 class="request-title"><strong class="post svelte-fapltk">POST</strong> Login Psicologo</h3> <pre class="url svelte-fapltk">localhost:3000/login</pre> <div class="description"><p>O endpoint <strong>Login Psicologo</strong> é utilizado para que um psicologo possa realizar login no sistema.</p>
<p>Conteúdo esperado no body:</p>
<ul>
<li>email: string, requerido</li>
<li>senha: string, requerido</li>
</ul>
<p>Modelo de conteúdo esperado no body para login de um determinado psicologo no sistema: <br>
{ <br>
    "email": "exemplo@email.com", <br>
    "senha": "senha<em>novo</em>psicologo", <br>
} <br></p>
<p>Ao ser feita a solicitação para <strong>Login Psicologo</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>200:</strong> Sucesso da solicitação.</li>
<li><strong>400:</strong> Indica que a solicitação está incorreta.</li>
<li><strong>404:</strong> URL não encontrada.</li>
</ul></div> <div class="tables"><div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Parameters</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">null</div> <div class="value svelte-1wblyuk">null</div></div> </div> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Content-Type</div> <div class="value svelte-1wblyuk">application/json</div></div> <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">null</div> <div class="value svelte-1wblyuk"></div></div> <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">null</div> <div class="value svelte-1wblyuk"></div></div> <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk"><pre>Bearer undefined</pre></div></div> </div> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Body</span> <span class="note svelte-1wblyuk">json</span></div> <div class="raw-data"><pre>{
  "email": "exemplo@email.com",
  "senha": "senha_psicologo"
}</pre></div> </div></div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/login?null=null"</span> \
  -H <span class="hljs-string">'Content-Type: application/json'</span> \
  -H <span class="hljs-string">'null: '</span> \
  -H <span class="hljs-string">'null: '</span> \
  -H <span class="hljs-string">'Authorization: Bearer undefined'</span> \
  -X POST \
  -d <span class="hljs-string">'{
  "email": "exemplo@email.com",
  "senha" : "senha_psicologo"
}'</span> </code></pre></div> </div></div><div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_f788a7e0766e40c3a9c6de68d3f1094e">&nbsp;</div> <h3 class="request-title"><strong class="get svelte-fapltk">GET</strong> Pesquisar Psicologo</h3> <pre class="url svelte-fapltk">localhost:3000/psicologos/45</pre> <div class="description"><p>Endpoint para pesquisar de um determinado psicologo.</p>
<p>É necessário inserir o <strong>ID</strong> do psicologo na URL da requisição:</p>
<p>http://localhost:3000/psicologos/id_paciente</p>
<p>Modelo de URL para solicitação de pesquisa de um psicologo:</p>
<p>http://localhost:3000/psicologos/1</p>
<p>O número '1' é a indicação de qual psicologo deve ser pesquisado.</p>
<p>Ao ser feita a solicitação para <strong>Pesquisar Psicologo</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>204:</strong> Sucesso da solicitação.</li>
<li><strong>404:</strong> Indica que a solicitação está incorreta ou URL não encontrada.</li>
</ul></div> <div class="tables"> <div class="table svelte-1wblyuk"><div class="header svelte-1wblyuk"><span class="title svelte-1wblyuk">Headers</span> </div>  <div class="row svelte-1wblyuk"><div class="name svelte-1wblyuk">Authorization</div> <div class="value svelte-1wblyuk">Bearer
 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ</div></div> </div> </div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/psicologos/45"</span> \
  -H <span class="hljs-string">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsIm5vbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZW1haWwuY29tIiwiaWF0IjoxNjUzNTE3NTk5fQ.dov-Ut1EdyNsLewvLVmStkpG-vlaUHD1kWKuqdVgNFQ'</span> \
  -X GET </code></pre></div> </div></div><div class="row"><div class="left"><div class="anchor svelte-fapltk" id="req_900e52d0117f4bc592b7a55d2f318d95">&nbsp;</div> <h3 class="request-title"><strong class="get svelte-fapltk">GET</strong> Visualizar Todos Os Psicologos</h3> <pre class="url svelte-fapltk">localhost:3000/psicologos</pre> <div class="description"><p>Endpoint para visualização de todos os psicologos existentes.</p>
<p>Ao ser feita a solicitação para <strong>Visualizar Todos Os Psicologos</strong> o servidor irá retornar um dos seguintes códigos de status:</p>
<ul>
<li><strong>200:</strong> Sucesso da solicitação.</li>
<li><strong>404:</strong> URL não encontrada.</li>
</ul></div> <div class="tables">  </div> <hr></div> <div class="right"><div class="code-example svelte-fapltk"><div class="header svelte-fapltk"><div class="title svelte-fapltk">Example request:</div> <div class="copy"><a href="javascript:" class="svelte-fapltk">Copy to clipboard</a></div></div> <pre class="svelte-fapltk"><code class="curl hljs">curl <span class="hljs-string">"localhost:3000/psicologos"</span> \
  -X GET </code></pre></div> </div></div></section></section></div>


</body></html>

