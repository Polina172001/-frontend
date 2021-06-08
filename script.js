let object = {
  "formName": "Тестовое задание для стажёра “ Генератор форм ”",
  "nameDeveloper": "Филиппова Полина Сергеевна",
  "formed": 2021,
  "active": true,
  "inputs": [{
      "label": "Фамилия",
      "type": "text",
      "id": "last_name"
    },
    {
      "label": "Имя",
      "type": "text",
      "id": "name"
    },
    {
      "label": "Отчество",
      "type": "text",
      "id": "patronymic"
    },
    {
      "label": "Фамилия латиницей",
      "type": "text",
      "id": "last_name_latin"
    },
    {
      "label": "Имя латиницей",
      "type": "text",
      "id": "name_latin"
    },
    {
      "label": "Возраст",
      "type": "number",
      "id": "age"
    },
    {
      "label": "Семейное положение",
      "type": "text",
      "id": "marital_status"
    },
    {
      "label": "Образование",
      "type": "text",
      "id": "education"
    }
  ],
  "contact_information": "Контактная информация",
  "contacts": [{
      "label": "Мобильный телефон",
      "type": "number",
      "id": "mobile"
    },
    {
      "label": "Электронная почта",
      "type": "text",
      "id": "mail"
    }
  ],
  "submit": {
    "url": "www.example.com",
    "text": "Отправить"
  }
}

const header = document.querySelector('header');
const form = document.querySelector('form');

function showHeader(jsonObj) {
  let titleH1 = document.createElement('h1');
  titleH1.textContent = jsonObj['formName'];
  header.appendChild(titleH1);
  let content = document.createElement('p');
  content.textContent = 'Выполнила: ' + jsonObj['nameDeveloper'] + ' // Дата: ' + jsonObj['formed'] + ' год';
  header.appendChild(content);
}

function showMainInfo(jsonObj) {
  let infoFields = jsonObj['inputs'];
  for (let i = 0; i < infoFields.length; i++) {
    let wrapperMain = document.createElement('article');
    let infoLabel = document.createElement('label');
    let infoInput = document.createElement('input');
    infoLabel.textContent = infoFields[i].label;
    wrapperMain.appendChild(infoLabel);
    wrapperMain.appendChild(infoInput);
    form.appendChild(wrapperMain);
  }
}

function showContact(jsonObj) {
  let titleH2 = document.createElement('h2');
  titleH2.textContent = jsonObj['contact_information'];
  form.appendChild(titleH2);
  let contactFields = jsonObj['contacts'];
  for (let i = 0; i < contactFields.length; i++) {
    let wrapperContact = document.createElement('article');
    let contactLabel = document.createElement('label');
    let contactInput = document.createElement('input');
    contactLabel.textContent = contactFields[i].label;
    wrapperContact.appendChild(contactLabel);
    wrapperContact.appendChild(contactInput);
    form.appendChild(wrapperContact);
  }
}

function sendForm(jsonObj) {
  let btnForm = document.createElement('button');
  btnForm.textContent = jsonObj.submit.text;
  form.appendChild(btnForm);
}

function startModule() {
  showHeader(object);
  showMainInfo(object);
  showContact(object);
  sendForm(object);
}

startModule();

// Получение JSON через GET запрос с сервера

// let requestURL = 'www.example.com';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload = function () {
//   showHeader(object);
//   showMainInfo(object);
//   showContact(object);
//   sendForm(object);
// }