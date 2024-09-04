async function PesquisarCep() {
  let dados = document.getElementById("numerocep").value.replace("-", "");

  const cep = await fetch(`https://viacep.com.br/ws/${dados}/json/`).then(
    (response) => response.json()
  );
  console.log(cep);

  document.getElementById("logradouro").value = cep.logradouro;
  document.getElementById("complemento").value = cep.complemento;
  document.getElementById("bairro").value = cep.bairro;
  document.getElementById("cidade").value = cep.localidade;
  document.getElementById("estado").value = cep.uf;
  document.getElementById("regiao").value = cep.regiao;
}
