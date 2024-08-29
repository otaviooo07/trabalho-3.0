const perguntas = [
    {
        enunciado: "Como se chama o leão de madagascar?",
        alternativas: [
            { texto: "Alex", pontuacao: 3 },
            { texto: "João", pontuacao: 0 }
        ]
    },
    {
        enunciado: "Quem é o grande vilão do filme Vingadores Guerra Infinita",
        alternativas: [
            { texto: "Thanos", pontuacao: 2 },
            { texto: "Doctor Strange", pontuacao: 0 }
        ]
    },
    {
        enunciado: "Thanos conseguiu o que ele queria no final do filme?",
        alternativas: [
            { texto: "Sim", pontuacao: 2 },
            { texto: "Não", pontuacao: 1 }
        ]
    },
    {
        enunciado: "No filme, Homem de ferro acaba morrendo ?",
        alternativas: [
            { texto: "Sim mas na parte 2", pontuacao: 2 },
            { texto: "Sim mais na parte 1", pontuacao: 0 }
        ]
    },
    {
        enunciado: "Gamora morre na parte 2 ?",
        alternativas: [
            { texto: "Sim thanos a mata", pontuacao: 5 },
            { texto: "Não, ela sobrevive", pontuacao: 0 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta


