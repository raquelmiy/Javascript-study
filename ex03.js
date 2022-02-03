//exercicio soma e subtração
var num1 = prompt('Digite um número: ');
		var operacao = prompt('Digite a operacao do calculo: ');
		var num2 = prompt('Digite um número: ');

		function calculo(num1,num2,operacao) {
			num1 = parseFloat(num1);
			num2 = parseFloat(num2);

			var resultado = 0;

			if(operacao == 'soma') {
				resultado = num1 + num2;
			}
			if(operacao == 'subtracao') {
				resultado = num1 - num2;
			}

			return resultado;
		}

		document.write('O resultado é: ' + calculo(num1,num2,operacao));
	


