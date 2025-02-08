function loop(){
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
}

function main(){
    loop();
    loop();
    loop();
    loop();
    loop();
    loop();
}