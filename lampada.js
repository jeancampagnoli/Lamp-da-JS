const turnOn = document.getElementById ( 'turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ( 'lamp') ; 

function lampOn ()  {
    lamp.src = './img/ligada.jpg';
} 



turnOn.addventlistener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampoff );