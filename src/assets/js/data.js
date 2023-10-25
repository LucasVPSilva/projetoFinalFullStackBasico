const contentCardsGrowCast = document.getElementById('cards-growcast')
const contentCardsWebinar = document.getElementById('cards-webinar')
const contentCardsUxUi = document.getElementById('cards-uxui')
const contentCardsDiversos = document.getElementById('cards-diversos')


const cardsYoutube = [
    {
        image: 'https://img.youtube.com/vi/aJ-HZuLcKeA/sddefault.jpg',
        title: 'Growcast #00',
        link: 'https://www.youtube.com/embed/aJ-HZuLcKeA',
        category: 'growcast',

    },
    {
        image: 'https://img.youtube.com/vi/7OWT3lfHYvE/sddefault.jpg',
        title: 'Growcast #01',
        link: 'https://www.youtube.com/embed/7OWT3lfHYvE',
        category: 'growcast',

    },
    {
        image: 'https://img.youtube.com/vi/ci1eQGPK89o/sddefault.jpg',
        title: 'Growcast #02',
        link: 'https://www.youtube.com/embed/ci1eQGPK89o',
        category: 'growcast',

    },
    {
        image: 'https://img.youtube.com/vi/WM7pGG7OicQ/sddefault.jpg',
        title: 'Growcast #03',
        link: 'https://www.youtube.com/embed/WM7pGG7OicQ',
        category: 'growcast',

    },
    {
        image: 'https://img.youtube.com/vi/2c8VOBZ160Y/sddefault.jpg',
        title: 'Growcast #04',
        link: 'https://www.youtube.com/embed/2c8VOBZ160Y',
        category: 'growcast',

    },
    {
        image: 'https://img.youtube.com/vi/mxnEm03cYPc/sddefault.jpg',
        title: 'Growcast #05',
        link: 'https://www.youtube.com/embed/mxnEm03cYPc',
        category: 'growcast',

    },
    {
        image: 'https://img.youtube.com/vi/m7DyR07KrOE/sddefault.jpg',
        title: 'Growcast #06',
        link: 'https://www.youtube.com/embed/m7DyR07KrOE',
        category: 'growcast',

    },
    {
        image: 'https://img.youtube.com/vi/vW8G9KPwRL0/sddefault.jpg',
        title: 'Growcast #07',
        link: 'https://www.youtube.com/embed/vW8G9KPwRL0',
        category: 'growcast',

    },
    {
        image: 'https://img.youtube.com/vi/_Ut2KqAqPyk/sddefault.jpg',
        title: 'Growcast #08',
        link: 'https://www.youtube.com/embed/_Ut2KqAqPyk',
        category: 'growcast',

    },
    {
        image: 'https://img.youtube.com/vi/dfDgs0Ive2Q/sddefault.jpg',
        title: 'Growcast #09',
        link: 'https://www.youtube.com/embed/dfDgs0Ive2Q',
        category: 'growcast',

    },

    {
        image: "https://img.youtube.com/vi/WKbLXuP9S-c/sddefault.jpg",
        title: "Webinar - Recriando a interface do Linkedin com Flutter",
        link: "https://www.youtube.com/embed/WKbLXuP9S-c",
        category: "webinar",
    },
    {
        image: "https://img.youtube.com/vi/dJ6y1zMjVXU/sddefault.jpg",
        title: "Webinar - Recriando a interface do Instagram com Flutter",
        link: "https://www.youtube.com/embed/dJ6y1zMjVXU",
        category: "webinar",
    },
    {
        image: "https://img.youtube.com/vi/8rdJsqUjsGg/sddefault.jpg",
        title: "Webinar - Recriando a interface do iFood com Flutter",
        link: "https://www.youtube.com/embed/8rdJsqUjsGg",
        category: "webinar",
    },
    {
        image: "https://img.youtube.com/vi/C4p_7qBsECw/sddefault.jpg",
        title: "Webinar - Recriando a interface do PicPay com Flutter",
        link: "https://www.youtube.com/embed/C4p_7qBsECw",
        category: "webinar",
    },
    {
        image: "https://img.youtube.com/vi/L1pKoMC6hWk/sddefault.jpg",
        title: "Webinar - Recriando o layout do WhatsApp com Flutter",
        link: "https://www.youtube.com/embed/L1pKoMC6hWk",
        category: "webinar",
    },

    {
        image: "https://img.youtube.com/vi/FiZMowbaiJA/sddefault.jpg",
        title: "Live #5 Jornada UX/UI: O UX/UI Design é para todos?",
        link: "https://www.youtube.com/embed/FiZMowbaiJA",
        category: "ux-ui",
    },
    {
        image: "https://img.youtube.com/vi/cwqDu0ZzbYE/sddefault.jpg",
        title:
            "Live #4 Jornada UX/UI: Como migrar para o UX/UI Design: a trajetória de uma designer - Growdev",
        link: "https://www.youtube.com/embed/cwqDu0ZzbYE",
        category: "ux-ui",
    },
    {
        image: "https://img.youtube.com/vi/ZMZjQ9aRuIY/sddefault.jpg",
        title:
            "Live #3 Jornada UX/UI: As oportunidades de estudar um programa de formação pagando após formado",
        link: "https://www.youtube.com/embed/ZMZjQ9aRuIY",
        category: "ux-ui",
    },
    {
        image: "https://img.youtube.com/vi/8sd3wuKTZMA/sddefault.jpg",
        title:
            "Live #2 Jornada UX/UI: O profissional de UX/UI Design no mercado digital - Growdev",
        link: "https://www.youtube.com/embed/8sd3wuKTZMA",
        category: "ux-ui",
    },
    {
        image: "https://img.youtube.com/vi/-26aqPtgoEY/sddefault.jpg",
        title:
            "Live #1 Jornada UX/UI: O papel do UX/UI Designer no desenvolvimento de um produto digital - Growdev",
        link: "https://www.youtube.com/embed/-26aqPtgoEY",
        category: "ux-ui",
    },
    {
        image: "https://img.youtube.com/vi/QsuhYgsSYQo/sddefault.jpg",
        title: "Célula de talentos - Uma solução Growdev",
        link: "https://www.youtube.com/embed/QsuhYgsSYQo",
        category: "geral",
    },
    {
        image: "https://img.youtube.com/vi/ouDn8z3PSqs/sddefault.jpg",
        title: "Como é o dia a dia de um dev? Live Growdev com Marcelo Eltz",
        link: "https://www.youtube.com/embed/ouDn8z3PSqs",
        category: "geral",
    },
    {
        image: "https://img.youtube.com/vi/cQDQNX6NXYo/sddefault.jpg",
        title:
            "Onde trabalhar com qualidade de software? Conheça a Testing Company, empresa parceira da Growdev",
        link: "https://www.youtube.com/embed/cQDQNX6NXYo",
        category: "geral",
    },
    {
        image: "https://img.youtube.com/vi/nKGbolkirBM/sddefault.jpg",
        title: "WEBINAR ANALISTA DE DADOS - com Paulo Marcon da Arezzo&Co",
        link: "https://www.youtube.com/embed/nKGbolkirBM",
        category: "geral",
    },
    {
        image: "https://img.youtube.com/vi/6sZPsqNjeek/sddefault.jpg",
        title: "Tecnologia trazendo soluções para a Arezzo & CO | Ricardo Pinho",
        link: "https://www.youtube.com/embed/6sZPsqNjeek",
        category: "geral",
    },

];


