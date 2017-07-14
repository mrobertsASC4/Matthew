function Car(color , weight) {
    this.color = color;
    this.weight = weight; 
}

var jeep = new Car("Black" , 1);

function Player(team , position , number) {
    this.team = team;
    this.position = position;
    this.number = number;
}

var jamesHarden = new Player("Rockets", "Point Guard", 13);

function Person(ethnicity , race ,nationality) {
    this.ethnicity = ethnicity;
    this.race = race;
    this.nationality = nationality
}

var Jordan = new Person("Asian" , "African-American" , "American");

var computerChair = {"mechanics" : "wheels" , "seatColor" : "black"}
console.log(computerChair.mechanics);
console.log(computerChair.seatColor);


