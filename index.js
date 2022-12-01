

/**
Made in Stanford Karel (IDE)
Made for 9x9
exercise to place beepers in a chess position, and then remove the beepers.
**/
function main(){
    beeper();
    run();
    run();
    run();
    run();
    leftUp();
    run();
    run();
    run();
    leftUp();
    run();
    run();
    run();
    leftUp();
    run();
    run();
    leftUp();
    run();
    run();
    leftUp();
    run();
    leftUp();
    run();
    leftUp();
    leftUp();
    pickbeeper();
    pickrun();
    pickleftUp();
    pickleftUp();
    pickrun();
    pickleftUp();
    pickrun();
    pickleftUp();
    pickrun();
    pickrun();
    pickleftUp();
    pickrun();
    pickrun();
    pickleftUp();
    pickrun();
    pickrun();
    pickrun();
    pickleftUp();
    pickrun();
    pickrun();
    pickrun();
    pickleftUp();
    pickrun();
    pickrun();
    pickrun();
 }
 
 function pickbeeper(){
  pickBeeper();  
 }
 
 function beeper(){
  putBeeper();   
 }
 
 
 function run(){
  turnLeft();
  move();
  turnRight();
  move();
  putBeeper();
  turnRight();
  move();
  turnLeft();
  move();
  putBeeper();
 }
 
 function leftUp(){
    turnLeft();
    move();
    move();
    putBeeper();
 }
 
 function pickrun(){
  turnLeft();
  move();
  turnRight();
  move();
  pickBeeper();
  turnRight();
  move();
  turnLeft();
  move();
  pickBeeper();
 }
 
 function pickleftUp(){
    turnLeft();
    move();
    move();
    pickBeeper();
 }
 