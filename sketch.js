//I spent over 5 hours figuring out just how to build a snowman and get the background to change. I tried adding snow but then it just covered
//the snowman and background color. I have multiple versions of this and I could not get some functions to work. Basically the gist of this project
//is to allow users to create a simple holiday greeting that changes messages and background colors on click, and the snowman itself could be altered.
//The reference library does not have functions for changing colored backgrounds on click so I had to figure it our myself, which in itself took a long while.
//I do wish it had more going on, orignially I wanted snow to fall then clear and on mouseclick build a snowman but that did not succeed.
let bgColor;//defining the background color
//change colors on mouse click
function setup () {
  createCanvas(600, 520);
	noStroke();//takes away the lines on the snowman figure to give a clean graphic look
  bgcolor = color(200);
}

function mousePressed () { //on mouse click the below task will happen
  bgcolor = color(random(0, 170), random(0, 170), random(0, 170)); //random colors will change on click and users can change the color preferences by changing the values 
}

function draw () { //this function is drawing a snowman figure
  background(bgcolor);
	fill  (255, 255, 255);//makes the body white with circles stacked ontop of each other
  ellipse(300, 400, 240, 240);
  ellipse(300, 240, 150, 150);
  ellipse(300, 120, 100, 100);
  fill  (22, 22, 22);//for the eyes which are black
  ellipse(300, 110, 15, 15);
  ellipse(330, 110, 15, 15);
 	fill(255, 188, 20);//for the nose which is orange
  triangle(310, 127, 310, 135, 370, 123);
	fill  (22, 22, 22);//for the mouth which is black
  ellipse(310, 140, 5, 5);
  ellipse(320, 140, 5, 5);
	ellipse(300, 140, 5, 5);
  ellipse(330, 140, 5, 5);
	textSize(32);//you can change the text size
	fill(55);//can also change the color of the text
  text('Make Yourself a Holiday Greeting Card', 30, 500);//can change the spacing as well as what text you want in order to make it interative and user friendly
}
