var ballContainer = [];

function randomXYGenerator(_limit) {
    return random(20, _limit);
}

function randomRadiusGenerator() {
    return random(10, 30);
}

function randomSpeedGenerator() {
    var speed = random(-5, 5);
    return floor(speed) == 0 ? 2 : speed;
}

function randomColorGenerator() {
    return color(random(0, 255), random(0, 255), random(0, 255));
}

function drawBalls() {
    for (var index = 0; index < ballContainer.length; index++) {
        ballContainer[index].update();
    }
}

function mouseOver() {
    for (var index = 0; index < ballContainer.length - 1; index++) {
        ballContainer[index].checkPressed(mouseX, mouseY);
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    for (var index = 0; index < 20; index++) {
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

function draw() {
    background(123)
    drawBalls();
}