const questions = [
    {
        "question": "Qual é a capital do Brasil?",
        "options": ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
        "answer": "Brasília"
    },
    {
        "question": "Qual é o maior planeta do sistema solar?",
        "options": ["Terra", "Marte", "Júpiter", "Saturno"],
        "answer": "Júpiter"
    },
    {
        "question": "Quem escreveu 'Dom Casmurro'?",
        "options": ["Machado de Assis", "José de Alencar", "Jorge Amado", "Guimarães Rosa"],
        "answer": "Machado de Assis"
    },
    {
        "question": "Qual é a moeda oficial dos Estados Unidos?",
        "options": ["Euro", "Dólar", "Yen", "Libra"],
        "answer": "Dólar"
    },
    {
        "question": "Quem pintou a Mona Lisa?",
        "options": ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        "answer": "Leonardo da Vinci"
    },
    {
        "question": "Qual é o país mais populoso do mundo?",
        "options": ["Índia", "China", "Estados Unidos", "Brasil"],
        "answer": "China"
    },
    {
        "question": "Qual é o elemento químico com o símbolo 'O'?",
        "options": ["Ouro", "Oxigênio", "Ósmio", "Oganessônio"],
        "answer": "Oxigênio"
    },
    {
        "question": "Qual é o maior oceano do planeta?",
        "options": ["Atlântico", "Pacífico", "Índico", "Ártico"],
        "answer": "Pacífico"
    },
    {
        "question": "Qual é o nome do atual presidente dos Estados Unidos (2024)?",
        "options": ["Donald Trump", "Joe Biden", "Barack Obama", "George W. Bush"],
        "answer": "Joe Biden"
    },
    {
        "question": "Qual é o livro mais vendido de todos os tempos?",
        "options": ["A Bíblia", "Harry Potter e a Pedra Filosofal", "O Senhor dos Anéis", "O Pequeno Príncipe"],
        "answer": "A Bíblia"
    },
    {
        "question": "Quem foi o primeiro homem a pisar na Lua?",
        "options": ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
        "answer": "Neil Armstrong"
    },
    {
        "question": "Qual é a capital da França?",
        "options": ["Paris", "Londres", "Berlim", "Madri"],
        "answer": "Paris"
    },
    {
        "question": "Qual é a língua oficial do Brasil?",
        "options": ["Espanhol", "Português", "Francês", "Inglês"],
        "answer": "Português"
    },
    {
        "question": "Qual é o maior deserto do mundo?",
        "options": ["Saara", "Gobi", "Antártico", "Kalahari"],
        "answer": "Antártico"
    },
    {
        "question": "Quem descobriu a penicilina?",
        "options": ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Robert Koch"],
        "answer": "Alexander Fleming"
    },
    {
        "question": "Qual é o animal terrestre mais rápido do mundo?",
        "options": ["Leão", "Elefante", "Guepardo", "Cavalo"],
        "answer": "Guepardo"
    },
    {
        "question": "Qual é o maior continente em área?",
        "options": ["Ásia", "África", "América do Norte", "Europa"],
        "answer": "Ásia"
    },
    {
        "question": "Qual é a principal fonte de energia renovável?",
        "options": ["Carvão", "Solar", "Nuclear", "Gás Natural"],
        "answer": "Solar"
    },
    {
        "question": "Qual é a capital da Itália?",
        "options": ["Roma", "Milão", "Veneza", "Florença"],
        "answer": "Roma"
    },
    {
        "question": "Quem é o autor de '1984'?",
        "options": ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
        "answer": "George Orwell"
    },
    {
        "question": "Qual é o maior lago de água doce do mundo?",
        "options": ["Lago Baikal", "Lago Superior", "Lago Vitória", "Lago Ontário"],
        "answer": "Lago Baikal"
    },
    {
        "question": "Qual é a fórmula química da água?",
        "options": ["H2O", "CO2", "NaCl", "O2"],
        "answer": "H2O"
    },
    {
        "question": "Quem pintou o teto da Capela Sistina?",
        "options": ["Michelangelo", "Raphael", "Leonardo da Vinci", "Caravaggio"],
        "answer": "Michelangelo"
    },
    {
        "question": "Qual é a capital da Austrália?",
        "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        "answer": "Canberra"
    },
    {
        "question": "Quem escreveu 'O Hobbit'?",
        "options": ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "George R.R. Martin"],
        "answer": "J.R.R. Tolkien"
    },
    {
        "question": "Qual é a moeda oficial do Japão?",
        "options": ["Yuan", "Won", "Dólar", "Iene"],
        "answer": "Iene"
    },
    {
        "question": "Qual é o maior órgão do corpo humano?",
        "options": ["Coração", "Fígado", "Pele", "Pulmão"],
        "answer": "Pele"
    },
    {
        "question": "Qual é o planeta conhecido como o 'Planeta Vermelho'?",
        "options": ["Marte", "Vênus", "Mercúrio", "Júpiter"],
        "answer": "Marte"
    },
    {
        "question": "Quem foi o primeiro presidente dos Estados Unidos?",
        "options": ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        "answer": "George Washington"
    },
    {
        "question": "Qual é o país conhecido como a Terra do Sol Nascente?",
        "options": ["Japão", "China", "Coreia do Sul", "Tailândia"],
        "answer": "Japão"
    },
    {
        "question": "Qual é a montanha mais alta do mundo?",
        "options": ["Monte Kilimanjaro", "Monte Everest", "Monte McKinley", "Monte Fuji"],
        "answer": "Monte Everest"
    },
    {
        "question": "Qual é a principal função dos ribossomos?",
        "options": ["Síntese de proteínas", "Produção de energia", "Transporte de substâncias", "Divisão celular"],
        "answer": "Síntese de proteínas"
    },
    {
        "question": "Quem foi o autor de 'A Origem das Espécies'?",
        "options": ["Charles Darwin", "Jean-Baptiste Lamarck", "Gregor Mendel", "Francis Crick"],
        "answer": "Charles Darwin"
    },
    {
        "question": "Qual é o símbolo químico do ouro?",
        "options": ["Au", "Ag", "Pb", "Fe"],
        "answer": "Au"
    },
    {
        "question": "Qual é o rio mais longo do mundo?",
        "options": ["Nilo", "Amazônia", "Yangtze", "Mississipi"],
        "answer": "Nilo"
    },
    {
        "question": "Quem escreveu 'Orgulho e Preconceito'?",
        "options": ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Mary Shelley"],
        "answer": "Jane Austen"
    },
    {
        "question": "Qual é a principal língua falada na Espanha?",
        "options": ["Espanhol", "Catalão", "Galego", "Basco"],
        "answer": "Espanhol"
    },
    {
        "question": "Qual é o maior mamífero do planeta?",
        "options": ["Elefante", "Girafa", "Baleia Azul", "Rinoceronte"],
        "answer": "Baleia Azul"
    },
    {
        "question": "Quem inventou a lâmpada elétrica?",
        "options": ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Michael Faraday"],
        "answer": "Thomas Edison"
    },
    {
        "question": "Qual é o país conhecido como a Terra do Futebol?",
        "options": ["Argentina", "Brasil", "Inglaterra", "Alemanha"],
        "answer": "Brasil"
    },
    {
        "question": "Quem é o deus grego do trovão?",
        "options": ["Zeus", "Poseidon", "Hades", "Apolo"],
        "answer": "Zeus"
    },
    {
        "question": "Qual é o metal mais leve conhecido?",
        "options": ["Lítio", "Boro", "Alumínio", "Hidrogênio"],
        "answer": "Lítio"
    },
    {
        "question": "Qual é a primeira invenção de Gutenberg?",
        "options": ["Imprensa", "Roda", "Telefone", "Computador"],
        "answer": "Imprensa"
    },
    {
        "question": "Qual é a capital da Argentina?",
        "options": ["Buenos Aires", "São Paulo", "Montevidéu", "Santiago"],
        "answer": "Buenos Aires"
    },
    {
        "question": "Quem foi o líder da Revolução Francesa?",
        "options": ["Napoleão Bonaparte", "Maximilien Robespierre", "Louis XVI", "Georges Danton"],
        "answer": "Maximilien Robespierre"
    },
    {
        "question": "Qual é o elemento químico com o símbolo 'Na'?",
        "options": ["Níquel", "Sódio", "Nitrogênio", "Neônio"],
        "answer": "Sódio"
    },
    {
        "question": "Qual é a capital da Noruega?",
        "options": ["Oslo", "Estocolmo", "Helsinque", "Copenhague"],
        "answer": "Oslo"
    },
    {
        "question": "Quem escreveu 'O Grande Gatsby'?",
        "options": ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
        "answer": "F. Scott Fitzgerald"
    },
    {
        "question": "Qual é a capital do Canadá?",
        "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        "answer": "Ottawa"
    },
    {
        "question": "Qual é o menor país do mundo?",
        "options": ["Mônaco", "San Marino", "Vaticano", "Liechtenstein"],
        "answer": "Vaticano"
    },
    {
        "question": "Qual é a maior cadeia montanhosa do mundo?",
        "options": ["Andes", "Himalaia", "Rochosas", "Alpes"],
        "answer": "Himalaia"
    },
    {
        "question": "Qual é o principal ingrediente do guacamole?",
        "options": ["Tomate", "Cebola", "Abacate", "Pimentão"],
        "answer": "Abacate"
    },
    {
        "question": "Quem foi o autor de 'O Sol é para Todos'?",
        "options": ["Harper Lee", "J.D. Salinger", "Mark Twain", "Ernest Hemingway"],
        "answer": "Harper Lee"
    },
    {
        "question": "Qual é o oceano que banha a costa leste dos Estados Unidos?",
        "options": ["Oceano Pacífico", "Oceano Atlântico", "Oceano Índico", "Oceano Ártico"],
        "answer": "Oceano Atlântico"
    },
    {
        "question": "Quem escreveu 'Cem Anos de Solidão'?",
        "options": ["Gabriel García Márquez", "Jorge Luis Borges", "Mario Vargas Llosa", "Pablo Neruda"],
        "answer": "Gabriel García Márquez"
    },
    {
        "question": "Qual é a capital do Egito?",
        "options": ["Cairo", "Londres", "Damasco", "Tunis"],
        "answer": "Cairo"
    },
    {
        "question": "Quem é conhecido como o pai da psicanálise?",
        "options": ["Carl Jung", "Sigmund Freud", "Wilfred Bion", "Melanie Klein"],
        "answer": "Sigmund Freud"
    },
    {
        "question": "Qual é o maior animal terrestre?",
        "options": ["Elefante", "Girafa", "Hipopótamo", "Rinoceronte"],
        "answer": "Elefante"
    },
    {
        "question": "Qual é a capital da Alemanha?",
        "options": ["Berlim", "Munique", "Frankfurt", "Hamburgo"],
        "answer": "Berlim"
    },
    {
        "question": "Qual é o menor planeta do sistema solar?",
        "options": ["Mercúrio", "Marte", "Vênus", "Plutão"],
        "answer": "Mercúrio"
    },
    {
        "question": "Qual é o principal componente da atmosfera da Terra?",
        "options": ["Oxigênio", "Nitrogênio", "Dióxido de Carbono", "Hélio"],
        "answer": "Nitrogênio"
    }
];

