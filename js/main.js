let player = null;

document.addEventListener('click',(e)=>{
    let target = e.target;
    let target_function = target.getAttribute('function')

    if(target_function=="close-absolute"){
        close_absolute(target);
    }

    if(target_function=="setUserName"){
        setUserName(target);
    }
    
})

function close_absolute(target){
    let div = target.parentElement.parentElement.parentElement;
    div.style.display="none";
}

function setUserName(target){
    let name = document.getElementById('userName');
    player = name.value;
    close_absolute(target.parentElement)
    console.log(player);
}