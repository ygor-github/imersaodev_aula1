let content = document.querySelector('.content');
let coinName;
let coinValue;
let coinAmount;

function conversor() {
  content.innerHTML = '<p>Para a gente começar, precisa dar um nome para a moeda.</p><label for="coinName">Insira o nome da sua moeda: </label><input type="text" name="coinName" min="2" id="coinName" placeholder="Insira o nome da moeda"><button onclick="pickValue()">Seguinte</button>';
}

function pickValue() {
  coinName = document.getElementById('coinName').value;

  if (coinName.length > 1) {
    content.innerHTML = `<p>Agora a gente vai dar um valor.</p><label for="coinValue">Insira o valor em R$ por cada ${coinName}:</label><input type="number" name="coinValue" id="coinValue" placeholder="Insira o valor em reais da moeda"><button onclick="pickAmount()">Seguinte</button>`;
  } else {
    alert("Você deve inserir pelo menos duas letras para dar um nome ou apelido para a moeda.");
  }
}

function pickAmount() {
  coinValue = document.getElementById('coinValue').value;

  content.innerHTML = `<label for="coinAmount">Insira a quantidade de ${coinName} que você tem:</label><input type="number" name="coinAmount" id="coinAmount" placeholder="Insira a quantidade"><button onclick="result_convert()">Ver resultado</button>`;
}

function result_convert() {
  coinAmount = document.getElementById('coinAmount').value;
  let result = coinValue * coinAmount;
  content.innerHTML = `<h3>Resultado</h3><p>Os ${coinAmount} ${coinName} têm um valor de R$ ${result.toFixed(2)}.</p><button onclick="location.reload()">Reiniciar</button>`;
}
