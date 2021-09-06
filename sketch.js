var mathsButton;
var mathsInput;

var englishButton;
var englishInput;

var frenchButton;
var frenchInput;

var physicsButton;
var physicsInput;

var chemistryButton;
var chemistryInput;

var ictButton;
var ictInput;

var bsButton;
var bsInput;

var bioButton;
var bioInput;

var accountsButton;
var accountsInput;

var ecoButton;
var ecoInput;

var hindiButton;
var hindiInput;

var title;
var purpose;
var instructions1;
var instructions2;
var instructions3;
var instructions4;
var instructions5;
var instructions6;

function setup() {
  createCanvas(10000,1000);  

  // Write in format: Year(2020)/PaperCode(0500)_month(m,s or w)+(20)_(ms or qp)_papernum(12) example 2020/0580_m20_qp_12
  //m is for feb-march
  //s is for may-june
  //w is for oct-nov
  //for single digit numbers add a "0" befor the number 
  
  mathsButton = createButton("Check Maths");
  mathsButton.position(10,300);

  mathsInput = createInput("");
  mathsInput.position(10,265);

  mathsButton.mousePressed(maths);

  englishButton = createButton("Check English");
  englishButton.position(210,300);

  englishInput = createInput("");
  englishInput.position(210,265);

  englishButton.mousePressed(english);

  frenchButton = createButton("Check French");
  frenchButton.position(410,300);

  frenchInput = createInput("");
  frenchInput.position(410,265);

  frenchButton.mousePressed(french);

  physicsButton = createButton("Check Physics");
  physicsButton.position(610,300);

  physicsInput = createInput("");
  physicsInput.position(610,265);

  physicsButton.mousePressed(physics);

  chemistryButton = createButton("Check Chemsitry");
  chemistryButton.position(810,300);

  chemistryInput = createInput("");
  chemistryInput.position(810,265);

  chemistryButton.mousePressed(chemistry);

  ictButton = createButton("Check ICT");
  ictButton.position(1010,300);

  ictInput = createInput("");
  ictInput.position(1010,265);

  ictButton.mousePressed(ict);

  bsButton = createButton("Check Business Studies");
  bsButton.position(10,400);

  bsInput = createInput("");
  bsInput.position(10,365);

  bsButton.mousePressed(bs);

  bioButton = createButton("Check Biology");
  bioButton.position(210,400);

  bioInput = createInput("");
  bioInput.position(210,365);

  bioButton.mousePressed(bio);
   
  accountsButton = createButton("Check Accounting");
  accountsButton.position(410,400);

  accountsInput = createInput("");
  accountsInput.position(410,365);

  accountsButton.mousePressed(accounts);

  ecoButton = createButton("Check Economics");
  ecoButton.position(610,400);

  ecoInput = createInput("");
  ecoInput.position(610,365);

  ecoButton.mousePressed(eco);

  hindiButton = createButton("Check Hindi");
  hindiButton.position(810,400);

  hindiInput = createInput("");
  hindiInput.position(810,365);

  hindiButton.mousePressed(hindi);

  title = createElement('h1');
  purpose = createElement('h2');
  instructions1 = createElement('h3');
  instructions2 = createElement('h3');
  instructions3 = createElement('h3');
  instructions4 = createElement('h3');
  instructions5 = createElement('h3');
  instructions6 = createElement('h3');
}

function draw() {
  background("cyan");

  title.html("Paper Finder");
  title.position(displayWidth/2 - 50, 0);

  purpose.html("Paper Finder helps you find the IGCSE Past Papers");
  purpose.position(displayWidth/2 - 220, 50);

  instructions1.html("Write in format: Year(2020)/PaperCode(0500)_month(m,s or w)+(20)_(ms or qp)_papernum(12) example 2020/0580_m20_qp_12");
  instructions1.position(displayWidth/2 - 520, 100);
  instructions1.style('color',"red");
  
  instructions2.html("m is for feb-march");
  instructions2.position(displayWidth/2 - 520, 130);
  instructions2.style('color',"green");

  instructions3.html("s is for may-june ");
  instructions3.position(displayWidth/2 - 520, 160);
  instructions3.style('color',"yellow");

  instructions4.html("w is for oct-nov for single digit numbers add a 0 before the number ");
  instructions4.position(displayWidth/2 - 520, 190);
  instructions4.style('color',"purple");

  instructions5.html("Add a 0 before the number ");
  instructions5.position(displayWidth/2 - 520, 220);
  instructions5.style('color',"orange");

  instructions6.html("Paper Codes: Maths-0580");
  instructions6.position(displayWidth/2 - 520, 500);
  instructions6.style('color',"purple");
}

function maths(){
  console.log("maths");
  var paperNum = mathsInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Mathematics%20(0580)/" + paperNum + ".pdf")
}

function english(){
  console.log("english");
  var paperNum = englishInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/English%20-%20First%20Language%20(0500)/"+ paperNum + ".pdf")
}

function french(){
  console.log("french");
  var paperNum = frenchInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/French%20-%20Foreign%20Language%20(0520)/"+ paperNum +".pdf")
}

function physics(){
  console.log("physics");
  var paperNum = physicsInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Physics%20(0625)/"+ paperNum +".pdf")
}

function chemistry(){
  console.log("chemistry");
  var paperNum = chemistryInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Chemistry%20(0620)/"+ paperNum +".pdf")
}

function ict(){
  console.log("ict");
  var paperNum = ictInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Information%20and%20Communication%20Technology%20(0417)/"+ paperNum +".pdf")
}

function bs(){
  console.log("bs");
  var paperNum = bsInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Business%20Studies%20(0450)/"+ paperNum +".pdf")
}

function bio(){
  console.log("bio");
  var paperNum = bioInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Biology%20(0610)/"+ paperNum +".pdf")
}

function accounts(){
  console.log("accounts");
  var paperNum = accountsInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Accounting%20(0452)/"+ paperNum +".pdf")
}

function eco(){
  console.log("eco");
  var paperNum = ecoInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Economics%20(0455)/"+ paperNum +".pdf")
}

function hindi(){
  console.log("hindi");
  var paperNum = hindiInput.value();
  window.open("https://papers.gceguide.com/Cambridge%20IGCSE/Hindi%20as%20a%20Second%20Language%20(0549)/"+ paperNum +".pdf")
}