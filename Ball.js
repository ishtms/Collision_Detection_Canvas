var Ball = function(_xPos, _yPos, _radius, _speed, _colour) {

    this.xPos = _xPos;
    this.yPos = _yPos;
    this.radius = _radius;
    this.speed = _speed;
    this.colour = _colour;

    this.drawBall = function() {
        fill(this.colour);
        ellipse(this.xPos, this.yPos, this.radius * 2, this.radius * 2);
    }

    this.update = function() {
        this.drawBall();
        console.log('update')
        if (this.xPos < this.radius || this.yPos > width - this.radius) {
            this.speed *= -1;
        }

        this.xPos += this.speed;
    }

    this.checkDetection = function(_ball) {
        
    }

}