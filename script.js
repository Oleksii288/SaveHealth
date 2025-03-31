console.log('Script connected!');

const arrayOfFluTips = [
  "Пийте багато теплої рідини для зволоження",  
  "Відпочивайте і надайте організму час на відновлення",  
  "Зволожуйте повітря в кімнаті для полегшення дихання", 
  "Приймайте жарознижувальні засоби при необхідності",  
  "Вживайте вітамін C для підтримки імунітету",  
  "Частіше провітрюйте приміщення",  
  "Мийте руки, щоб уникнути повторного зараження",  
  "Забезпечте собі теплу і зручну обстановку",  
  "Уникайте фізичних навантажень до повного одужання", 
  "Вживайте легку і поживну їжу",  
  "Полощіть горло теплим розчином солі",  
  "Застосовуйте назальні спреї для полегшення нежитю",  
  "Використовуйте інгаляції для зняття закладеності носа", 
  "Слідкуйте за температурою тіла і звертайтесь до лікаря при потребі",  
  "Спіть достатньо для кращого відновлення",  
  "Не займайтесь самолікуванням – консультуйтесь із лікарем",  
  "Уникайте контакту з іншими для запобігання поширенню вірусу",  
  "Використовуйте теплі компреси для зняття головного болю",  
  "Пийте чай із медом та лимоном для полегшення симптомів",  
  "Дотримуйтесь рекомендацій лікаря і не переривайте лікування" 
];

let countOfPills = 5;

function updatePillsButton() {
  let pillsText = '';
  for (let i = 0; i < countOfPills; i++) {
      pillsText += '💊';
  }
  for (let i = countOfPills; i < 5; i++) {
      pillsText += '❌';
  }
  document.getElementById('count-of-pills').textContent = pillsText;
};

document.getElementById("btn-buy-pill").addEventListener("click", function() {
  countOfPills = 5;
  updatePillsButton();   
  document.getElementById("healthMessage").textContent = "Пігулки відновлені. Готові для використання!";
});

document.getElementById("Wishes_btn").addEventListener("click", function() {
  if (countOfPills > 0) {
      const randomIndex = Math.floor(Math.random() * arrayOfFluTips.length);
      document.getElementById("p_Wishes").textContent = arrayOfFluTips[randomIndex];
      countOfPills--;  
      updatePillsButton();  
  } else {
    document.getElementById("healthMessage").textContent = "Пігулки закінчилися! Купіть нові.";
  }
});

updatePillsButton();



document.addEventListener("DOMContentLoaded", () => {
  let galleryImage = 0;
  let arrayOfGalleryImages = ["1.jpg", "2.jpg", "3.jpg"]; // Твій масив зображень

  let mainImage = document.getElementById("main-image");
  let rightArrow = document.getElementById("right-arrow");
  let leftArrow = document.getElementById("left-arrow");

  if (!mainImage || !rightArrow || !leftArrow) {
    console.error("Помилка: Один або кілька елементів не знайдено.");
    return;
  }

  mainImage.setAttribute('src', `img/${arrayOfGalleryImages[galleryImage]}`);

  rightArrow.addEventListener('click', () => {
    galleryImage++;
    if (galleryImage === arrayOfGalleryImages.length) galleryImage = 0;
    mainImage.setAttribute('src', `img/${arrayOfGalleryImages[galleryImage]}`);
  });

  leftArrow.addEventListener('click', () => {
    galleryImage--;
    if (galleryImage < 0) galleryImage = arrayOfGalleryImages.length - 1;
    mainImage.setAttribute('src', `img/${arrayOfGalleryImages[galleryImage]}`);
  });
});

function amin(img) {
  const mainImage = document.getElementById('main-image');
  mainImage.style.opacity = '0'; // Почати з прозорості
  setTimeout(() => {
      mainImage.setAttribute('src', `img/$.jpg`);
      mainImage.style.opacity = '1'; // Показати зображення
  }, 300); // Час анімації має співпадати з transition у CSS
}

//робота з об'єктами

const arrayOfVitaminObjests = [
  {
    "id": 1,
    "title": "Вітамін C",
    "photo": "",
    "description": "Вітамін C підтримує імунітет, зміцнює судини, зменшує ризик серцевих захворювань, покращує здоров'я шкіри, сприяє засвоєнню заліза.",
    "rating": "",
    "useful":"",
  },
  {
    "id": 2,
    "title": "Вітамін D3",
    "photo": "",
    "description": "Вітамін D3 підтримує здоров'я кісток, зубів, м'язів, нервової системи, підтримує імунітет, зменшує ризик депресії.",
    "rating": "",
    "useful":"",
  },
  {
    "id": 3,
    "title": "Вітамін E",
    "photo": "",
    "description": "Вітамін E є антиоксидантом, підтримує здоров'я шкіри, зміцнює імунітет, покращує здоров'я очей, сприяє засвоєнню вітамінів A, D, K.",
    "rating": "",
    "useful":"",
  },
  {
    "id": 4,
    "title": "Вітамін B12",
    "photo": "",
    "description": "Вітамін B12 підтримує нормальну роботу нервової системи, підтримує здоров'я крові, покращує пам'ять, зміцнює імунітет.",
    "rating": "",
    "useful":"",
  },
  {
    "id": 5,
    "title": "Вітамін A",
    "photo": "",
    "description": "Вітамін A підтримує здоров'я очей, шкіри, зубів, кісток, підтримує імунітет, зміцнює судини.",
    "rating": "",
    "useful":"",
  },
  {
    "id": 6,
    "title": "Вітамін K2",
    "photo": "",
    "description": "Вітамін K2 підтримує здоров'я кісток, зубів, судин, підтримує нормальний обмін кальцію, зменшує ризик серцевих захворювань.",
    "rating": "",
    "useful":"",
  },
  {
    "id": 7,
    "title": "Вітамін B6",
    "photo": "",
    "description": "Вітамін B6 підтримує нормальну роботу нервової системи, підтримує здоров'я шкіри, волосся, нігтів, покращує настрій.",
    "rating": "",
    "useful":"",
  },
]

//console.log(arrayOfVitaminObjests)

arrayOfVitaminObjests.forEach((item) => {
  console.log(item)

  let divVitamin = document.createElement('div')
  divVitamin.classList.add('vitamin')
  divVitamin.innerText = item.title

  document.getElementById('p-vitamins').appendChild(divVitamin)
})