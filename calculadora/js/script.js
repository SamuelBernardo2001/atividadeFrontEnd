function calcular() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operacao = document.getElementById("operacao").value;
  const resultadoDiv = document.getElementById("resultado");

  let resultado;

    function soma (num1, num2){
        return num1+num2
    }

    function subtracao (num1, num2){
        return num1-num2
    }

    function multiplicacao (num1, num2){
        return num1*num2
    }

    function divisao (num1, num2){
         if(num2 == 0){
            console.log("Erro: divisão por zero")
        }
        return resultado = num1 / num2
    }

  

  switch (operacao) {
    case "soma":
      resultado = soma(num1,num2)
      break;
    case "subtracao":
      resultado = subtracao(num1,num2)
      break;
    case "multiplicacao":
      resultado = multiplicacao(num1,num2)
      break;
    case "divisao":
      resultado = divisao(num1,num2)
      break;
    case "potência":
      resultado = Math.pow(num1, num2);
      break;
    case "raiz":
      resultado = num1 >= 0 ? Math.sqrt(num1) : "Erro: raiz de número negativo";
      break;
    default:
      resultado = "Operação inválida";
  }

  resultadoDiv.textContent = `Resultado: ${resultado}`;
}
