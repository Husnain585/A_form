const selectedRow = null

function onFormSubmit(){
  if(selectedRow == null)
    insertNewRecord(FormData);
  else
  
  resetForm();
}
 

function readFormData(){
  const FormData = {};
  FormData["firstName"] = document.getElementById("firstName").value;
  FormData["lastName"] = document.getElementById("lastName").value;
  FormData["cnic"] = document.getElementById("cnic").value;
  return FormData;
}


function insertNewRecord(data) {
  const table = document.getElementsByClassName("userId").getelementsByTagName(`tbody`)[0];
  const newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.InnerHTML = data.firstName;
  cell2 = newRow.insertCell(1);
  cell2.InnerHTML = data.lastName;
  cell3 = newRow.insertCell(2);
  cell3.InnerHTML = data.cnic;
  cell4 = newRow.insertCell(4);
  cell4.InnerHTML =  `<a onClick = "onEdit(this)" > Edit </a>
                                 <a>Delete</a>`;     
}


function resetForm(){
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("cnic").value = "";
  selectedRow = null;
}


function onEdit(td){
  document.getElementById("firstName").value = selectedRow.cells[0].InnerHTML;
  document.getElementById("lastName").value = selectedRow.cells[1].InnerHTML;
  document.getElementById("cnic").value = selectedRow.cells[2].InnerHTML;
}


function updateRecord(FormData){
  selectedRow.cells[0].InnerHTML = FormData.firstName;
  selectedRow.cells[1].InnerHTML = FormData.lastName;
  selectedRow.cells[2].InnerHTML = FormData.cnic;
}


function onDelete(td){
  if(confirm(`Are you sure to delete the row?`)){
    row = parentElement.parentElement;
  document.getelementsById("firstName").deleteRow(row.rowIndex);
  resetForm;
  }
  
}




