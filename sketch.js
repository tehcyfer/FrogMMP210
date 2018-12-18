var serial;
var portName = "COM14";
var sensorValue;
var frog_1;
var frog_2;
var frog_3;
var frog_4;
var frog_5;
var croak;

function preload(){
    croak = loadSound('frog in rain froest.wav');
}
function setup() {
    createCanvas(640, 360);
    croak.loop();
    //croak.setVolume(0.5);
    //croak=loadSound('frog in rain froest.wav');
    frog_1 = loadImage("frog_1.0.jpg");
    frog_2 = loadImage("frog_2.0.jpg");
    frog_3 = loadImage("frog_3.0.jpg");
    frog_4 = loadImage("frog_4.0.jpg");
    frog_5 = loadImage("frog_5.0.jpg");
    //slider = creatSlider(0, 1, 0.5, 0.01);
    //croak.play();
    //croak.setVolume(0.5);
    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);
    
    serial.open(portName);
}

function serverConnected() {
    console.log("connected");
}

function portOpen() {
    console.log("port open");
}

function portClose() {
    console.log("port close");
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
    

}

function draw() {console.log(sensorValue);
    background(255);
    //croak.setVolume(slider.value());             
    if (sensorValue < 10){
    image(frog_1, 0, 0,width, height);
    }
    else if(sensorValue >10 && sensorValue < 300){
       image(frog_2, 0, 0,width , height ); 
    }
    else if(sensorValue >10 && sensorValue < 600){
        image(frog_3, 0, 0,width, height);
    }
    else if(sensorValue >10 && sensorValue < 900){
        image(frog_4, 0, 0,width, height);
    }
    else{    image(frog_5, 0, 0,width, height);}
                 
}




   

