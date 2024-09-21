// Function to display an alert when the user clicks on a project
function showAlert(projectName) {
    alert("You clicked on " + projectName + "!");
}

// Add event listeners to project items
document.querySelectorAll('#projects li').forEach(item => {
    item.addEventListener('click', function() {
        showAlert(this.textContent); // Show alert with project name
    });
});