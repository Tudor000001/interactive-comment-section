var posting = document.getElementById('posting');

posting.addEventListener("submit", function (e) {
    e.preventDefault();
})


fetch('https://api.jsonbin.io/v3/qs/64b2d6788e4aa6225ebebc66')
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        // Process the JSON data
        console.log(data);
        // You can access the data properties like data.name, data.age, etc.
    })
    .catch(error => {
        console.error('Error:', error);
    });