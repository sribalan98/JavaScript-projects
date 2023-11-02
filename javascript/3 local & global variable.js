//* LOCAL SCOPE AND GLOBAL SCOPE
//* example 1 
//* In this example, we will declare variables in the global scope so that they can be accessed anywhere in the program.

let petName = 'Rossi' // globle scope

function dogName() {
     dogFood = 'DryFood' // global scope
    console.log(`${petName} Love this ${dogFood}`)
}
// dogName()
// console.log(`A bro give this ${dogFood} to ${petName}`)

//* example 2
//* In this example, we will declare variables in the local scope and try to access them at different scopes.

readyfunction()
makefunction()

let realPetName; // global scope
function readyfunction() {
    let realPetName = 'myle'// local scope
    console.log(realPetName)
}
function makefunction() {
    let realPetName = 'roosi'// local scope
    console.log(realPetName)
}
console.log(realPetName) //global scope log