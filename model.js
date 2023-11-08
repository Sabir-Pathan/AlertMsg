const btnOpenAlert = document.querySelector('.btn_open_Alert')
const btnCloseAlert = document.querySelector(".btn_close")


const AlertMsg = document.querySelector('.over_lay')

btnOpenAlert.addEventListener('click',()=>{
    AlertMsg.classList.add('alert_Msg_close');

})
btnCloseAlert.addEventListener('click',()=>{
    AlertMsg.classList.remove('alert_Msg_close');

})