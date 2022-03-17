//OBJECT CREATE
const person = {
    isHuman: false,
    statement: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = 'Shruti'; 
  me.isHuman = true; 
  me.statement();


//OBJECT ENTRIES
const person1 = {
    name: 'shruti',
    city: 'Kolhapur',
    hobby: 'playing batminton'
};
const entries = Object.entries(person1);

console.log(entries);

//OBJECT KEYS
const keys = Object.keys(person1);
console.log(keys);

//OBJECT VALUES
const values = Object.values(person1);
console.log(values);



