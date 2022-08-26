
document.getElementById('Alert').addEventListener('click',function () {
    let message = document.getElementById('AlertInput').value;
    if(message == '' || message === null) {
        alert("¡coloca algo en el input!")
    }else{
        alert(message)
    }
})