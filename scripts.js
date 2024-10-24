document.getElementById('student-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('student-name').value;
    const email = document.getElementById('student-email').value;
    const role = document.getElementById('student-role').value;
    const attendance = document.getElementById('student-attendance').value;
    const achievements = document.getElementById('student-achievements').value;
    const grade = document.getElementById('student-grade').value;

    // Create a new row in the student list
    const studentList = document.getElementById('student-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${role}</td>
        <td>${attendance}</td>
        <td>${achievements}</td>
        <td>${grade}</td>
        <td><button onclick="deleteStudent(this)">Delete</button></td>
    `;
    studentList.appendChild(row);

    // Clear the form
    document.getElementById('student-form').reset();
});

function deleteStudent(button) {
    // Remove the student row from the table
    const row = button.parentElement.parentElement;
    row.parentElement.removeChild(row);
}
