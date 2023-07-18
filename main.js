let title = document.querySelector(".bord")

let turn = 'x'

let squre = []
function end(num1,num2,num3){
    squre[num1]=='o'? title.innerHTML='Shimaa winner':title.innerHTML='Badr winner'
    document.getElementById(`item${num1}`).style.animation='do 2.5s .5s both infinite';
    document.getElementById(`item${num2}`).style.animation='do 2.5s .5s both infinite';
    document.getElementById(`item${num3}`).style.animation='do 2.5s .5s both infinite';
     setInterval(()=>{  title.innerHTML+="." },1000)
     setTimeout(()=>{location.reload()},4000)
}
function winner(){
for(let i=1;i<10;i++){
    squre[i] = document.getElementById(`item${i}`).innerHTML
}
if(squre[1]==squre[2]&&squre[2]==squre[3]&&squre[1]!=''){
end(1,2,3)
}
else if(squre[4]==squre[5]&&squre[5]==squre[6]&&squre[4]!=''){
    end(4,5,6)
}
else if(squre[7]==squre[8]&&squre[8]==squre[9]&&squre[7]!=''){
    end(7,8,9)
}
else if(squre[1]==squre[4]&&squre[4]==squre[7]&&squre[7]!=''){
    end(1,4,7)
}
else if(squre[2]==squre[5]&&squre[5]==squre[8]&&squre[8]!=''){
    end(2,5,8)
}
else if(squre[3]==squre[6]&&squre[6]==squre[9]&&squre[6]!=''){
    end(3,6,9)
}
else if(squre[1]==squre[5]&&squre[5]==squre[9]&&squre[9]!=''){
    end(1,5,9)
}
else if(squre[3]==squre[5]&&squre[7]==squre[5]&&squre[5]!=''){
    end(3,5,7)
}
}






function game(id){
 let element = document.getElementById(id)
 if(turn==='x'&& element.innerHTML==''){
     element.innerHTML='x'
     turn = 'o'
     title.innerHTML="Turn Shimaa"
 }else if(turn==='o'&& element.innerHTML==''){

    element.innerHTML='o'
    turn = 'x'
    title.innerHTML="Turn Badr"
 }
 winner()
}


