const loading = () => {
  const button = document.querySelector('button');
button.innerHTML = '<img src="./img/loading.png" class="loading" />';
}

const funcSubmit = (event) => {
  event.preventDefault();
  loading();

  const name = document.querySelector('input[name=name]').value;
  const email = document.querySelector('input[name=email]').value;


  fetch('https://api.sheetmonkey.io/form/q1WcQzWoNrG7TrkiSZU75D', {

    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  });
}

document.querySelector('form').addEventListener('submit', funcSubmit);

