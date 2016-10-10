
var Car = function (color, convertible) {
  this.color = color
  this.speed = 0
  this.convertible = convertible
  this.accelerate = function(addspeed) {

      this.speed += addspeed

    }
   this.setColor = function(addColor) {

      this.color = addColor
   }
 }
module.exports = Car
