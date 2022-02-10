const btn = document.querySelector('.btn')
let url = 'https://type.fit/api/quotes'; 
const quote = document.querySelector('.quote');
const ru = document.querySelector('.header-switch-link-ru');
const en = document.querySelector('.header-switch-link-en');

btn.addEventListener('click', getQuotes);
ru.addEventListener('click', funRu);
en.addEventListener('click', funEn);

async function getQuotes() {    
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    showData(data);    
  }
getQuotes()

function showData(data) {
    let random = Math.floor(Math.random() * (500 - 0 + 1) + 0);
    quote.textContent = data[random].text;
}
///Нажатие на кнопку смены цитат
function funRu() {
    en.classList.remove('active');
    ru.classList.add('active');
    url = "./json/data.json";
    getQuotes();
}

function funEn() {
    ru.classList.remove('active');
    en.classList.add('active');
    url = 'https://type.fit/api/quotes';
    getQuotes();
}

// Смена фона
btn.addEventListener('click', () => {
    let body = document.querySelector('body');
    body.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;  
    function getRandom(min, max) {
        return Math.ceil(Math.random() * (max - min) + min)
    }    
})