var rotation = 0;

function spin(){
    rotation+=10;
    document.getElementById('spinner').style.transform = `rotate(${rotation}deg)`;
}