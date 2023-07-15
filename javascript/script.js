var posting = document.getElementById('posting');
var id = document.getElementById('id');
var ratio = document.getElementById('ratio');

posting.addEventListener("submit", function (e) {
    e.preventDefault();
})


fetch('https://api.jsonbin.io/v3/qs/64b31ac2b89b1e2299bf8227')
    .then(response => response.json())
    .then(data => {
        ratio.innerHTML = data.record.comments.find(comment => comment.id === 1).score;
    })
    .catch(error => {
        console.log('Error fetching JSON:', error);
    });