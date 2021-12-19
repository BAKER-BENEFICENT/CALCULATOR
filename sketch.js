var operator, input_1, input_2;
var num_1, num_2;
var greeting_1, greeting_2, greeting_3;
var opr;

function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
 
  input_1 = createInput();
  input_1.position(5,60);
  greeting_1 = createElement('h5',"Enter number 1");
  greeting_1.position(5,20);

  input_2 = createInput();
  input_2.position(205,60);
  greeting_2 = createElement('h5',"Enter number 2");
  greeting_2.position(205,20);

  operator = createInput();
  operator.position(100,120);
  greeting_3 = createElement('h5',"Enter operator");
  greeting_3.position(100,80);
}

  function draw() {
  num_1 = input_1.value();
  num_2 = input_2.value();
  opr = operator.value();
  switch(opr){
  case '+': 
  console.log(int(num_1) + int(num_2));
  break;
  
  case '-':
  console.log(int(num_1) - int(num_2));
  break;

  case '*':
  console.log(int(num_1) * int(num_2));
  break;

    case '/':
  console.log(int(num_1) / int(num_2));
  break;
  }
  }

