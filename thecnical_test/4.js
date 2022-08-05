
function result(day){
    console.log(`1. if date now = ${day}`)
    const arr = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']


    const value = arr.findIndex(elem => elem === day);

    const data = value + 4

    console.log('2. then result = ' + arr[data])
}

result("sunday")