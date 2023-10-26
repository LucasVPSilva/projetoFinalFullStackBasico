const contentCardsGrowCast = document.getElementById('cards-growcast')
const contentCardsWebinar = document.getElementById('cards-webinar')
const contentCardsUxUi = document.getElementById('cards-uxui')
const contentCardsDiversos = document.getElementById('cards-diversos')



const cardsYoutube = [
    {
        image: "https://img.youtube.com/vi/aJ-HZuLcKeA/sddefault.jpg",
        title: "Growcast #00 - Conheça a Growdev",
        link: "https://www.youtube.com/embed/aJ-HZuLcKeA",
        category: "growcast",
    },
    {
        image: "https://img.youtube.com/vi/7OWT3lfHYvE/sddefault.jpg",
        title: "Growcast #01 - As profissões do futuro",
        link: "https://www.youtube.com/embed/7OWT3lfHYvE",
        category: "growcast",
    },
    {
        image: "https://img.youtube.com/vi/ci1eQGPK89o/sddefault.jpg",
        title: "Growcast #02 - Como seguir a carreira internacional?",
        link: "https://www.youtube.com/embed/ci1eQGPK89o",
        category: "growcast",
    },
    {
        image: "https://img.youtube.com/vi/WM7pGG7OicQ/sddefault.jpg",
        title: "Growcast #03 - Superando os desafios da carreira de Dev!",
        link: "https://www.youtube.com/embed/WM7pGG7OicQ",
        category: "growcast",
    },
    {
        image: "https://img.youtube.com/vi/2c8VOBZ160Y/sddefault.jpg",
        title: "Growcast #04 - Agile Master: tudo sobre a profissão!",
        link: "https://www.youtube.com/embed/2c8VOBZ160Y",
        category: "growcast",
    },
    {
        image: "https://img.youtube.com/vi/mxnEm03cYPc/sddefault.jpg",
        title:
            "Growcast #5 - Como iniciar na carreira em Desenvolvimento de Softwares?",
        link: "https://www.youtube.com/embed/mxnEm03cYPc",
        category: "growcast",
    },
    {
        image: "https://img.youtube.com/vi/m7DyR07KrOE/sddefault.jpg",
        title: "Growcast #06 - Mulheres e inclusão na tecnologia",
        link: "https://www.youtube.com/embed/m7DyR07KrOE",
        category: "growcast",
    },
    {
        image: "https://img.youtube.com/vi/vW8G9KPwRL0/sddefault.jpg",
        title: "Growcast #07 - Desenvolvendo profissionais na área de TI",
        link: "https://www.youtube.com/embed/vW8G9KPwRL0",
        category: "growcast",
    },
    {
        image: "https://img.youtube.com/vi/_Ut2KqAqPyk/sddefault.jpg",
        title:
            "Growcast #8 - A solução que está transformando o mercado de TI no Brasil",
        link: "https://www.youtube.com/embed/_Ut2KqAqPyk",
        category: "growcast",
    },
    {
        image: "https://img.youtube.com/vi/dfDgs0Ive2Q/sddefault.jpg",
        title:
            "Growcast #9 - Acompanhe com quem realmente entende, tudo sobre o mercado de trabalho no mundo da TI",
        link: "https://www.youtube.com/embed/dfDgs0Ive2Q",
        category: "growcast",
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



videoGrowcast.forEach((card, index) => {



    const videosCard = document.createElement('div');
    videosCard.classList.add('video-card', 'col-12', 'col-sm-6', 'col-md-3', 'col-movie');

    videosCard.innerHTML = `
       
                <img
              src="${card.image}"
              class="img-fluid"
              alt=""
            />
            <div class="video-card">
            <p class="video-name text-light">
             <a href="${card.link}" class="text-light">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" class="bi bi-play-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"></path>
                </svg>
               <span class="p-4">${card.title}</span>
              </a>
              <button type="button" class="btn btn-primary botaozin" data-bs-toggle="modal" data-bs-target="#exampleModal-${index}">
                Launch demo modal
              </button>

            </p>
        


        <!-- Modal -->
            <div class="modal fade" id="exampleModal-${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="ratio ratio-21x9" id="iframe-preview">
                    <iframe width="1353" height="580" src="${card.link}" title="Growcast #00 | Conheça a Growdev" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>    
]
                 </div>
            </div>
            </div>
  
           
    `;

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


