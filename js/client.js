

var data = [
  {
    "clientId":"1",
    "clientName":"María José González",
    "clientDate":"20/01/2019"
  },{
    "clientId":"2",
    "clientName":"Franco Velez",
    "clientDate":"12/05/2019"
  },{
    "clientId":"3",
    "clientName":"Marlene Alejandra Domínguez",
    "clientDate":"15/01/2020"
  },
]



/*function petButtonVaccines(value){
  var btnVaccines = '<button type="button" onclick="window.location.href =\'/index.html?petId=' + value + '\';" class="btn btn-outline-primary btnVaccines">VER  <i class="fas fa-eye eyeBtn"></i> </button>'
  return btnVaccines;
}

function petCalendarButton(value){
  var calendarBtn = '<button type="button" onclick="window.location.href =\'/index.html?petId=' + value + '\';" class="btn btn-outline-primary calendarBtn">VER   <i class="fas fa-eye eyeBtn"></i></button>'
  return calendarBtn;
}*/

function clientThreeBtns(value){
  var updateBtn = '<button type="button" onclick="window.location.href =\'/create-client.html?clientId=' + value + '\';" class="btn btn-outline-blue mr-2"><i class="fas fa-edit"></i></button>'
  var deleteBtn = '<button type="button" onclick="window.location.href =\'/client.html?clientId=' + value + '\';" class="btn btn-outline-red mr-2"><i class="fas fa-trash-alt"></i></button>'
  return updateBtn + deleteBtn;
}


$(document).ready(function() {
  llenarTabla();
});

function llenarTabla() {
  $('#clients').bootstrapTable({data:data})
}
