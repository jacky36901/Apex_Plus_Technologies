var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["ScenarioName"] = document.getElementById("ScenarioName").value;
    formData["ScenarioTime"] = document.getElementById("ScenarioTime").value;
    // formData["qty"] = document.getElementById("qty").value;
    // formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
	cell1.innerHTML = data.ScenarioName;
    cell2 = newRow.insertCell(1);
	cell2.innerHTML = data.ScenarioTime;
    cell3 = newRow.insertCell(2);
	// 	cell3.innerHTML = data.qty;
    // cell4 = newRow.insertCell(3);
	// 	cell4.innerHTML = data.perPrice;
    // cell4 = newRow.insertCell(4);
        cell3.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ScenarioName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("ScenarioTime").value = selectedRow.cells[1].innerHTML;
    // document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    // document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ScenarioName;
    selectedRow.cells[1].innerHTML = formData.ScenarioTime;
    // selectedRow.cells[2].innerHTML = formData.qty;
    // selectedRow.cells[3].innerHTML = formData.perPrice;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("ScenarioName").value = '';
    document.getElementById("ScenarioTime").value = '';
    // document.getElementById("qty").value = '';
    // document.getElementById("perPrice").value = '';
    selectedRow = null;
}