const userRepo = "https://api.github.com/users"

function getResults(username) {
    fetch(`${userRepo}\/${username}\/repos`, {mode: 'no-cors'})
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => console.log(error))
}

function displayResults(responseJson) {
    $('#results-list').empty();
    for(let i = 0; i < responseJson.length; i++) {
        $('#results-list').append(
        `<li><a href="${responseJson[i].html_url}">${responseJson[i].name}</a>`)
    };
    $('#results').removeClass('hidden');
}

function watchForm() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        let username = $('#js-search-term').val();
        getResults(username);
    })
}

$(watchForm());