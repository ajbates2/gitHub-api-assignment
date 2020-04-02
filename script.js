const userRepo = "https://api.github.com/users/"

function getResults(username) {
    fetch(`${userRepo}\/${username}\/repos`, {mode: 'no-cors'})
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => $('.error-message').html(error.message))
}

function watchForm() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        let username = $('#js-search-term').val();
        getResults(username);
    })
}

$(watchForm());