const cartas = [
    {
        img: 'img/rpg.jpg',
        titulo: 'Mesa de RPG',
        data: 'Todas as quinta-feiras',
        horario: 'A partir das 15h',
        descricao: 'Crie seu personagem e venha se aventurar no incrivel mundo de Gumball. Enfrente horda de goblins, dragões e diversos outros monstros perigosos enquanto faz diversas novas amizades pelo caminho.'
    },
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
        img: 'img/chocobo.jfif',
        titulo: 'Corrida Chocobo',
        data: 'Todas as quinta-feiras',
        horario: 'A partir das 15h',
        descricao: 'Crie seu personagem e venha se aventurar no incrivel mundo de Gumball. Enfrente horda de goblins, dragões e diversos outros monstros perigosos enquanto faz diversas novas amizades pelo caminho.'
    },
    {
        img: 'img/montserrat.jpeg',
        titulo: 'Cerveja e Games',
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

