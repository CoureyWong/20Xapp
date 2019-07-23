const question = document.getElementById('question');
const answer = document.getElementById('answer');
const next = document.querySelector('.next');
const button = document.getElementById('displayBtn');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const h1 = document.querySelector('h1');
const links = document.getElementById('links');
const startBtn = document.querySelector('.display');

const thirteen = [
  {question:'13 x 1',answer: '13'},
  {question:'13 x 2',answer: '26'},
  {question:'13 x 3',answer: '39'},
  {question:'13 x 4',answer: '52'},
  {question:'13 x 5',answer: '65'},
  {question:'13 x 6',answer: '78'},
  {question:'13 x 7',answer: '91'},
  {question:'13 x 8',answer: '104'},
  {question:'13 x 9',answer: '117'},
  {question:'13 x 10',answer: '130'},
  {question:'13 x 11',answer: '143'},
  {question:'13 x 12',answer: '156'},
  {question:'13 x 13',answer: '169'}
];
const fourteen = [
  {question:'14 x 1',answer: '14'},
  {question:'14 x 2',answer: '28'},
  {question:'14 x 3',answer: '42'},
  {question:'14 x 4',answer: '56'},
  {question:'14 x 5',answer: '70'},
  {question:'14 x 6',answer: '84'},
  {question:'14 x 7',answer: '98'},
  {question:'14 x 8',answer: '112'},
  {question:'14 x 9',answer: '126'},
  {question:'14 x 10',answer: '140'},
  {question:'14 x 11',answer: '154'},
  {question:'14 x 12',answer: '168'},
  {question:'14 x 13',answer: '182'},
  {question:'14 x 14',answer: '196'}
];
const fifteen = [
  {question:'15 x 1',answer: '15'},
  {question:'15 x 2',answer: '30'},
  {question:'15 x 3',answer: '45'},
  {question:'15 x 4',answer: '60'},
  {question:'15 x 5',answer: '75'},
  {question:'15 x 6',answer: '90'},
  {question:'15 x 7',answer: '105'},
  {question:'15 x 8',answer: '120'},
  {question:'15 x 9',answer: '135'},
  {question:'15 x 10',answer: '150'},
  {question:'15 x 11',answer: '165'},
  {question:'15 x 12',answer: '180'},
  {question:'15 x 13',answer: '195'},
  {question:'15 x 14',answer: '210'},
  {question:'15 x 15',answer: '225'}
];
const sixteen = [
  {question:'16 x 1',answer: '16'},
  {question:'16 x 2',answer: '32'},
  {question:'16 x 3',answer: '48'},
  {question:'16 x 4',answer: '64'},
  {question:'16 x 5',answer: '80'},
  {question:'16 x 6',answer: '96'},
  {question:'16 x 7',answer: '112'},
  {question:'16 x 8',answer: '128'},
  {question:'16 x 9',answer: '144'},
  {question:'16 x 10',answer: '160'},
  {question:'16 x 11',answer: '176'},
  {question:'16 x 12',answer: '192'},
  {question:'16 x 13',answer: '208'},
  {question:'16 x 14',answer: '224'},
  {question:'16 x 15',answer: '240'},
  {question:'16 x 16',answer: '256'}
];
const seventeen = [
  {question:'17 x 1',answer: '17'},
  {question:'17 x 2',answer: '34'},
  {question:'17 x 3',answer: '51'},
  {question:'17 x 4',answer: '68'},
  {question:'17 x 5',answer: '85'},
  {question:'17 x 6',answer: '102'},
  {question:'17 x 7',answer: '119'},
  {question:'17 x 8',answer: '136'},
  {question:'17 x 9',answer: '153'},
  {question:'17 x 10',answer: '170'},
  {question:'17 x 11',answer: '187'},
  {question:'17 x 12',answer: '204'},
  {question:'17 x 13',answer: '221'},
  {question:'17 x 14',answer: '238'},
  {question:'17 x 15',answer: '255'},
  {question:'17 x 16',answer: '272'},
  {question:'17 x 17',answer: '289'}
];
const eighteen = [
  {question:'18 x 1',answer: '18'},
  {question:'18 x 2',answer: '36'},
  {question:'18 x 3',answer: '54'},
  {question:'18 x 4',answer: '72'},
  {question:'18 x 5',answer: '90'},
  {question:'18 x 6',answer: '108'},
  {question:'18 x 7',answer: '126'},
  {question:'18 x 8',answer: '144'},
  {question:'18 x 9',answer: '162'},
  {question:'18 x 10',answer: '180'},
  {question:'18 x 11',answer: '198'},
  {question:'18 x 12',answer: '216'},
  {question:'18 x 13',answer: '234'},
  {question:'18 x 14',answer: '252'},
  {question:'18 x 15',answer: '270'},
  {question:'18 x 16',answer: '288'},
  {question:'18 x 17',answer: '306'},
  {question:'18 x 18',answer: '324'}
];
const nineteen = [
  {question:'19 x 1',answer: '19'},
  {question:'19 x 2',answer: '38'},
  {question:'19 x 3',answer: '57'},
  {question:'19 x 4',answer: '76'},
  {question:'19 x 5',answer: '95'},
  {question:'19 x 6',answer: '114'},
  {question:'19 x 7',answer: '133'},
  {question:'19 x 8',answer: '152'},
  {question:'19 x 9',answer: '171'},
  {question:'19 x 10',answer: '190'},
  {question:'19 x 11',answer: '209'},
  {question:'19 x 12',answer: '228'},
  {question:'19 x 13',answer: '247'},
  {question:'19 x 14',answer: '266'},
  {question:'19 x 15',answer: '285'},
  {question:'19 x 16',answer: '304'},
  {question:'19 x 17',answer: '323'},
  {question:'19 x 18',answer: '342'},
  {question:'19 x 19',answer: '361'}
];
const twenty = [
  {question:'20 x 1',answer: '20'},
  {question:'20 x 2',answer: '40'},
  {question:'20 x 3',answer: '60'},
  {question:'20 x 4',answer: '80'},
  {question:'20 x 5',answer: '100'},
  {question:'20 x 6',answer: '120'},
  {question:'20 x 7',answer: '140'},
  {question:'20 x 8',answer: '160'},
  {question:'20 x 9',answer: '180'},
  {question:'20 x 10',answer: '200'},
  {question:'20 x 11',answer: '220'},
  {question:'20 x 12',answer: '240'},
  {question:'20 x 13',answer: '260'},
  {question:'20 x 14',answer: '280'},
  {question:'20 x 15',answer: '300'},
  {question:'20 x 16',answer: '320'},
  {question:'20 x 17',answer: '340'},
  {question:'20 x 18',answer: '360'},
  {question:'20 x 19',answer: '380'},
  {question:'20 x 20',answer: '400'}
];


