console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on("click", sendJoke);
}


// show all jokes on page load
// user can add jokes using input form 
//  whoseJoke:
//  jokeQuestion:
//  punchLine:
// after joke is added, re-display on DOM 

function sendJoke(){
    let author = $('#whoseJokeIn').val();
    let joke = $('#questionIn').val();
    let punchLine = $('#punchlineIn').val();
    $.ajax({
        method: 'POST',
        url: '/joke',
        data: {
            whoseJoke: author,
            jokeQuestion: joke,
            punchLine: punchLine
        }
    })
    .then(() => {
        // get jokes
    })
    .catch((error) => {
        alert('Error!', error);
    })
}