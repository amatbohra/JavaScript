const body= document.querySelector('body');
const buttons=document.querySelectorAll(".button");

buttons.forEach(function (button){
    button.addEventListener('click', function(e){
        if (e.target.id ==='pink') {
            body.style.backgroundColor= e.target.id
        }
        if (e.target.id ==='purple') {
            body.style.backgroundColor= e.target.id
        }
        if (e.target.id ==='yellow') {
            body.style.backgroundColor= e.target.id
        }
        if (e.target.id ==='blue') {
            body.style.backgroundColor= e.target.id
        }
    })
})

//writing the same logic using switch 
switch(e.target.id){
    case 'grey':
    body.style.backgroundColor= e.target.id
    break;

    case 'white':
    body.style.backgroundColor= e.target.id
    break;

    case 'blue':
    body.style.backgroundColor= e.target.id
    break;

    case 'yellow':
    body.style.backgroundColor= e.target.id
    break;
  }