//ESCREVA UMA FUNÇÃO CHAMADA ePAISAGEM QUE RECEBA DOIS ARGUMENTOS,
// LARGURA E ALTURA DE UMA IMAGEM (NUMBER). RETORNE TRUE SE A 
//IMAGEM ESTIVER NO MODO PAISAGEM.

	const ePaisagem =(largura, altura) => largura >= altura;
	console.log(ePaisagem(400, 400));