var allItemsArray = [];
var selectedArray =[]; 
document.addEventListener("DOMContentLoaded", function(){
  selectRow();
  var rows = document.getElementsByClassName("rows")[0].rows;
  for(var i=0;i<rows.length;i++) {
    allItemsArray.push(rows[i].textContent);                  
  }
  console.log(allItemsArray);
});

function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function clearField() {
    document.getElementById("data").value = "";
    var rows =document.getElementsByClassName("rows")[0].rows;
    for(var i=0;i<rows.length;i++){
      rows[i].classList.remove("changeColor");                  
    }
    selectedArray = [];
    document.getElementById("clear").classList.add('clear');
    document.getElementById("clear").classList.remove('clear1');
}

window.onclick = function(event) {
  if (!event.target.matches('.drop')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  document.getElementById("myDropdown").addEventListener('click',function(event){
    event.stopPropagation();
  });
}

function selectRow() {
    var table = document.getElementById('myDropdown');
    var cells = table.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
        
        var cell = cells[i];
        
        cell.onclick = function () {
            var dataArray = document.getElementById("data").value;
            var arraySize = dataArray.length;
            var rowId = this.parentNode;
            rowId.classList.toggle("changeColor");

            if (dataArray) {
                  document.getElementById("clear").classList.add('clear1');
                  document.getElementById("clear").classList.remove('clear');
                  var dataArray = dataArray.split(", "); 
                  if (selectedArray.includes(this.innerHTML)){
                    const index = selectedArray.indexOf(this.innerHTML);
                    if (index > -1) {
                      selectedArray.splice(index, 1);        
                    }
                    var size = selectedArray.length
                    if (size > 3) {
                      n = size - 3 ;
                      dataArray= [];
                      dataArray = selectedArray.slice(0,3);
                      var string =  " and " + n + " more" ;
                      dataArray.push(string);
                      

                      dataArray = dataArray.join(", ");
                      document.getElementById("data").value = dataArray;

                      
                    }else{
                      dataArray = selectedArray;
                      dataArray = dataArray.join(", ");
                      document.getElementById("data").value = dataArray;

                    }
                   
                    if (!document.getElementById("data").value){
                      document.getElementById("clear").classList.remove('clear1');
                      document.getElementById("clear").classList.add('clear');
                    }
                  }else{
                        selectedArray.push(this.innerHTML);
                        arraySize = selectedArray.length ;

                        if (arraySize > 3) {
                          dataArray = selectedArray.slice(0,3);

                          n = arraySize - 3 ;
                          var string =  "and " + n + " more" ;
                          // console.log("customArray" + selectedArray);

                          dataArray.push(string);
                          dataArray = dataArray.join(", ");
                          // console.log(selectedArray);

                          document.getElementById("data").value = dataArray;
                        }else{
                          dataArray = selectedArray;
                          dataArray = dataArray.join(", ");

                          document.getElementById("data").value = dataArray;

                        }
                  
                }
            }else{
               selectedArray.push(this.innerHTML);
              // dataArray.push(this.innerHTML);
              document.getElementById("data").value = this.innerHTML;
              document.getElementById("clear").classList.add('clear1');
              document.getElementById("clear").classList.remove('clear');
            }
        }
    }
    console.log(selectedArray);
}