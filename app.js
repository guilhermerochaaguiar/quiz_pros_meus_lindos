const questions = [
{
    question: "Qual é a principal função dos alvéolos pulmonares?",
    options: [
        "Produzir muco",
        "Realizar trocas gasosas",
        "Filtrar impurezas do sangue",
        "Controlar a frequência respiratória"
    ],
    answer: 1
},
{
    question: "Qual estrutura impede que alimentos entrem na traqueia durante a deglutição?",
    options: [
        "Laringe",
        "Faringe",
        "Epiglote",
        "Traqueia"
    ],
    answer: 2
},
{
    question: "Qual câmara cardíaca bombeia sangue para todo o corpo?",
    options: [
        "Átrio direito",
        "Átrio esquerdo",
        "Ventrículo direito",
        "Ventrículo esquerdo"
    ],
    answer: 3
},
{
    question: "Qual vaso transporta sangue do coração para os pulmões?",
    options: [
        "Veia cava",
        "Artéria pulmonar",
        "Aorta",
        "Veia pulmonar"
    ],
    answer: 1
},
{
    question: "Qual órgão é responsável pela maior parte da absorção de nutrientes?",
    options: [
        "Estômago",
        "Fígado",
        "Intestino delgado",
        "Pâncreas"
    ],
    answer: 2
},
{
    question: "Qual é o maior osso do corpo humano?",
    options: [
        "Úmero",
        "Tíbia",
        "Fêmur",
        "Rádio"
    ],
    answer: 2
},
{
    question: "Qual osso forma a testa?",
    options: [
        "Parietal",
        "Temporal",
        "Occipital",
        "Frontal"
    ],
    answer: 3
},
{
    question: "Qual artéria é a principal responsável por irrigar o corpo?",
    options: [
        "Carótida",
        "Pulmonar",
        "Aorta",
        "Coronária"
    ],
    answer: 2
},
{
    question: "Qual estrutura do sistema digestório produz a bile?",
    options: [
        "Pâncreas",
        "Fígado",
        "Estômago",
        "Duodeno"
    ],
    answer: 1
},
{
    question: "Qual é a função principal do pâncreas no sistema digestório?",
    options: [
        "Produzir bile",
        "Absorver nutrientes",
        "Produzir enzimas digestivas",
        "Armazenar glicose"
    ],
    answer: 2
}
,
{
    question: "Qual músculo é o principal responsável pela respiração?",
    options: ["Intercostal", "Diafragma", "Peitoral", "Trapézio"],
    answer: 1
},
{
    question: "Qual pulmão possui três lobos?",
    options: ["Esquerdo", "Direito", "Ambos", "Nenhum"],
    answer: 1
},
{
    question: "Qual estrutura conduz o alimento da boca ao estômago?",
    options: ["Traqueia", "Faringe", "Esôfago", "Laringe"],
    answer: 2
},
{
    question: "Qual órgão produz a maior parte das enzimas digestivas?",
    options: ["Fígado", "Pâncreas", "Estômago", "Intestino Grosso"],
    answer: 1
},
{
    question: "Qual vaso sanguíneo leva sangue ao átrio direito?",
    options: ["Aorta", "Artéria Pulmonar", "Veias Cavas", "Veias Pulmonares"],
    answer: 2
},
{
    question: "Quantas cavidades possui o coração humano?",
    options: ["2", "3", "4", "5"],
    answer: 2
},
{
    question: "Qual artéria irriga o músculo cardíaco?",
    options: ["Carótida", "Coronária", "Femoral", "Pulmonar"],
    answer: 1
},
{
    question: "Qual osso protege o cérebro?",
    options: ["Esterno", "Mandíbula", "Crânio", "Clavícula"],
    answer: 2
},
{
    question: "Qual osso compõe a coxa?",
    options: ["Tíbia", "Fíbula", "Úmero", "Fêmur"],
    answer: 3
},
{
    question: "Qual osso está localizado no braço?",
    options: ["Rádio", "Fêmur", "Úmero", "Tíbia"],
    answer: 2
},
{
    question: "Qual osso forma o calcanhar?",
    options: ["Tálus", "Calcâneo", "Patela", "Escafoide"],
    answer: 1
},
{
    question: "Qual artéria é utilizada para verificar o pulso no punho?",
    options: ["Femoral", "Carótida", "Radial", "Poplítea"],
    answer: 2
},
{
    question: "Qual artéria passa pela região da virilha?",
    options: ["Coronária", "Femoral", "Radial", "Axilar"],
    answer: 1
},
{
    question: "Qual estrutura separa as cavidades torácica e abdominal?",
    options: ["Pleura", "Pericárdio", "Diafragma", "Peritônio"],
    answer: 2
},
{
    question: "Onde ocorre a absorção de água principalmente?",
    options: ["Estômago", "Intestino Delgado", "Intestino Grosso", "Esôfago"],
    answer: 2
},
{
    question: "Qual é a função principal do intestino grosso?",
    options: [
        "Produzir enzimas",
        "Absorver água e formar fezes",
        "Produzir bile",
        "Filtrar sangue"
    ],
    answer: 1
},
{
    question: "Qual lado do coração recebe sangue oxigenado dos pulmões?",
    options: [
        "Direito",
        "Esquerdo",
        "Ambos",
        "Nenhum"
    ],
    answer: 1
},
{
    question: "Qual veia traz sangue dos pulmões para o coração?",
    options: [
        "Veia Cava",
        "Veia Femoral",
        "Veia Pulmonar",
        "Veia Jugular"
    ],
    answer: 2
},
{
    question: "Qual osso é conhecido popularmente como rótula?",
    options: [
        "Patela",
        "Escápula",
        "Clavícula",
        "Fíbula"
    ],
    answer: 0
},
{
    question: "Qual osso conecta o braço ao tronco anteriormente?",
    options: [
        "Escápula",
        "Clavícula",
        "Esterno",
        "Úmero"
    ],
    answer: 1
}
];

let currentQuestion = 0;
let score = 0;

function startQuiz(){
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    loadQuestion();
}

function loadQuestion(){

    const q = questions[currentQuestion];

    document.getElementById("question").textContent =
        `${currentQuestion + 1}. ${q.question}`;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.classList.add("option");
        button.textContent = option;

        button.onclick = () => {

            if(index === q.answer){
                score++;
            }

            currentQuestion++;

            if(currentQuestion < questions.length){
                loadQuestion();
            }
            else{
                showResult();
            }
        };

        optionsDiv.appendChild(button);
    });
}

function showResult(){

    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

    document.getElementById("score").textContent =
        `Você acertou ${score} de ${questions.length} questões.`;
}