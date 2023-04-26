function insert(number){
  display.value +=number
}

function cleanall(){
  display.value = null
}

function del(){
  display.value = display.value.slice(0, -1)
}

function calculator(){
    display.value = eval(display.value)
}

const time = n => {

  return ('0' + n).slice(-2);

}

const interval = setInterval(() => {
  const now = new Date();

  const timeanddate = time(now.getHours()) + ':' + time(now.getMinutes()) + ':' + time(now.getSeconds()) + ' - ' + time(now.getUTCDate() - 1) + '/' + time((now.getMonth() + 1)) + '/' + now.getFullYear();

  document.getElementById('time').innerHTML = timeanddate;
}, 1000);