const videoGrowcast = cardsYoutube.filter(video => video.category == "growcast");
const videoWebinar = cardsYoutube.filter(video => video.category == "webinar");
const videoUxUi = cardsYoutube.filter(video => video.category == "ux-ui");
const videoDiversos = cardsYoutube.filter(video => video.category == "geral");

const videosDivGrowcast = document.createElement('div');
videosDivGrowcast.classList.add('row');


videoGrowcast.forEach(card => {



    const videosCard = document.createElement('div');
    videosCard.classList.add('col-12', 'col-sm-6', 'col-md-3', 'col-movie');

    videosCard.innerHTML = `
                <img
              src="${card.image}"
              class="img-fluid"
              alt=""
            />
    `

    videosDivGrowcast.appendChild(videosCard)


})
contentCardsGrowCast.appendChild(videosDivGrowcast)


const videosDivWebinar = document.createElement('div');
videosDivWebinar.classList.add('row');

videoWebinar.forEach(card => {



    const videosCard = document.createElement('div');
    videosCard.classList.add('col-12', 'col-sm-6', 'col-md-3', 'col-movie');

    videosCard.innerHTML = `
                <img
              src="${card.image}"
              class="img-fluid"
              alt=""
            />
    `

    videosDivWebinar.appendChild(videosCard)


})
contentCardsWebinar.appendChild(videosDivWebinar)


const videosDivUxUi = document.createElement('div');
videosDivUxUi.classList.add('row');

videoUxUi.forEach(card => {



    const videosCard = document.createElement('div');
    videosCard.classList.add('col-12', 'col-sm-6', 'col-md-3', 'col-movie');

    videosCard.innerHTML = `
                <img
              src="${card.image}"
              class="img-fluid"
              alt=""
            />
    `

    videosDivUxUi.appendChild(videosCard)


})
contentCardsUxUi.appendChild(videosDivUxUi)


const videosDiversos = document.createElement('div');
videosDiversos.classList.add('row');

videoDiversos.forEach(card => {



    const videosCard = document.createElement('div');
    videosCard.classList.add('col-12', 'col-sm-6', 'col-md-3', 'col-movie');

    videosCard.innerHTML = `
                <img
              src="${card.image}"
              class="img-fluid"
              alt=""
            />
    `

    videosDiversos.appendChild(videosCard)


})
contentCardsDiversos.appendChild(videosDiversos)