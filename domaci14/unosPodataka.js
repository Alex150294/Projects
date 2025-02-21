document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    document.getElementById('message').textContent = `Podaci su poslati: ${firstName} ${lastName}, ${phoneNumber}`;

    // Clear the form fields
    document.getElementById('userForm').reset();
});
