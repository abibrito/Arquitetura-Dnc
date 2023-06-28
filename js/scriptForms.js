const button = document.querySelector('button');
const loading = () => {
  button.innerHTML = '<img src="./img/loading.png" class="loading" />';
}

const removeLoading = () => {
  button.innerHTML = 'Fale Conosco';
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
  }).then(() => removeLoading());
}

document.querySelector('form').addEventListener('submit', funcSubmit);

