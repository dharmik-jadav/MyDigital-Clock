let Mydes = document.getElementById('for-area');

function updateSeconds() {
  let Hour = new Date().getHours();
  let Minutes = new Date().getMinutes();
  let Seconds = new Date().getSeconds();
   Mydes.innerHTML = (`${Hour} : ${Minutes}  :  ${Seconds}`);
}
setInterval(updateSeconds, 1000);


