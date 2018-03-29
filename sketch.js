var ballContainer = [];

function randomXYGenerator(_limit) {
    return floor(random(0, _limit));
}

function randomRadiusGenerator() {
    return random(20, 80);
}

function randomSpeedGenerator() {
    return random(-10, 10);
}

function randomColorGenerator() {
    return color(random(0, 255), random(0, 255), random(0, 255));
}

function drawBalls() {
    console.log(ballContainer.length)
    for(var index = 0; index < ballContainer.length; index++) {
        ballContainer[index].update();
    }
}

function setup() {
    createCanvas(800);
    for (var index = 0; index < 20; index++) {
        ballContainer.push(
            new Ball(
                randomXYGenerator(width),
                randomXYGenerator(height),
                randomRadiusGenerator(),
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

