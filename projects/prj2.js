const form = document.querySelector("form")

form.addEventListener('submit',function(e){
    e.preventDefault();//this is used so that values do not go to server 
    const height= parseInt(document.querySelector('#height').value)
    const weight= parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')
    const bodytype = document.querySelector('.bodytype')


    if (height==='' || height===0 || isNaN(height)) {
        result.innerHTML="please give a valid height"
    }else if (weight==='' || weight===0 || isNaN(weight)) {
        result.innerHTML="please give a valid weight"
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML= `<span>${bmi}</span>`
        if(bmi<18.6){
            bodytype.innerHTML="Under Weight"
        }else if(bmi>=18.6 && bmi<24.9){
            bodytype.innerHTML="Normal Range"
        }else{
            bodytype.innerHTML="Over Weight"
        }
        
    }
})