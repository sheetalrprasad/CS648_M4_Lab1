// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let newEmpForm = document.getElementById('addForm');
let employeesList = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;
let employeeCount = document.getElementById("empCount");

// ADD EMPLOYEE
newEmpForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newEmpRow = employeesList.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let idCell = newEmpRow.insertCell(0);
    let nameCell = newEmpRow.insertCell(1);
    let extensionCell = newEmpRow.insertCell(2);
    let emailCell = newEmpRow.insertCell(3);
    let departmentCell = newEmpRow.insertCell(4);
    let deleteCell = newEmpRow.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idCell.appendChild(document.createTextNode(id));
    nameCell.appendChild(document.createTextNode(name));
    extensionCell.appendChild(document.createTextNode(extension));
    emailCell.appendChild(document.createTextNode(email));
    departmentCell.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm delete';
    deleteButton.appendChild(document.createTextNode('X'));
    deleteCell.appendChild(deleteButton);


    // RESET THE FORM
    newEmpForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    employeeCount.textContent = count;

});

// DELETE EMPLOYEE
employeesList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('You want to delete this employee?')) {
            let newEmpRow  = e.target.parentNode.parentNode;
            employeesList.deleteRow(newEmpRow .rowIndex);
            count--;
            employeeCount.textContent = count;
        }
    }
});