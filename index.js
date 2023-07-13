const venom = require('venom-bot');
const { cli } = require('webpack');

venom
  .create({
    session: 'PrimeBot' //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

  const start = (client) => {
 
    client.onAnyMessage(message => {
      message.body = message.body.toLowerCase();
      console.log(message.sender.name + ': ' + message.body);
      // console.log(message)
      // if(hora>=8 && hora<=20){

      if (message.body === 'prime'  || message.body === 'bom dia' || message.body === 'boa tarde' || message.body === 'boa noite' || message.body === 'p' && message.isGroupMsg === false) {
        client.sendImage(
          message.from,
          './assets/banner/banner.jpeg',
          'banner',
          ''
        )
        client
          .sendText(message.from, 'Olá 👋! Meu nome é *PrimeBot*🤖, sou *assistente virtual* da *Loja Prime!*\n\n*-Digite 1️⃣ para ver nossas capinhas*📱\n*-Digite 2️⃣ para ver os carregadores e cabos USB*🔋\n*-Digite 3️⃣ para ver os acessórios de computador*👨‍💻\n*-Digite 4️⃣ para ver suportes e acessórios*👾\n*-Digite 5️⃣ para ver as caixas de som*🔈\n*-Digite 6️⃣ para ver os copos*🥤\n*-Digite 7️⃣ para ver fones de ouvido*🎧\n*-Digite 8️⃣ para ver cartões de memória e adaptadores*📟\n*-Digite 🔟 para falar com um atendente*👦\n*-Digite 🅿️ para um voltar ao menu*✅\n \n Nosso horário de atendimento: 08:00 até as 21:00\n\n ⚠️*Ainda estou em desenvolvimento, nem todas as opções estão disponíveis.*⚠️')
        
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
        client.sendText(message.from, '*Informe o modelo do seu Iphone:*\n-Iphone x\n-Iphone 11\n-Iphone 12\n-Iphone 13\n-Iphone 14\netc...')
      }
      if(message.body==='iphone13' || message.body==='iphone13' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Iphone 13:*')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone13/case1.jpeg', 'foto', 'CAPA TRANSPARENTE IPHONE 13 PRO MAX VALOR: 50,00$  ')
      }
      if(message.body ==='iphone11' || message.body === 'iphone 11' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de capinhas do Iphone 11:*')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone11/case1.jpeg', 'foto', 'CAPA TRANSPARENTE IPHONE 11PRO VALOR: 40,00$')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone11/case2.jpeg', 'foto', '')
        
      }
      
      if(message.body ==='iphone7' || message.body === 'iphone 7' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de capinhas do Iphone 7:*')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone7/case1.jpeg', 'foto', '')
      }
      if(message.body ==='iphonexr' || message.body === 'iphone xr' || message.body==='iphone x' || message.body==='iphonex' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de capinhas do Iphone X e Xr:*')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphonexr/case1.jpeg', 'foto', '')
      }


      if(message.body ==='2' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de Carregadores:*')
        client.sendImage(message.from, './assets/imgs/carregador/carregador1.jpeg', 'foto', 'BASIKE, CAREEGADOR COM DUAS PONTAS USB VALOR: 25,00$')
        client.sendImage(message.from, './assets/imgs/carregador/carregador2.jpeg', 'foto', 'CARREGADO TIPO C, SAÍDA 3.A VALOR: 25,00$')
        client.sendImage(message.from, './assets/imgs/carregador/carregador3.jpeg', 'foto', 'CARREGADOR TURBO, TIPO C VALOR: 50,00$')
        client.sendImage(message.from, './assets/imgs/carregador/carregador4.jpeg', 'foto', 'CARREGADOR 2.1A DISPONÍVEL NAS CORES: AZUL, PRETO, BRANCO E VERMELHO. VALOR: 15,00$')
        client.sendImage(message.from, './assets/imgs/carregador/carregador5.jpeg', 'foto', 'CARREGADOR IOS VALOR: 35,00$')
        client.sendImage(message.from, './assets/imgs/carregador/carregadorAutomotivo.jpeg', 'foto', 'CARREGADOR AUTOMOTIVO 40,00$')
        client.sendImage(message.from , './assets/imgs/carregador/caboUSb1.jpeg', 'foto', 'CABO DE DADOS USB. VALOR: 20,00$')
        client.sendImage(message.from, './assets/imgs/carregador/caboUSb2.jpeg', 'foto', 'CABO TURBO 5.8A VALOR: 20,00$')
        client.sendImage(message.from, './assets/imgs/carregador/caboUSb3.jpeg', 'foto', 'CABO TIPO C. VALOR: 30,00$')
        client.sendImage(message.from, './assets/imgs/carregador/caboUSb4.jpeg', 'foto', 'CABO TIPO C. 3.1A DISPONÍVEL NAS CORES: AZUL, PRETO E VERMELHO.                                            VALOR: 10,00$')
        client.sendImage(message.from, './assets/imgs/carregador/caboUSb5.jpeg', 'foto', 'CABO, ENTRADA V8, 3.1A DISPONÍVEL NAS CORES: VERMELHO, CINZA E PRETO.            VALOR: 10,00$')
        client.sendImage(message.from, './assets/imgs/carregador/caboUSb6.jpeg', 'foto', 'CABO V8 VALOR: 10,00$')
        client.sendImage(message.from, './assets/imgs/carregador/caboUSb7.jpeg', 'foto', 'CABO CARGA RÁPIDA VALOR: 15,00$')
        
        
      }

      if(message.body==='3' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de acessórios de computador:*')
        client.sendImage(message.from, './assets/imgs/acessoriosPc/headphone.jpeg', 'foto', 'Fone Bluetooth sem fio Disponível nas cores: vermelho e preto. Valor: 80,00$')
        client.sendImage(message.from, './assets/imgs/acessoriosPc/mic.jpeg', 'foto', 'Microfone de mesa R$55,00')
        client.sendImage(message.from, './assets/imgs/acessoriosPc/mouse.jpeg', 'foto', 'MOUSE COM ADAPTADOR VALOR 40,00$')
        client.sendImage(message.from, './assets/imgs/acessoriosPc/mouse2.jpeg', 'foto', 'Mouse R$20,00')
        client.sendImage(message.from, './assets/imgs/acessoriosPc/teclado1.jpeg', 'foto', 'TECLADO COM FIO VALOR 50,00$')
      }

      if(message.body==='4' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de suportes e acessórios:*')
        client.sendImage(message.from, './assets/imgs/acessorios/ringLight.jpeg', 'foto', 'RING LIGHT PEQUENA VALOR: R$50')
        client.sendImage(message.from, './assets/imgs/acessorios/ringLight1.jpeg', 'foto', 'RING LIGHT VALOR: 150,00$')
        client.sendImage(message.from, './assets/imgs/acessorios/suporte1.jpeg', 'foto', 'Suporte para celular R$55,00')
        client.sendImage(message.from, './assets/imgs/acessorios/suporte2.jpeg', 'foto', 'SUPORTE UNIVERSAL VALOR 40,00$')
        client.sendImage(message.from, './assets/imgs/acessorios/suporte3.jpeg', 'foto', 'SUPORTE UNIVERSAL 40,00$')
      }

      if(message.body==='5' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de Caixas de som:*')
        client.sendImage(message.from, './assets/imgs/caixasDeSom/caixaSom1.jpeg', 'foto', 'MINI CAIXA DE SOM VALOR: 100,00$')
        client.sendImage(message.from, './assets/imgs/caixasDeSom/caixaSom2.jpeg', 'foto', 'MINI CAIXA DE SOM BLUETOOTH: 80,00$')
        client.sendImage(message.from, './assets/imgs/caixasDeSom/caixaSom3.jpeg', 'foto', 'MINI CAIXA DE SOM BLUETOOTH, DISPONÍVEL NAS CORES LARANJA, VERDE E PRETO. VALOR: 70,00$')
      }

      if(message.body ==='6' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de Copos:*')
        client.sendImage(message.from, './assets/imgs/copos/copos1.jpeg', 'foto', 'Copo da Rey Skywalker R$70,00')
      }
      if(message.body  ==='7' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de fones de ouvido:*')
        client.sendImage(message.from, './assets/imgs/fones/fone1.jpeg', 'foto', 'HEADPHONES COM FIO VALOR:50')
        client.sendImage(message.from, './assets/imgs/fones/fone2.jpeg', 'foto', 'FONE COM FIO TIPO C VALOR: 30,00$')
        client.sendImage(message.from, './assets/imgs/fones/fone3.jpeg', 'foto', 'FONE DE OUVIDO COM FIO, ENTRADA P2. VALOR: 10,00$')
        client.sendImage(message.from, './assets/imgs/fones/fone4.jpeg', 'foto', 'FONE COM FIO, ENTRADA P2. VALOR: 10,00$ (Com borrachicha)')  
      }
      if(message.body ==='8' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de produtos:*')
        client.sendImage(message.from, './assets/imgs/cartao/cartao1.jpeg', 'foto', 'Leitor de cartão de memória ALL IN ONE VALOR: 5,00$')
        client.sendImage(message.from, './assets/imgs/cartao/receptor1.jpeg', 'foto', 'Receptor de bluetooth para celular e carro, entrada p2 VALOR: 25$')
      }

      if(message.body ==='10' && message.isGroupMsg ===false){
        // client.sendText('120363139726433324@g.us', '*a*')
        client.sendText(message.from, 'Chamando atendente...')
        client.sendText('120363159848189393@g.us', 'PrimeBot🤖:*Um Cliente precisa ser atendido!')
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



