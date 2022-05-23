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
