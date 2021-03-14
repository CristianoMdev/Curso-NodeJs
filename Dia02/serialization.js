let pessoa = {
    nome:"Cristiano",
    idade: 33,
    email:'cristianomdev@gmail.com'
};

const myJSON = JSON.stringify(pessoa)

console.log(myJSON)

const objectPlainText = '{"nome":"Cristiano","idade":33,"email":"cristianomdev@gmail.com"}'
const newObjectParse = JSON.parse(objectPlainText)

console.log(newObjectParse)