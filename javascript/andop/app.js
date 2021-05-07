let objDataType = {
  name: "Mariam",
  LastName: "Saddiqa",
  age: "29",
  country: "Pakistan",
  education: {
    school: "NJA",
    collage: "NJC",
    bachelors: "university Sargodha"
  },
  hobbies: {
    activity: ["drawing", "reading", "movies"],
    books: ["comic", "romantic", "fictional"],
    husband: {
      name: "Umair",
      age: "29",
      children: {
        child1: {
          name: "Ayra",
          age: "4"
        },
        child2: {
          name: "Zainab",
          age: "11months"
        },
      },
    },
  },
  printPersonInfo: function () {
      console.log('hello')
      console.log(`My name is ${objDataType.name} ${objDataType.LastName}\nI am ${objDataType.age}\nI am from ${objDataType.country}`)
      console.log(`My school was ${objDataType.education.school}\nMy collage was ${objDataType.education.collage}\nI went to ${objDataType.education.bachelors}`)
      console.log(`I read ${objDataType.hobbies.books} books`);
      console.log(`My partner name is ${objDataType.hobbies.husband.name}\nHe is ${objDataType.hobbies.husband.age}`);
      console.log(`I have two children ${objDataType.hobbies.husband.children.child1.name} and ${objDataType.hobbies.husband.children.child2.name}`);
      console.log(`They are ${objDataType.hobbies.husband.children.child1.age} year and ${objDataType.hobbies.husband.children.child2.age} old. `)
    
  }
}
objDataType.printPersonInfo();


