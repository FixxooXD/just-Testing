const button = document.getElementById('btn');
const input = document.getElementById('input');
// import 'dotenv' from'dotenv'
const config= require('./secret.json')

console.log(config.API_KEY)
button.addEventListener('click',()=>{
   input.value  = `${input.value}${config.API_KEY}`;
   console.log(input.value)
})