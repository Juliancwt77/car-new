var Car = function (color, convertible) {
  this.color = color
  this.speed = 0
  this.convertible = convertible
  this.decelerate = function (speedDown) {
    this.speed -= speedDown
  }
  this.stop = function () {
    this.speed = 0
  }
}

module.exports = Car
