function calculateXPosition(_pos, _radius) {
    if (_pos < _radius) {
        return _pos + _radius;
    } else if (_pos > width - _radius) {
        return width - _pos;
    } else return _pos
}

function calculateYPosition(_pos, _radius) {
    if (_pos < _radius) {
        return _pos + _radius;
    } else if (_pos > height - _radius) {
        return height - _pos;
    } else return _pos
}

var Ball = function(_xPos, _yPos, _radius, _speedX, _speedY, _colour) {
    var xValue =
    this.xPos = calculateXPosition(_xPos, _radius);
    this.yPos = calculateYPosition(_yPos, _radius);
    this.radius = _radius;
    this.speedX = floor(_speedX) === 0 ? _speedX + 1 : _speedX;
    this.speedY = floor(_speedY) === 0 ? _speedY + 1 : _speedY;
    this.colour = _colour;

    this.drawBall = function() {
        fill(this.colour);
        ellipse(this.xPos + this.radius, this.yPos + this.radius, this.radius * 2, this.radius * 2);
    }

    this.update = function() {
        this.drawBall();
        if (this.xPos < 0 || this.xPos > width - this.radius) {
            this.speedX *= -1;
        }

        if (this.yPos < 0 || this.yPos > height - this.radius) {
            this.speedY *= -1;
        }

        this.xPos += this.speedX;
        this.yPos += this.speedY;
    }

    this.checkPressed = function(_xPos, _yPos) {
        if (dist(this.xPos, this.yPos, _xPos, _yPos) < this.radius * 2) {
            this.xPos
        }
    }

}