const correctsound = document.getElementById('correct-sound')
const incorrectsound = document.getElementById('incorrect-sound')

let currentQuestionIndex = 0;
let score = 0;

function showModal() {
    const modal = document.getElementById('modal');
    const questionElement = document.getElementById('modal-question');
    const optionsElement = document.getElementById('modal-options');
    const nextButton = document.getElementById('next-question');
    const feedbackElement = document.getElementById('feedback');

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const label = document.createElement('label');
        label.classList.add('option');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsElement.appendChild(label);
    });

    feedbackElement.textContent = ''; // Limpa o feedback anterior
    feedbackElement.classList.remove('correct', 'incorrect');
    modal.style.display = 'block';

    nextButton.onclick = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                feedbackElement.textContent = 'Resposta correta!';
                feedbackElement.classList.add('correct');
                score++;
                correctsound.play();
            } else {
                feedbackElement.textContent = 'Resposta incorreta. A resposta correta é: ' + question.answer;
                feedbackElement.classList.add('incorrect');
                incorrectsound.play();
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(showModal, 2000); // Exibe a próxima pergunta após 2 segundos
            } else {
                document.getElementById('result').textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
                document.getElementById('result').classList.add(score === questions.length ? 'correct' : 'incorrect');
                modal.style.display = 'none';
                document.getElementById('start').style.display = 'block';
            }
        }
    };
}

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('start').style.display = 'none';
    showModal();
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};