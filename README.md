### Aula05 - SDM - Noite - 0404

 # Criando uma API RESTful com NodeJS e Express

 1. Após criar nosso repositório do gitHub...
     - Abrir terminal (git bash) em uma pasta
     - clonar o repositório nesta pasta  local por meio do comando:
    
      `git clone https://github.com/jehsjardim/Aula05SDMNoite0404.git`

 2. Abrir uma pasta com o Intellij

 3. Abrir um terminal no Intellij

 4. VAmos criar nosso amigo "package.json"

 _Ele é responsável por gerenciar diversas coisas do nosso projeto_
           
        `npm init`
4.1 Não esqueçam de criar um, arquivo chamado `.gitignore` dizendo para o git ignorar a pasta node_modules basta adicionar
    a linha:

       `node_modules`
   

 5. Caso queira usar o **nodemon**
      _Vimos que toda vez que alteramos os aquivos de código, precisamos derrubar e subir novamente o servidor...
      caso queiram...pode-se utilizar o nodemon para monitorar os ajustes e restartar o nosso servidor. Para instalar:_

    `npm install nodemon`

 6. Deixando nosso server profissa com um arquivo de **config.json**

      _Podemos criar variáveis de ambiente em um arquivo separado chamado config.json. O pacote config nos permite
      organizar a configuração da nossa aplicação e usar no nosso projeto._
 
       `npm install config`

 7. Vamos instalar nosso amigo **express**

     `npm install express`

 8. Adicionar o **Body Parser**
   _O NodeJS em si não sabe converter dados da requisição para o formato que queremos, o body-parser é um
   middleware capaz de converter o body da requisição para vários formatos. Um desses formatos é ojson, que é o
   formato que iremos usar...._

    `npm install body-parser`

 9. Se você quiser em vez de rodar nodemon server.js... você pode rodar o servidor via script com npm
  Para isso, adicione o trecho abaixo no package.json

    ~~~
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
    },
    ~~~
    