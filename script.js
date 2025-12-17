// PASSO 1: Capturar todos os elementos do DOM
const valorContaInput = document.getElementById("valor-conta");
const qualidadeServicoSelect = document.getElementById("qualidade-servico");
const numPessoasInput = document.getElementById("num-pessoas");
const calcularBtn = document.getElementById("calcular-btn");
const resultadoDiv = document.getElementById("resultado");
const gorjetaTotalSpan = document.getElementById("gorjeta-total");
const totalContaSpan = document.getElementById("total-conta");
const valorPessoaSpan = document.getElementById("valor-pessoa");

// PASSO 2: Função para formatar valores em Real
function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

// PASSO 3: Função para validar os inputs
function validarInputs() {
  const valorConta = parseFloat(valorContaInput.value);
  const qualidadeServico = qualidadeServicoSelect.value;
  const numPessoas = parseInt(numPessoasInput.value);

  // Verificar se valor da conta é válido
  if (!valorConta || valorConta <= 0) {
    alert("Por favor, insira um valor de conta válido!");
    return false;
  }

  // Verificar se qualidade foi selecionada
  if (!qualidadeServico) {
    alert("Por favor, selecione a qualidade do serviço!");
    return false;
  }

  // Verificar se número de pessoas é válido
  if (!numPessoas || numPessoas < 1) {
    alert("Por favor, insira um número válido de pessoas!");
    return false;
  }

  return true;
}

// PASSO 4: Função principal para calcular
function calcularGorjeta() {
  // Validar antes de calcular
  if (!validarInputs()) {
    return;
  }

  // Pegar os valores dos inputs
  const valorConta = parseFloat(valorContaInput.value);
  const porcentagemGorjeta = parseFloat(qualidadeServicoSelect.value);
  const numPessoas = parseInt(numPessoasInput.value);

  // Fazer os cálculos
  const gorjetaTotal = valorConta * porcentagemGorjeta;
  const totalComGorjeta = valorConta + gorjetaTotal;
  const valorPorPessoa = totalComGorjeta / numPessoas;

  // Exibir os resultados
  gorjetaTotalSpan.textContent = formatarMoeda(gorjetaTotal);
  totalContaSpan.textContent = formatarMoeda(totalComGorjeta);
  valorPessoaSpan.textContent = formatarMoeda(valorPorPessoa);

  // Mostrar a div de resultado (remover classe escondido)
  resultadoDiv.classList.remove("escondido");
}

// PASSO 5: Adicionar evento de clique no botão
calcularBtn.addEventListener("click", calcularGorjeta);

// PASSO 6: EXTRA - Calcular ao pressionar Enter em qualquer input
valorContaInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    calcularGorjeta();
  }
});

numPessoasInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    calcularGorjeta();
  }
});

qualidadeServicoSelect.addEventListener("change", (e) => {
  calcularGorjeta();
});
// FIM DO CÓDIGO