const showH1 = e => {
  if(question.style.visibility = 'visible' && startBtn.textContent !== 'START'){
      question.style.visibility = 'hidden';
      answer.style.visibility = 'hidden';
      startBtn.textContent = 'START';
    }
};
const changeH1 = e => {
  if(e.target.tagName === 'A'){
    const btn = e.target;
    if (btn.textContent ==='13 Multiples' ){
      h1.textContent = '13 Times Table';
      showH1();
      toggle();
    } else if (btn.textContent === '14 Multiples' ){
      h1.textContent = '14 Times Table';
      showH1();
      toggle();
    } if (btn.textContent === '15 Multiples' ){
      h1.textContent = '15 Times Table';
      showH1();
      toggle();
    }else if (btn.textContent ==='16 Multiples' ){
      h1.textContent = '16 Times Table';
      showH1();
      toggle();
    }else if (btn.textContent ==='17 Multiples' ){
      h1.textContent ='17 Times Table';
      showH1();
      toggle();
    }else if (btn.textContent ==='18 Multiples' ){
      h1.textContent ='18 Times Table';
      showH1();
      toggle();
    }else if (btn.textContent ==='19 Multiples' ){
      h1.textContent = '19 Times Table';
      showH1();
      toggle();
    }else if (btn.textContent ==='20 Multiples' ){
      h1.textContent = '20 Times Table';
      showH1();
      toggle();
    }
  }
};

const table = [thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty];
const random = e => {
  for(i = 0; i < table.length; i++){
    const randomNum = Math.floor(Math.random() * i) + 1;
    question.textContent = table[randomNum].question;
    answer.textContent = table[randomNum].answer;
  }
};
const randomArray = array => {
  for(i = 0; i < array.length; i++){
    const randomNum = Math.floor(Math.random() * i) + 1;
    question.textContent = array[randomNum].question;
    answer.textContent = array[randomNum].answer;
  }
};
const getArray = e =>{
  if (h1.textContent ==='13 Times Table' ){
    randomArray(table[0]);
  } else if (h1.textContent ==='14 Times Table' ){
    randomArray(table[1]);
  } if (h1.textContent ==='15 Times Table' ){
    randomArray(table[2]);
  }else if (h1.textContent ==='16 Times Table' ){
    randomArray(table[3]);
  }else if (h1.textContent ==='17 Times Table' ){
    randomArray(table[4]);
  }else if (h1.textContent ==='18 Times Table' ){
    randomArray(table[5]);
  }else if (h1.textContent ==='19 Times Table' ){
    randomArray(table[6]);
  }else if (h1.textContent ==='20 Times Table' ){
    randomArray(table[7]);
  }
};

const showAnswer = e => {
  answer.style.visibility = 'visible';
};

function toggle(){
  menu.classList.toggle('change');
  if (overlay.style.left != '70%'){
    overlay.style.left = '70%'
  } else {
    overlay.style.left = '100%';
  }
}

button.addEventListener('click', e => {
  if(startBtn.textContent === ''){
    toggle();
  } else if(e.target.tagName === 'BUTTON'){
  const button = e.target;
  if(button.textContent === 'START'){
    getArray();
    question.style.visibility = 'visible';
    button.textContent = 'SHOW';
    console.log(button);
  } else if(button.textContent === 'SHOW'){
    showAnswer();
    button.textContent = 'NEXT';

  }
  else if(button.textContent === 'NEXT') {
    button.textContent = 'SHOW';
    if(answer.style.visibility = 'visible'){
        answer.style.visibility = 'hidden'
        getArray();
    }
  }
}
});


menu.addEventListener('click', toggle);
links.addEventListener('click',changeH1);
