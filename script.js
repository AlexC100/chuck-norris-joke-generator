// UI Variables
const num = document.querySelector('#joke-number');
const btn = document.querySelector('#btn');
const jokeList = document.querySelector('#joke-list');

// Display Jokes
function getJokes() {
  axios.get(`http://api.icndb.com/jokes/random/${num.value}`)
  .then(res => {
    return res.data;
  })
  .catch(function(err) {
    console.error(err);
  })
  .then(function(data) {

    let output = '';

    data.value.forEach(function(joke) {
      output += `
        <ul>
          <li>Joke: ${joke.joke}</li>
        </ul>
      `;
    });

    jokeList.innerHTML = output;
  });
}

function checkInput() {
  jokeList.innerHTML = `<p>Adauga numarul de glume!</p>`;
}

function clearInput() {
  num.value = '';
}

btn.addEventListener('click', function() {
  if(num.value === '') {
    checkInput();
  } else {
    getJokes();
    clearInput();
  }
});
