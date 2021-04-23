var jokecontent = document.getElementById("jokecontent");
fetch("https://official-joke-api.appspot.com/random_joke")
  .then((response) => {
    return response.json();
  })
  .then((joke) => {
    jokecontent.innerHTML = joke.setup + "<br>" + joke.punchline;
  });
