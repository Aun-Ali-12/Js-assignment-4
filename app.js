const myForm = document.querySelector('my-form')
const firstNum = document.querySelector('num-1')
const secNum = document.querySelector('num-2')
const resultpara = document.querySelector('result')

myForm.addEventListener("submit",(event) =>{
    event.preventDefault();
    console.log('Form is submitted')

    const num1 = Number(firstNum.value)
    const num2 = Number(secNum.value)
    
    const sum = num1 + num2
    console.log(sum);
    
    resultpara.innerText = sum

})