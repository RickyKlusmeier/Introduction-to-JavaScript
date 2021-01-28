function hungryDog(age, weight){
    if (age => 1 && weight <= 5){
        return (weight * .05);
    } else if (age => 1 && weight <= 10){
        return (weight * .04);
    } else if (age => 1 && weight <= 15){
        return (weight * .03);
    } else if (age => 1 && weight > 15){
        return (weight * .02);
    } else if (age < 1 && age <= 8/12){
        return (weight * .04);
    } else if (age => 7/12 && age <= 5/12){
        return (weight * .05);
    } else if (age => 4/12 && age <= 2/12){
        return (weight * .10);
    }
}



function dogFeeding(weight, age) {
    if (age >= 1 && weight <= 5) {
      return weight * 0.05
    } else if (age >= 1 && weight >= 6 && weight <= 10) {
      return weight * 0.04
    } else if (age >= 1 && weight >= 11 && weight <= 15) {
      return weight * 0.03
    } else if (age >= 1 && weight > 15) {
      return weight * 0.02
    } else if (age < 1 && age >= .2 && age <= .4) {
      return weight * 0.10
    } else if (age < 1 && age > .4 && age <= .7) {
      return weight * 0.05
    } else if (age < 1 && age > .7 && age <= .12) {
      return weight * 0.04
    }
  }