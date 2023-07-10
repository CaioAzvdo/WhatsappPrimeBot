const venom = require('venom-bot');
const { cli } = require('webpack');

venom
  .create({
    session: 'Botzin' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

  const start = (client) => {
 
    client.onAnyMessage(message => {
      message.body = message.body.toLowerCase();
      console.log(message.sender.name + ': ' + message.body);
      // if(hora>=8 && hora<=20){

      if (message.body === 'prime' || message.body === 'p' && message.isGroupMsg === false) {
        client.sendImage(
          message.from,
          './assets/banner/banner.jpeg',
          'banner',
          ''
        )
        client
          .sendText(message.from, 'Olá 👋! Meu nome é *PrimeBot*🤖, sou *assistente virtual* da *Loja Prime!*\n\n*-Digite 1 para ver nossas capinhas*📱\n*-Digite 2 para ver os carregadores e cabos USB*🔋\n*-Digite 3 para ver os acessórios de computador*👨‍💻\n*-Digite 4 para ver suportes e acessórios*👾\n*-Digite 5 para ver as caixas de som*🔈\n*-Digite 6 para ver os copos*🥤\n*-Digite 10 para falar com um atendente*👦\n*-Digite # para um Easter Egg*🥚\n \n Nosso horário de atendimento: 08:00 até as 21:00')
        
      }
      if(message.body ==='1' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Digite a marca do seu celular!*\n-Iphone\n-Samsung\n-Xiaomi\n-Motorola\n-LG\n-Asus\n-Lenovo,')
      }
      if(message.body==='samsung' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas Samsung:*')
        client.sendImage(message.from, './assets/imgs/capinhas/samsung/samsung1.jpeg', 'foto', 'Capinha Samsung A10 R$12,00')
        client.sendImage(message.from, './assets/imgs/capinhas/samsung/samsung2.jpeg', 'foto', 'Capinha Samsung A20 R$12,00')
        client.sendImage(message.from, './assets/imgs/capinhas/samsung/samsung3.jpeg', 'foto', 'Capinha Samsung A30 R$12,00')
        client.sendImage(message.from, './assets/imgs/capinhas/samsung/samsung4.jpeg', 'foto', 'Capinha Samsung A50 R$12,00')
      }



      if(message.body==='iphone' && message.isGroupMsg===false){
        client.sendText(message.from, '*Informe o modelo do seu Iphone:*\n-Iphone 11\n-Iphone X\n-Iphone 12\n-Iphone 13\n-Iphone 14\netc...')
      }
      if(message.body ==='iphone11' || message.body === 'iphone 11' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de capinhas do Iphone 11:*')
        client.sendImage(
          message.from,
          './assets/imgs/capinhas/iphone/iphoneCapinhas1.jpeg',
          'foto',
          ''
        )
        client.sendImage(
          message.from,
          './assets/imgs/capinhas/iphone/iphoneCapinhas2.jpeg',
          'foto',
          ''
        )
        client.sendImage(
          message.from,
          './assets/imgs/capinhas/iphone/iphoneCapinhas3.jpeg',
          'foto',
          ''
        )
        client.sendImage(
          message.from,
          './assets/imgs/capinhas/iphone/iphoneCapinhas4.jpeg',
          'foto',
          ''
        )
        
      }


      if(message.body ==='2' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de Carregadores:*')
        client.sendImage(message.from, './assets/imgs/carregador/carregador1.jpeg', 'foto', 'Carregador Asike 3.1A R$12,00')
        client.sendImage(message.from, './assets/imgs/carregador/carregador2.jpeg', 'foto', 'Carregador Inova 3.1A R$12,00')
        client.sendImage(message.from , './assets/imgs/carregador/caboUSb1.jpeg', 'foto', 'Carregador Inova 3.1A R$12,00')
        
      }

      if(message.body==='3' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de acessórios de computador:*')
        client.sendImage(message.from, './assets/imgs/acessoriosPc/headphone.jpeg', 'foto', 'Headset Gamer R$55,00')
        client.sendImage(message.from, './assets/imgs/acessoriosPc/mic.jpeg', 'foto', 'Microfone de mesa R$55,00')
        client.sendImage(message.from, './assets/imgs/acessoriosPc/mouse.jpeg', 'foto', 'Mouse Gamer R$55,00')
          client.sendImage(message.from, './assets/imgs/acessoriosPc/mouse2.jpeg', 'foto', 'Mouse R$55,00')
      }

      if(message.body==='4' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de suportes e acessórios:*')
        client.sendImage(message.from, './assets/imgs/acessorios/ringLight.jpeg', 'foto', 'Ring Light R$55,00')
        client.sendImage(message.from, './assets/imgs/acessorios/suporte1.jpeg', 'foto', 'Suporte para celular R$55,00')
        client.sendImage(message.from, './assets/imgs/acessorios/suporte2.jpeg', 'foto', 'Suporte para celular R$55,00')
      }

      if(message.body==='5' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de Caixas de som:*')
        client.sendImage(message.from, './assets/imgs/caixasDeSom/caixaSom1.jpeg', 'foto', 'Caixa de som INOVA R$55,00')
      }

      if(message.body ==='6' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de Copos:*')
        client.sendImage(message.from, './assets/imgs/copos/copos1.jpeg', 'foto', 'Copo da Rey Skywalker R$70,00')
      }

      if(message.body ==='10' && message.isGroupMsg ===false){
        // client.sendText('120363139726433324@g.us', '*a*')
        client.sendText('559186334232@c.us', 'PrimeBot🤖:*Bó trabaiar*')
      }
      if(message.body ==='#' && message.isGroupMsg ===false){
        // client.sendText('120363139726433324@g.us', '*a*')
        client.sendText(message.from, 'https://bit.ly/3pFH8fz')
      }
      if(message.body ==='☀️' && message.isGroupMsg ===false){
        client.sendImage(message.from, './sol.jpg', 'foto', 'Glória ao Sol')
      }



    // }
    // // if(hora<=8 && hora>=21) {
    // //   client.sendText(message.from, 'Olá 👋! Meu nome é *Junior Carequinha*, sou *assistente virtual* da *Loja Prime!*\n*-Estamos fechados no momento, volte mais tarde*')
      
    // // }
    




      });
    }    



