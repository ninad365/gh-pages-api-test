// script.js
document.addEventListener("DOMContentLoaded", () => {
    const textContainer = document.getElementById("text-container");

    // Replace 'API_URL' with the actual API URL
    fetch('https://kdx5hogmqbw7jsq2je6v4fuegi0ktsyo.lambda-url.ap-south-1.on.aws/')
        .then(response => response.text())
        .then(data => {
            textContainer.textContent = data;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
