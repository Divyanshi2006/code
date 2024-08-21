document.getElementById('registration-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    });

    const result = await response.json();
    const messageElement = document.getElementById('message');

    if (response.status === 400) {
        messageElement.textContent = result.message;
    } else if (response.status === 201) {
        messageElement.textContent = result.message;
        messageElement.style.color = 'green';
    }
});
