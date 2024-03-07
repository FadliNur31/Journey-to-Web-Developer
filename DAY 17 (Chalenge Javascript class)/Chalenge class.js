class School{
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name(){
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents
    }
    set NumberOfStudents(num){
      if (typeof(num) === 'number'){
        this._numberOfStudents = num;
      }else{
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
    }
    static pickSubstituteTeacher(a){
      let randomNumber = Math.floor(a.length * Math.random());
      return a[randomNumber];
    }
  }
  class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, 'Primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  class HighSchool extends School{
    constructor(name, numberOfStudents, sportTeams){
      super(name, 'High', numberOfStudents);
      this._sportTeams = sportTeams;
    }
    get sportTeams(){
      return this._sportTeams;
    }
  }
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  let arr = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
  console.log(School.pickSubstituteTeacher(arr));
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportTeams)
  