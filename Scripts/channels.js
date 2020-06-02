const channels=[
    ['GoldenAgeRussia - Вместе', 'https://www.youtube.com/channel/UCqipea14WPKk5LO0gc-RNcw/live'],
    ['Игорь и Зухра Сарамановы', 'https://www.youtube.com/channel/UC_BNB8iUzTfTAxgUwacbU_Q/live'],
    ['Людмила Лучко', 'https://www.youtube.com/channel/UCJaSTCD7tgsAC9z_GXaZaDg/live'],
    ['Движение Золотого Века Казахстан', 'https://www.youtube.com/channel/UCmktJZPPxBzAQADpFPPe0sg/live'],
    ['Helen GAC Meditator', 'https://www.youtube.com/channel/UCQz5V1d9EJlkJsdhdDfBmEA/live'],
    ['Preethaji & Krishnaji Consciousness', 'https://www.youtube.com/channel/UCdvKxJ69nbOGNYPatfaMtpQ/live'],
    ['Sri Amma Bhagavan', 'https://www.youtube.com/channel/UCeQERwefKBhvbm4k5OZNffQ/live'],
    ['Eric Michael Isen', 'https://livestream.com/ericom'],
    ['Anette Carlstrom', 'https://livestream.com/anette-carlstrom'],
    ['Mother Meera', 'https://livestream.com/accounts/5660265'],
    ['Ukrainian Oneness Сenter', 'https://www.facebook.com/groups/onenessuniversity/videos/'],
    ['Golden Age Movement Brazil', 'https://www.youtube.com/channel/UCHY43Wx05wun1lK2yIMMRmQ/live'],
    ['Golden Age Movement', 'https://www.youtube.com/channel/UCdhlA5RL4i2qCX2Al0BMgAQ/live'],
    ['Елена Мурадова', 'https://www.youtube.com/channel/UCzXSIKLrskR6C0qxZ2tA0sQ/live'],
    ['EKAM MEDITATORS', 'https://ekam.org/ekam-meditators']
]

const sites=[
    ['Курс Путешествие к Счастью - Казахстан', 'https://pichueva.evg.justclick.ru/11'],
    ['Курс Путешествие к Счастью - Россия', 'http://goldenagerussia.info/program'],
    ['PRO Жизнь', 'http://projizn.tilda.ws'],
    ['O&O ACADEMY','https://www.oo.academy'],
    ['Золотой Век Россия','https://goldenagerussia.info'],
    ['Утренние медитации','https://www.instagram.com/meditation.utro'],
    ['EKAM The Oneness Field', 'https://ekam.org'],
    ['Про Молодость','http://fornew.ru/rpomolodost']
]

const telegram=[
    ['Медитації під час карантину', 'https://t.me/meditation_house'],
    ['Sri Amma Bhagavan family - International','https://t.me/The_Great_Compassionate_Light'],
    ['PRO Жизнь - медитации', 'https://t.me/treningcenter_projizn'],
    ['Медитации Трансформация Просветление', 'https://t.me/prosvetleniee']
]

const colors=[
    ['Living Coral', '#FF6F61'],
    ['Peach Pink', '#FA9A85'],
    ['Fruit Dove', '#CE5B78'],
    ['Orange Tiger', '#F96714'],  
    ['Aspen Gold', '#FFD662'],
    ['Riverside','#4C6A92'],
    ['Lush Meadow','#006E51'],
    ['Rose Quartz','#F7CAC9'],
    ['Limpet Shell','#98DDDE'],
    ['Fiesta','#DD4132'],
    ['Green Flash','#79C753'],
    ['Greenery','#92B558'],
    ['Grenadine','#DC4C46'],
    ['Shaded Spruce','#005960'],
    ['Golden Lime','#9C9A40'],
    ['Marina','#4F84C4'],
    ['Autumn Maple','#D2691E'],
    ['Niagara','#578CA9'],
    ['Lapis Blue','#004B8D'],
    ['Island Paradise','#95DEE3'],
    ['Pink Yarrow','#CE3175'],
    ['Nebulas Blue','#3F69AA'],
    ['Little Boy Blue','#6F9FD8'],
    ['Cherry Tomato','#E94B3C'],
    ['Arcadia','#00A591'],
    ['Lime Punch','#BFD641'],
    ['Princess Blue','#00539C'],
    ['Emerald','#009B77'],
    ['Tangerine Tango','#DD4124'],
    ['Honeysucle','#D65076'],
    ['Turquoise','#45B8AC'],
    ['Blue Izis','#5B5EA6'],
    ['Blue Turquoise','#55B4B0'],
    ['Tigerlily','#E15D44'],
    ['Fuchsia Rose','#C3447A'],
    ['Cerulean Blue','#98B4D4']
]
const fonts=[
    'Pacifico',
    'AmaticSC',
    'BadScript',
    'MarckScript',
    'Neucha',
    'Armatura',
    'RussianSuvenir',
    'URWTaurusD',
    'IsadoraC',
    'OksFree',
    'EchoRevival'
]
const fontSizes=[
    22, 23, 24, 25, 26, 27, 28, 29, 30
]

function placeChannels (section, sites) {
    while (sites.length>0) {
        let site = sites.splice(Math.floor(Math.random()*sites.length), 1);
        let e = document.createElement('a');
        e.className = 'channel';
        e.href = site[0][1];
        e.innerText = site[0][0];
        e.target = '_blank';
        section.appendChild(e);
    }
}

function styleElements(elems) {
    for (let e of elems) {
        let children = e.children;
        for (child of children) {
            let colorId = Math.floor(Math.random()*colors.length);
            child.style.color = colors[colorId][1];
            let fontId = Math.floor(Math.random()*fonts.length);
            child.style.fontFamily = fonts[fontId];
            let fontSizeId = Math.floor(Math.random()*fontSizes.length);
            child.style.fontSize = fontSizes[fontSizeId]+'px';
        }
    }
}

// Content insert:
let channelSection = document.getElementById("channels");
if(channelSection!=null) placeChannels(channelSection, channels);

channelSection = document.getElementById("sites");
if(channelSection!=null) placeChannels(channelSection, sites);

channelSection = document.getElementById("channelsT");
if(channelSection!=null) placeChannels(channelSection, telegram);

// Style content:
let elems = document.getElementsByClassName('elements');
styleElements(elems);
