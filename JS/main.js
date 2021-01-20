var list = document.querySelector('.list');
var sendData = document.querySelector('.send');
var data = JSON.parse(localStorage.getItem('listData')) || [];

sendData.addEventListener('click', addData);
list.addEventListener('click', toggleDone);
updateList(data);

function addData(e) {
e.preventDefault();
var txt = document.querySelector('.text').value;
var temp = {
      content: txt
    };
  data.push(temp);
  updateList(data);
  localStorage.setItem('listData', JSON.stringify(data));
  }
 
function updateList(items) {
  str = '';
  var len = items.length;
  for (var i = 0; len > i; i++) {
    str += '<li><a href="#" data-index=' + i + ' /> Delete </a><span>' +
      items[i].content + '</span></li>';
    }
    list.innerHTML = str;
   
  }

function toggleDone(e) {
  e.preventDefault();
  if(e.target.nodeName !== 'A'){return};
  var index = e.target.dataset.index;
  data.splice(index, 1);
  localStorage.setItem('listData', JSON.stringify(data));
  updateList(data);
  }


