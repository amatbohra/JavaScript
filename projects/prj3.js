//digital clock

const clock=document.getElementById('clock')
setInterval(function(){
  let date= new Date()
  clock.innerHTML=date.toLocaleTimeString()
},1000)

//setInterval method is used to give run an event continuously or for defined time interval 