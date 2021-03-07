let isValid = true;

function verify(isValid) {
    if(isValid) return true
    else return false
}

console.log(verify(isValid));

let resultado = isValid ? true : false

console.log(verify(resultado));

let result = isValid ? null : undefined

console.log(verify(result));