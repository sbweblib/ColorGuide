'use strict';
{
    const hex = document.getElementById('hex');
    const red = document.getElementById('red');
    const redprog = document.getElementById('red-prog');
    const spanred=document.getElementById('red-v');
    const spanredp = document.getElementById('red-p');
    const bodyset = document.querySelector('body');
    var redp;
    
    var color={
        r:0,
        g:0,
        b:0
    };
    var n;

    function toHex(col){
        return '#'+col.match(/\d+/g).map(function(a){return ("0"+parseInt(a).toString(16)).slice(-2)}).join("");
    }

    function change(v,type){
        if(type=="red"){
            bodyset.style.backgroundColor='rgb('+v+','+color['g']+','+color['b']+')';
        }else if(type=="blue"){
            bodyset.style.backgroundColor='rgb('+color['r']+','+color['g']+','+v+')';
        }else{
            bodyset.style.backgroundColor='rgb('+color['r']+','+v+','+color['b']+')';
        }

      hex.textContent=toHex('rgb('+color['r']+','+color['g']+','+color['b']+')');
    }

    red.addEventListener('input',e=>{
       console.log(red.value);
       redp=red.value / 255 * 100;
       spanred.textContent = red.value;
       spanredp.textContent=':'+redp +'%';
       redprog.value = red.value;
            color['r']=red.value;
          change(red.value,"red");
    });

    const green = document.getElementById('green');
    const greenprog = document.getElementById('green-prog');
    const spangreen=document.getElementById('green-v');
    const spangreenp = document.getElementById('green-p');
    var greenp;

    green.addEventListener('input',e=>{
       console.log(green.value);
       greenp=green.value / 255 * 100;
       
       spangreen.textContent = green.value;
       spangreenp.textContent=':'+greenp +'%';
       greenprog.value = green.value;
        color['g']=green.value;
       change(green.value,"green");
    });

    const blue = document.getElementById('blue');
    const blueprog = document.getElementById('blue-prog');
    const spanblue=document.getElementById('blue-v');
    const spanbluep = document.getElementById('blue-p');
    var bluep;
    blue.addEventListener('input',e=>{
       console.log(blue.value);
       bluep=blue.value / 255 * 100;
       
       spanblue.textContent = blue.value;
       spanbluep.textContent=':'+bluep +'%';
       blueprog.value = blue.value;
       color['b']=blue.value;
       change(blue.value,"blue");
    });
}