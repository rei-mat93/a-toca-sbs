const cartas = [
    {
        img: 'img/magic.jpg',
        titulo: 'Liga Magic',
        data: '05/11',
        horario: '00:00',
        descricao: 'O Pré-lançamento é o momento mais aguardado por jogadores e colecionadores! É a primeira chance de colocar as mãos nos novos cards de Magic: The Gathering – Final Fantasy, montar seu deck e vivenciar toda a emoção dessa nova coleção em primeira mão.'
    },
    {
        img: 'img/pokemon.jpg',
        titulo: 'Torneio Pokémon',
        data: '10/06, 13/06, 16/06',
        horario: '15h-18h',
        descricao: 'Venha duelar, trocar cartas e fazer amizades! Traga seu baralho, suas trocas e sua energia de treinador para uma tarde com a comunidade Pokémon!'
    },
    {
        img: 'img/corrida-chocobo.png',
        titulo: 'Corrida Chocobo',
        data: 'Todas as quinta-feiras',
        horario: 'A partir das 15h',
        descricao: 'Prepare-se para uma disputa mágica como nenhuma outra! Os planoswalker foram convidados a participar da lendária Corrida de Chocobo, onde criaturas fantásticas cruzam os campos de Dominária em uma competição cheia de velocidade, feitiços e surpresas! Customize seu baralho, escolha seu chocobo corredor e use toda sua estratégia para cruzar a linha de chegada primeiro. Cartas exclusivas, recompensas temáticas e muita diversão te esperam nesse evento épico!'
    },
    {
        img: 'img/montserrat.jpeg',
        titulo: 'Cerveja e Games',
        data: '29/06',
        horario: 'A partir das 15h',
        descricao: "Mesmo com A Toca fechada, a diversão continua! <br>Venha curtir o espaço da Cervejaria Montserrat com: <br><br>✅ As melhores cervejas artesanais!<br>✅ Uma seleção incrível de jogos de tabuleiro disponíveis para jogar no local!<br><br> Diversão garantida + Cerveja de qualidade = Domingo perfeito!"
    },
    {
        img: 'img/rpg.png',
        titulo: 'Mesa de RPG',
        data: 'Todas as quinta-feiras',
        horario: 'A partir das 15h',
        descricao: 'Crie seu personagem e venha se aventurar no incrivel mundo de Gumball. Enfrente horda de goblins, dragões e diversos outros monstros perigosos enquanto faz diversas novas amizades pelo caminho.'
    }    
];

let currentIndex = 1;

function  updateCartas() {
    const carta = cartas[currentIndex];
    document.querySelector('.eventos-txt-titulo').textContent = carta.titulo;
    document.querySelector('.eventos-txt-texto.data').innerHTML = `<b>Datas: </b> ${carta.data}`;
    document.querySelector('.eventos-txt-texto.horario').innerHTML = `<b>Horário: </b> ${carta.horario}`;
    document.querySelector('.eventos-txt-texto.descricao').innerHTML = carta.descricao;

    const imgElements = document.querySelectorAll('.eventos-img');
    const numImgs = imgElements.length;
    const midIndex = Math.floor(numImgs/2);

    imgElements.forEach((img, i) =>{
        const offset = i - midIndex;

        let index = (currentIndex + offset + cartas.length) % cartas.length;
        img.src = cartas[index].img;
    })
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + cartas.length) % cartas.length;
    updateCartas();
}

function nextSlide() {
    currentIndex = (currentIndex +1) % cartas.length;
    updateCartas();
}

