function insert(character){
  display.value +=character
  document.getElementById('AC/C').innerHTML = 'C';
}

function cleanall(){
  display.value = null
}

function del(){
  display.value = display.value.slice(0, -1)
  document.getElementById('AC/C').innerHTML = 'AC';
}

function result(){
    display.value = eval(display.value)
    document.getElementById('AC/C').innerHTML = 'AC';
}

const time = n => {

  return ('0' + n).slice(-2);

}

const interval = setInterval(() => {
  const now = new Date();

  const timeanddate = time(now.getHours()) + ':' + time(now.getMinutes()) + ':' + time(now.getSeconds()) + ' - ' + time(now.getUTCDate() - 1) + '/' + time((now.getMonth() + 1)) + '/' + now.getFullYear();

  document.getElementById('time').innerHTML = timeanddate;
}, 1000);