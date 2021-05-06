let objDataType = {
    
    name: 'Mariam',
    LastName: 'Saddiqa',
    age: '29',
    country:'Pakistan',
education:{
    school: 'NJA',
    collage: 'NJC',
    bachelors: 'university Sargodha'
}
}

let result="My name is " + objDataType.name + objDataType.LastName + ". I am "+objDataType.age+" old."+ "I am from "+objDataType.country
console.log(result);
let result2 = "I went to "+objDataType.education.school+". My college was "+objDataType.education.collage+". I did bachelors from "+objDataType.education.bachelors+"."
console.log(result2);