// defining method

const circle = {
    radius : 2,
    /* area: function() {
      return Math.pow(Math.PI,2)
    }
    */
    area () {
      return Math.PI * (Math.pow(this.radius,2))
    },
    equals(compareCircle){
        return this.radius === compareCircle.radius
    }
  }
  
  console.log(circle)
  console.log(circle.radius)
  console.log(circle.area())
  console.log(circle.equals({radius : 2}))
  console.log(circle.equals({radius : 3}))