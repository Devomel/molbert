

function sendFormToTelegram(event) {
  event.preventDefault(); 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  
  const text = `Ім'я: ${name}\nEmail: ${email}\nПовідомлення: ${message}`;
  const token = '6046796494:AAErnDOxsttqD9psqw3aAFgu5jE7_ucRX-s';
  const chatId = '638437107';
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
  axios.post(url, {
    chat_id: chatId,
    text: text
  })
  .then(response => {
    console.log('Повідомлення надіслано у Telegram');
    
  })
  .catch(error => {
    console.error('Помилка під час надсилання повідомлення у Telegram', error);
   
  });
}
const form = document.getElementById('myForm');
form.addEventListener('submit', sendFormToTelegram);


const menu = document.querySelector('.header__menu')
const burger = document.querySelector('.header__burger');
burger.addEventListener('click', showBurger);
const body = document.querySelector('body');
function showBurger(event){
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('noScroll');
}







const mainpage = document.getElementById('main');
const services = document.getElementById('services');
const about = document.getElementById('about');
const footer = document.getElementById('footer');
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight; 

mainpage.addEventListener('click', scrollToPoint);
services.addEventListener('click', scrollToPoint);
about.addEventListener('click', scrollToPoint);
footer.addEventListener('click', scrollToPoint);

function scrollToPoint(event) {
  event.preventDefault();

  const targetId = this.getAttribute('data-target');
  const element = document.querySelector(`.${targetId}`);
  if (element) {
    const elementPosition = element.offsetTop - headerHeight;
    window.scrollTo({
      top: elementPosition + 1,
      behavior: 'instant'
    });
  }
}



  


