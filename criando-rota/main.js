//Toda vez que for usar uma rota em um arquivo, você vai precisar fazer o import do express
const express = require('express');


const app = express();

//Informando qual porta o servidor vai ouvir
app.listen(27017, () => console.log('Servidor inicialializado')); 






//Express é o framework Node mais popular e a biblioteca subjacente para uma série de outros frameworks do Node. O Express oferece soluções para:
// Gerenciar requisições de diferentes verbos HTTP em diferentes URLs.
// Integrar "view engines" para inserir dados nos templates.
// Definir as configurações comuns da aplicação web, como a porta a ser usada para conexão e a localização dos modelos que são usados para renderizar a resposta.
// Adicionar novos processos de requisição por meio de "middleware" em qualquer ponto da "fila" de requisições.