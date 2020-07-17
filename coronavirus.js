var conteudo = document.getElementById("conteudo")
var final = document.getElementById("final")
var finalll = document.getElementsByClassName("finalll")
var resultado_final = document.getElementById("resultado_final")
let currentQuestionIndex = 0;
var contagem = 0;


const cuestionary = [
        {
            "question": 'Você esteve recentemente com uma pessoa covid-positiva ?',
            "answers": ["Sim"]

        },

        {
            "question": 'Você sai sem mascara ?',
            "answers": ["Sim"]
        },

        {
            "question": 'Esteve em algum lugar com muitas pessoas juntas ?',
            "answers": ["Sim"]
        },
        {
            "question": 'Você tem sentido febre ?',
            "answers": ["Sim"]
        },
        {
            "question": 'Você está com tosse seca ?',
            "answers": ["Sim"]
        },
        {
            "question": 'Você está com cansaço ?',
            "answers": ["Sim"]
        },
        {
            "question": 'Você está com tensão e dores musculares ?',
            "answers": ["Sim"]
        },
        {
            "question": 'Você tem dores de garganta ?',
            "answers": ["Sim"]
        },

        {
            "question": 'Está com diarreia ?',
            "answers": ["Sim"]
        },
        {
            "question": 'Tem conjuntivite ?',
            "answers": ["Sim"]
        },
        {
            "question": 'Você tem dor dor de cabeça ?',
            "answers": ["Sim"]
        },
        {
            "question": 'perda de paladar ou olfato ?',
            "answers": ["Sim"]
        },
        {
            "question": 'irritações na pele ou descoloração dos dedos das mãos ou dos pés?',
            "answers": ["Sim"]
        },
        {
            "question": 'Sintomas graves! dificuldade respiratória ou falta de ar ?',
            "answers": ["Sim"]
        },
        {
            "question": 'Sintomas graves! pressão ou dor no peito ?',
            "answers": ["Sim"]
        },
        {
            "question": 'Sintomas graves! perda da fala ou capacidade motora ?',
            "answers": ["Sim"]
        },

        {
            "question": 'Aperte sim para saber o resultado!',
            "answers": ["Sim"]
        },
];


function comecar(){
    conteudo.style.display = "block";
}

const printHTMLQuestion = (i) => {

    currentQuestionIndex++

    const q = cuestionary[i];
    let a = q.answers;
    
    const htmlAnswers = a.map( currentA => `<p><button id="btn1" class="btn btn-primary" onclick="resultado()">?</button><span>${currentA}</span></p>`)
    let htmlQuestionCode = `<p id="p">${q.question}</p><div>${htmlAnswers}</div>`
    document.getElementById("question").innerHTML = htmlQuestionCode;

}


function resultado() {
    contagem++
    console.log(contagem)

    var bt1 = document.getElementById("btn1")
    bt1.style.backgroundColor="black";

    if(currentQuestionIndex >= 16){
        conteudo.style.display = "none";
        final.style.display = "block";
        final.style.marginLeft = "46.5%";
   
        

    }
}


function fim(){

   

   if(contagem == 0){
    resultado_final.innerHTML = "Pela suas respostas você não aparenta ter nenhum sinal de covid-19"
   }else if(contagem == 2){
    resultado_final.innerHTML = "Pelas suas respostas é muito dificil que você tenha covd-19"
   }else if(contagem == 3){
    resultado_final.innerHTML = "Pelas suas respostas é muito dificil que você tenha covd-19 mas fique atento se surgir mais sintomas!"
   }else if(contagem == 4){
    resultado_final.innerHTML = "Pelas suas respostas é muito dificil que você tenha covd-19 mas fique atento se surgir mais sintomas!"
   }else if(contagem == 5){
    resultado_final.innerHTML = "Pelas suas respostas é muito dificil que você tenha covd-19 mas fique atento se surgir mais sintomas!"
   }else if(contagem == 6){
    resultado_final.innerHTML = "Provávelmente você não Covid-19 mas se surgir mais sintomas, como a dificuldade de respirar procure o medico urgentemente!"
   }else if(contagem == 7){
    resultado_final.innerHTML = "Provávelmente você não Covid-19 mas se surgir mais sintomas, como a dificuldade de respirar procure o medico urgentemente!"
   }else if(contagem == 8){
    resultado_final.innerHTML = "Provávelmente você não Covid-19 mas se surgir mais sintomas, como a dificuldade de respirar procure o medico urgentemente!"
   }else if(contagem == 9){
    resultado_final.innerHTML = "Provávelmente você não Covid-19 mas se surgir mais sintomas, como a dificuldade de respirar procure o medico urgentemente!"
   }else if(contagem == 10){
    resultado_final.innerHTML = "De acordo com suas respostas você pode estar com covid-19, fique atento para os sintomas como a dificuldade respiratório, se senti-la procure um médico!"
   }else if(contagem == 11){
    resultado_final.innerHTML = "De acordo com suas respostas você pode estar com covid-19, fique atento para os sintomas como a dificuldade respiratório, se senti-la procure um médico!"
   }else if(contagem == 12){
    resultado_final.innerHTML = "De acordo com suas respostas você pode estar com covid-19, fique atento para os sintomas como a dificuldade respiratório, se senti-la procure um médico!"
   }else if(contagem == 13){
    resultado_final.innerHTML = "De acordo com suas respostas você pode estar com covid-19, fique atento para os sintomas como a dificuldade respiratório, se senti-la procure um médico!"
   }else if(contagem == 14){
    resultado_final.innerHTML = "Muito provavelmente você está infectado com coronavirus, se sentir sintomas graves como a dificuldade de respirar procure um médico urgente!"
   }else if(contagem == 15){
    resultado_final.innerHTML = "Muito provavelmente você está infectado com coronavirus, se sentir sintomas graves como a dificuldade de respirar procure um médico urgente!"
   }else if(contagem >= 16){
    resultado_final.innerHTML = "Muito provavelmente você está infectado com coronavirus, se sentir sintomas graves como a dificuldade de respirar procure um médico urgente!"
   }


}


function novo(){

    window.location.reload();
}



const nextQuestion = _ => {

}

printHTMLQuestion(currentQuestionIndex);






