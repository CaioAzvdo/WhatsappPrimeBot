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
        client.sendText(message.from, '*Informe o modelo do seu Samsung:*\n-Samsung A10\n-Samsung A20\n-Samsung M13\netc...')
        
      }
      if(message.body==='samsung g10' || message.body==='samsungg10' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Samsung G10*')
        client.sendImage(message.from, './assets/imgs/capinhas/samsung/g10/case1.jpeg', 'foto', 'Capinha Samsung G10 R$25,00')
        client.sendImage(message.from, './assets/imgs/capinhas/samsung/g10/case2.jpeg', 'foto', 'Capinha Samsung G10 R$15,00')
      }
      // if(message.body==='samsung a20' || message.body==='samsunga20' && message.isGroupMsg===false){
      //   client.sendText(message.from, '*Lista de capinhas do Samsung A20*')
      //   client.sendImage(message.from, './assets/imgs/capinhas/samsung/samsung1.jpeg', 'foto', 'Capinha Samsung A10 R$12,00')
      //   client.sendImage(message.from, './assets/imgs/capinhas/samsung/samsung2.jpeg', 'foto', 'Capinha Samsung A20 R$12,00')
      //   client.sendImage(message.from, './assets/imgs/capinhas/samsung/samsung3.jpeg', 'foto', 'Capinha Samsung A30 R$12,00')
      //   client.sendImage(message.from, './assets/imgs/capinhas/samsung/samsung4.jpeg', 'foto', 'Capinha Samsung A50 R$12,00')
      // }
      if(message.body==='samsung a71 ultra' || message.body==='samsunga71 ultra' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Samsung A71 Ultra*')
        client.sendImage(message.from, './assets/imgs/capinhas/samsung/s21ultra/case1.jpeg', 'foto', 'Capinha Samsung S21 Ultra R$25,00')
      }
      if(message.body==='samsung s21 ultra' || message.body==='samsungs21 ultra' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Samsung S21 Ultra*')
        client.sendImage(message.from, './assets/imgs/capinhas/samsung/s21ultra/case1.jpeg', 'foto', 'Capinha Samsung S21 Ultra R$25,00')
      }
      if(message.body==='samsung m23' || message.body==='samsungm23' || message.body==='samsumg m13' || message.body==='samsumgm13' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Samsung M23 e M13*')
        client.sendImage(message.from, './assets/imgs/capinhas/samsung/m23&m13/case1.jpeg', 'foto', 'Capinha Samsung M23/M13 R$20,00')
        client.sendImage(message.from, './assets/imgs/capinhas/samsung/m23&m13/case2.jpeg', 'foto', 'Capinha Samsung M23/M13 R$15,00')
        client.sendImage(message.from, './assets/imgs/capinhas/samsung/m23&m13/case3.jpeg', 'foto', 'Capinha Samsung M23/M13 R$20,00')
        client.sendImage(message.from, './assets/imgs/capinhas/samsung/m23&m13/case4.jpeg', 'foto', 'Capinha Samsung M23/M13 R$15,00')
        client.sendImage(message.from, './assets/imgs/capinhas/samsung/m23&m13/case5.jpeg', 'foto', 'Capinha Samsung M23/M13 R$20,00')
      }

      if(message.body==='motorola' && message.isGroupMsg===false){
        client.sendText(message.from, '*Informe o modelo do seu Motorola:*\n-Moto G7\n-Moto G8\n-Moto One Fusion\netc...')
        
      }
      if(message.body==='motorola one fusion' || messaege.body==='motorolaone fusion' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Motorola One Fusion:*')
        client.sendImage(message.from, './assets/imgs/capinhas/motorola/onefusion/case1.jpeg', 'foto', 'Capinha Motorola One Fusion R$20,00')

      }
      if(message.body==='motorola g8 power lite' || messaege.body==='motorolag8 power lite' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Motorola G8 Lite:*')
        client.sendImage(message.from, './assets/imgs/capinhas/motorola/g8powerlite/case1.jpeg', 'foto', 'Capinha Motorola G8 Power Lite R$20,00')

      }


      if(message.body==='xioami' && message.isGroupMsg===false){
        client.sendText(message.from, '*Informe o modelo do seu Xioami:*\n-Mi note 11\n-Poco X3 Pro\n-Redmi A11\netc...')
        
      }

      if(message.body==='mi note 11' || messaege.body==='note 11' || message.body==='xioami mi note 11' || message.body==='redmi note 11' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Redmi Note 11:*')
        client.sendImage(message.from, './assets/imgs/capinhas/xioami/note11/case1.jpeg', 'foto', 'Capinha Note 11 R$20,00')

      }
      if(message.body==='poco x3 pro' || messaege.body==='x3 pro' || message.body==='poco x3' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Poco x3 Pro:*')
        client.sendImage(message.from, './assets/imgs/capinhas/xioami/pocox3pro/case1.jpeg', 'foto', 'Capinha Poco X3 Pro R$20,00')

      }
      if(message.body==='redmi 10 c' || messaege.body==='red mi10 c' || message.body==='redmi10 c' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Redmi 10 C:*')
        client.sendImage(message.from, './assets/imgs/capinhas/xioami/redmi10c/case1.jpeg', 'foto', 'Capinha Redmi 10 C R$20,00')

      }
      if(message.body==='redmi 11' || messaege.body==='red mi 11' || message.body==='redmi11' || message.body==='mi 11' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Redmi 11:*')
        client.sendImage(message.from, './assets/imgs/capinhas/xioami/mi11/case1.jpeg', 'foto', 'Capinha Redmi 11 R$20,00')
        client.sendImage(message.from, './assets/imgs/capinhas/xioami/mi11/case2.jpeg', 'foto', 'Capinha Redmi 11 R$20,00')

      }

      if(message.body==='mi note 9' || messaege.body==='note 9' || message.body==='xioami mi note 9' || message.body==='redmi note 9' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Redmi Note 9:*')
        client.sendImage(message.from, './assets/imgs/capinhas/xioami/note9/case1.jpeg', 'foto', 'Capinha Note 11 R$15,00')
        client.sendImage(message.from, './assets/imgs/capinhas/xioami/note9/case2.jpeg', 'foto', 'Capinha Note 11 R$20,00')

      }

      if(message.body==='redmi 9a' || messaege.body==='red mi 9a' || message.body==='redmi9a' || message.body==='mi 9a' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Redmi 9a:*')
        client.sendImage(message.from, './assets/imgs/capinhas/xioami/redmi9a/case1.jpeg', 'foto', 'Capinha Redmi 9A R$15,00')
      }

      if(message.body==='mi 12' || messaege.body==='redmi 12' || message.body==='mi12' || message.body==='redmi12' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Redmi 12:*')
        client.sendImage(message.from, './assets/imgs/capinhas/xioami/mi12/case1.jpeg', 'foto', 'Capinha Note 11 R$15,00')
      }
      if(message.body==='mi 12' || messaege.body==='redmi 12' || message.body==='mi12' || message.body==='redmi12' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Redmi 12:*')
        client.sendImage(message.from, './assets/imgs/capinhas/xioami/mi12/case1.jpeg', 'foto', 'Capinha Note 11 R$15,00')
      }
      if(message.body==='mi note 7' || messaege.body==='note 7' || message.body==='xioami mi note 7' || message.body==='redmi note 7' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Redmi Note 7:*')
        client.sendImage(message.from, './assets/imgs/capinhas/xioami/note7/case1.jpeg', 'foto', 'Capinha Note 11 R$15,00')
        

      }




      if(message.body==='iphone' && message.isGroupMsg===false){
        client.sendText(message.from, '*Informe o modelo do seu Iphone:*\n-Iphone x\n-Iphone 11\n-Iphone 12\n-Iphone 13\n-Iphone 14\netc...')
      }
      if(message.body==='iphone14' || message.body==='iphone 14' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Iphone 14:*')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone14/case1.jpeg', 'foto', 'CASE 14 PRO. 40,00$')


      }
      if(message.body==='iphone 13' || message.body==='iphone13' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Iphone 13:*')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone13/case1.jpeg', 'foto', 'CAPA TRANSPARENTE IPHONE 13 PRO MAX VALOR: 50,00$  ')
      }
      if(message.body==='iphone 12' || message.body==='iphone12' && message.isGroupMsg===false){
        client.sendText(message.from, '*Lista de capinhas do Iphone 12:*')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone12/case1.jpeg', 'foto', 'CAPA IPHONE 12 PRO MAX. 40,00$')
        
      }
      if(message.body ==='iphone11' || message.body === 'iphone 11' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de capinhas do Iphone 11:*')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone11/case1.jpeg', 'foto', 'CAPA TRANSPARENTE IPHONE 11PRO VALOR: 40,00$')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone11/case2.jpeg', 'foto', '')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone11/case3.jpeg', 'foto', 'CAPA IPHONE 11 PRO MAX. 40,00$')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone11/case4.jpeg', 'foto', 'CAPA IPHONE 11 PRO MAX. 40,00$')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone11/case5.jpeg', 'foto', 'CAPA IPHONE 11. 30,00$')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone11/case6.jpeg', 'foto', 'CAPA IPHONE 11 PRO MAX. 40,00$')

        
      }
      
      if(message.body ==='iphone7 plus' || message.body === 'iphone 7 plus' || message.body ==='iphone8 plus' || message.body === 'iphone 8 plus' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de capinhas do Iphone 7/8 Plus:*')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone7&8plus/case1.jpeg', 'foto', 'CASE IPHONE 7/8 PLUS. 40,00$')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone7&8plus/case2.jpeg', 'foto', 'CAPA IPHONE 7/8 PLUS. 30,00$')
      }
      if(message.body ==='iphone7' || message.body === 'iphone 7' || message.body ==='iphone8' || message.body === 'iphone 8' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de capinhas do Iphone 7/8:*')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone7&8/case1.jpeg', 'foto', 'CASE IPHONE 7/8. 40,00$')
        
      }
      if(message.body ==='iphone6' || message.body === 'iphone 6' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de capinhas do Iphone 6:*')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphone6/case1.jpeg', 'foto', 'CASE IPHONE 6. 40,00$')
      }
      if(message.body ==='iphonexr' || message.body === 'iphone xr' || message.body==='iphone x' || message.body==='iphonex' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de capinhas do Iphone X e Xr:*')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphonexr/case1.jpeg', 'foto', '')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphonexr/case2.jpeg', 'foto', 'CAPA IPHONE XR. 30,00$')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphonexr/case3.jpeg', 'foto', 'CAPA IPHONE XR. 40,00$')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphonexr/case6.jpeg', 'foto', 'CAPA IPHONE XS. 40,00$') 
      }

      if(message.body ==='iphonexs max' || message.body === 'iphone xs max' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de capinhas do Iphone Xs Max:*')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphonexsmax/case1.jpeg', 'foto', 'CAPA IPHONE xs MAX. 40,00$')
        client.sendImage(message.from, './assets/imgs/capinhas/iphone/iphonexsmax/case2.jpeg', 'foto', 'CAPA IPHONE Xs MAX. 30,00$')
        
      }


      if(message.body ==='2' && message.isGroupMsg ===false){
        client.sendText(message.from, '*Lista de Carregadores:*')
        client.sendImage(message.from, './assets/imgs/carregador/carregador1.jpeg', 'foto', 'BASIKE, CAREEGADOR COM DUAS PORTAS USB VALOR: 25,00$')
        client.sendImage(message.from, './assets/imgs/carregador/carregador2.jpeg', 'foto', 'CARREGADO TIPO C, SAÍDA 3.A VALOR: 25,00$')
        client.sendImage(message.from, './assets/imgs/carregador/carregador3.jpeg', 'foto', 'CARREGADOR TURBO, TIPO C VALOR: 50,00$')
        client.sendImage(message.from, './assets/imgs/carregador/carregador4.jpeg', 'foto', 'CARREGADOR 2.1A DISPONÍVEL NAS CORES: AZUL, PRETO, BRANCO E VERMELHO. VALOR: 15,00$')
        client.sendImage(message.from, './assets/imgs/carregador/carregador5.jpeg', 'foto', 'CARREGADOR IOS VALOR: 40,00$')
        client.sendImage(message.from, './assets/imgs/carregador/carregadorAutomotivo.jpeg', 'foto', 'CARREGADOR AUTOMOTIVO PARA IPHONE 40,00$')
        client.sendImage(message.from , './assets/imgs/carregador/caboUSb1.jpeg', 'foto', 'CABO DE DADOS MICRO USB. VALOR: 20,00$')
        client.sendImage(message.from, './assets/imgs/carregador/caboUSb2.jpeg', 'foto', 'CABO TURBO MICRO USB 5.8A VALOR: 20,00$')
        client.sendImage(message.from, './assets/imgs/carregador/caboUSb3.jpeg', 'foto', 'CABO TIPO C. VALOR: 30,00$')
        client.sendImage(message.from, './assets/imgs/carregador/caboUSb4.jpeg', 'foto', 'CABO TIPO C. 3.1A DISPONÍVEL NAS CORES: AZUL, PRETO E VERMELHO.                                            VALOR: 10,00$')
        client.sendImage(message.from, './assets/imgs/carregador/caboUSb5.jpeg', 'foto', 'CABO, ENTRADA V8, 3.1A DISPONÍVEL NAS CORES: VERMELHO, CINZA E PRETO.            VALOR: 10,00$')
        client.sendImage(message.from, './assets/imgs/carregador/caboUSb6.jpeg', 'foto', 'CABO V8 VALOR: 10,00$')
        client.sendImage(message.from, './assets/imgs/carregador/caboUSb7.jpeg', 'foto', 'CABO CARGA RÁPIDA PARA IPHONE VALOR: 20,00$')
        
        
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



