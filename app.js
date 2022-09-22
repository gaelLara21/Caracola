const ask = () => {
    //Leer Pregunta
    const questionInput = document.getElementById("question");
    const answerInput = document.getElementById('answer');
    if (questionInput.value !== ""){
        //Recibir respuesta al preguntar a bola mágina
        let answer = caracolamagica();
        //Imprimir Resultado
        answerInput.value = answer;
    } else {
        answerInput.value = "Pregunta algo!!";
    }
};

//Función Bola Mágica
const caracolamagica = () => {
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
    switch (randomNumber){
    case 0:
        eightBall = 'SI';
        break;
    case 1:
        eightBall = 'NO';
        break;
    case 2:
        eightBall = 'PROBABLEMENTE';
        break;
    case 3:
        eightBall = 'PRUEBA PREGUNTANDO DE NUEVO';
        break;
    case 4:
        eightBall = 'SI';
        break;
    case 5:
        eightBall = 'NO';
        break;
    case 6:
        eightBall = 'PROBABLEMENTE';
        break;
    case 7:
        eightBall = 'PRUEBA PREGUNTANDO DE NUEVO';
        break;
    }
    return eightBall;
};