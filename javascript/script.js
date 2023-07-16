var posting = document.getElementById('posting');
var id = document.getElementById('id');
var ratio = document.getElementById('ratio');
var comment = document.getElementById('comment');
var message = document.getElementById('message');
var date = document.getElementById('date');
var name = document.getElementById('name');
var pfp = document.getElementById('pfp');
var i = 0;

posting.addEventListener("submit", function (e) {
    e.preventDefault();
})


fetch('https://api.jsonbin.io/v3/qs/64b3e0a1b89b1e2299bfc354')
    .then(response => response.json())
    .then(data => {
        for (i = 1; i <= data.record.comments.length; i++) {
            comment.id = 'comment' + i;
            console.log(comment.id);
        }
    })
    .catch(error => {
        console.log('Error fetching JSON:', error);
    });