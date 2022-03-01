// ESCREVA UMA FUNÇÃO QUE RECEBA UM NUMERO E RETORNE O SEGUINTE:
		// NUMERO É DIVISIVEL POR 3 = FIZZ
		// NUMERO É DIVISIVEL POR 5 = BUZZ
		// NUMERO É DIVISIVEL POR 3 E 5 = RETORNA O PRÓPRIO NUMERO
		// CHECAR SE O NÚMERO É REALMENTE UM NÚMERO = RETORNA O PRÓPRIO NUMERO
		// USE A FUNÇÃO COM NÚMERO DE 0 A 100

		function fizzBuzz(x) {
		 if (typeof x !== 'number') return x;
		 if (x % 3 === 0 && x % 5 === 0) return 'fizzBuzz';
		 if (x % 3 === 0) return 'Fizz';
		 if (x % 5 === 0) return 'Buzz';
		 return x;
		}

		for (let i = 0; i < 100; i++) {
			console.log(i, fizzBuzz(i));
		}