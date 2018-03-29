var ballContainer = [];

function randomXYGenerator(_limit) {
    return random(20, _limit);
}

function randomRadiusGenerator() {
    return random(10, 30);
}

function randomSpeedGenerator() {
    var speed = random(-1, 1);
    return floor(speed) == 0 ? 1 : speed;
}

function randomColorGenerator() {
    return color(random(0, 255), random(0, 255), random(0, 255));
}

function drawBalls() {
    for (var index = 0; index < ballContainer.length; index++) {
        ballContainer[index].update();
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    for (var index = 0; index < 7; index++) {
        ballContainer.push(
            new Ball(
                randomXYGenerator(width),
                randomXYGenerator(height),
                randomRadiusGenerator(),
                randomSpeedGenerator(),
                randomSpeedGenerator(),
                randomColorGenerator()
            )
        );
    }
}

var count = 0;

function draw() {
    background(123)
    for(var index = 0; index < ballContainer.length - 1; index++) {
        for(var inner = index + 1; inner < ballContainer.length; inner++) {
            ballContainer[index].checkCollision(ballContainer[inner])
        }
    }
    drawBalls();
    
}