const mobileMenuBtn = document.querySelector('.menu-btn');
const headerNavMobile = document.querySelector('.header-nav-mobile');
const btnCloseNav = document.querySelector('.btn-close-nav');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.add('hidden');
  headerNavMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
  mobileMenuBtn.classList.remove('hidden');
  headerNavMobile.classList.add('hidden');
});

const speakerBtn = document.querySelector('.speakers-btn');

if (speakerBtn != null) {
  const speakerContainerCard = document.querySelector('.speaker-container-card');
  const mediaqueryList = window.matchMedia('(max-width: 768px)');

  const speakersDetail = [
    {
      url: './img/speaker/speaker-1.png',
      name: 'Yochai Benkler',
      position: 'Beykman Professor of Enterpreanurial Legal Studies of Harvard Law School',
      description: 'Benlder studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    },
    {
      url: './img/speaker/speaker-2.png',
      name: 'SohYeong Noh',
      position: 'Director of Art Centre Nabl and a board member of CC Korea',
      description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
    },
    {
      url: './img/speaker/speaker-3.png',
      name: 'Lila Tretikov',
      position: 'Executive Director of the Wikimedia Foundation',
      description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia Wikipedia is freely available in 290 languag es and used by nearly half a billion people around the world every month',
    },
    {
      url: './img/speaker/speaker-4.png',
      name: 'Kilnam Chon',
      position: 'Beykman Professor of Enterpreanurial Legal Studies of Harvard Law School',
      description: "Kinam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital com mons. In 2012, he was inducted into the inaugural class of the Internet Society's (SOC) Internet Hall of Fame.",
    },
    {
      url: './img/speaker/speaker-5.png',
      name: 'Julia Leda',
      position: 'President of Young Pirates of Europe',
      description: "European ingetration, political democracy and participa tion of youth through online as her major condern, Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July",
    },
    {
      url: './img/speaker/speaker-6.png',
      name: 'Ryan Merkley',
      position: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
      description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source move ment',
    },
  ];

  const cardSpeaker = (index) => `
  <div class="speaker-card-img">
      <img src=${speakersDetail[index].url} alt="image of speaker ${speakersDetail[index].name}">
  </div>
  <div class="speaker-card-content">
      <div class="speaker-card-name">
          <p>
              ${speakersDetail[index].name}
          </p>
      </div>
      <div class="speaker-card-position">
          <p>
              ${speakersDetail[index].position}
          </p>
      </div>
      <div class="speaker-card-description">
          <p>${speakersDetail[index].description}</p>
      </div>
  </div>
  `;

  const showTwoSpeakers = () => {
    speakerContainerCard.innerHTML = ' ';
    for (let i = 0; i < 2; i += 1) {
      const speaker = document.createElement('div');
      speaker.classList.add('speaker-card');
      speaker.innerHTML = cardSpeaker(i);
      speakerContainerCard.appendChild(speaker);
    }
  };

  const showAllSpeakers = () => {
    speakerContainerCard.innerHTML = ' ';
    for (let i = 0; i < speakersDetail.length; i += 1) {
      const speaker = document.createElement('div');
      speaker.classList.add('speaker-card');
      speaker.innerHTML = cardSpeaker(i);
      speakerContainerCard.appendChild(speaker);
    }
  };

  speakerBtn.addEventListener('click', () => {
    const regex = /MORE/;
    const toggle = regex.test(speakerBtn.textContent);
    if (toggle) {
      speakerBtn.innerHTML = 'LESS <i class="fa fa-chevron-up" ></i>';
      showAllSpeakers();
    } else {
      speakerBtn.innerHTML = 'MORE <i class="fa fa-chevron-down" ></i>';
      showTwoSpeakers();
    }
  });

  const screenTest = (e) => {
    if (e.matches) {
      showTwoSpeakers();
    } else {
      showAllSpeakers();
    }
  };

  screenTest(mediaqueryList);

  mediaqueryList.addListener(screenTest);
}