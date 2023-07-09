const venom = require('venom-bot');

venom
  .create({
    session: 'Botzin' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

  const start = (client) => {
    // client.onMessage((message) => {

    //   message.body = message.body.toLowerCase();
    //   // console.log(message);

    //   if (message.body === 'oi' && message.isGroupMsg === false) {
    //     client
    //       .sendText(message.from, 'Olá! Meu nome é Junior Carequinha, sou assistente virtual da Loja Prime!')
    //     client
    //       .sendText(message.from, 'Digite 1 para ver nossos produtos')
    //   }
    //   });


    

    client.onAnyMessage(message => {
      message.body = message.body.toLowerCase();
      console.log(message);
      // if(hora>=8 && hora<=20){

      if (message.body === 'prime' || message.body === 'p' && message.isGroupMsg === false) {
        client.sendImage(
          message.from,
          './assets/banner/banner.jpeg',
          'banner',
          ''
        )
        client
          .sendText(message.from, 'Olá 👋! Meu nome é *PrimeBot*🤖, sou *assistente virtual* da *Loja Prime!*\n*-Digite 1 para ver nossas capinhas*📱\n*-Digite 2 para ver os Carregadores*\n*-Digite 10 para falar com um atendente*👦\n*-Digite # para um Easter Egg*\n \n Nosso horário de funcionamento: 08:00 até as 21:00')
        
      }

      
      if(message.body ==='1' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de Capinhas:*\n-Digite Iphone11 para ver as Capinhas para iPhone 11 Pro Max')
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
      }
      if(message.body ==='10' && message.isGroupMsg ===false){
        // client.sendText('120363139726433324@g.us', '*a*')
        client.sendText('559186334232@c.us', 'PrimeBot🤖:*Bó trabaiar*')
      }
      if(message.body ==='#' && message.isGroupMsg ===false){
        // client.sendText('120363139726433324@g.us', '*a*')
        client.sendText(message.from, 'https://bit.ly/3pFH8fz')
      }
    // }
    // // if(hora<=8 && hora>=21) {
    // //   client.sendText(message.from, 'Olá 👋! Meu nome é *Junior Carequinha*, sou *assistente virtual* da *Loja Prime!*\n*-Estamos fechados no momento, volte mais tarde*')
      
    // // }
    




      });
    }    



