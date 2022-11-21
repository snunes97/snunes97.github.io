let scenario_title = document.getElementById("scenario-title");
let scenario_line_1 = document.getElementById("scenario-line-1");
let scenario_line_2 = document.getElementById("scenario-line-2");
let scenario_line_3 = document.getElementById("scenario-line-3");

let scenario_1 = {
    title: "Pizzaria",
    line1: "Uma pizzaria vende três tipos de produtos: pizzas, calzones e salgados variados (rissóis, croquetes, etc...).",
    line2: "As pizzas e calzones podem ser de vários tamanhos e são completamente personalizáveis no que toca a ingredientes.",
    line3: "Pelo contrário, os salgados não são personalizáveis.",
};

let scenario_2 = {
    title: "Sistema de Gestão de uma Escola",
    line1: "Um sistema numa escola tem vários utilizadores. Alguns deles são alunos, outros professores e outros são funcionários auxiliares.",
    line2: "Cada aluno são os únicos que têm um número associado. Cada professor tem uma lista de disciplinas que leciona. Os auxiliares não têm características especiais.",
    line3: "Alguns professores podem ser administradores do sistema, então têm um código de acesso.",
};

let scenario_3 = {
    title: "Loja de Roupa",
    line1: "Uma loja de roupa vende vários artigos de vestuário, incluindo equipamento para desporto, e também aceita encomedas de roupas feitas à medida.",
    line2: "Os artigos são caracterizados principalmente pelo tamanho, cor e material. As roupas para desporto são também identificadas pelo desporto a que estão associadas.",
    line3: "Quando as roupas personalizadas por clientes chegam à loja, são registadas como encomendas e associadas aos dados de um cliente.",
};

let scenario_4 = {
    title: "Biblioteca",
    line1: "Uma biblioteca disponibiliza vários livros que podem ser requisitados por pessoas registadas no sistema.",
    line2: "O sistema também contém as informações dos funcionários da biblioteca.",
    line3: "O sistema associa as requisições à ficha da pessoa que fez a requisição, e também ao funcionário que aprovou a requisição.",
};

let scenario_5 = {
    title: "Plataforma de Partilha de Material para Ensino",
    line1: "Precisamos criar uma plataforma tipo Moodle, onde os formadores podem armazenar ficheiros de texto, vídeo e audio para partilhar com os seus alunos.",
    line2: "Todos os ficheiros são identificados com um nome e categoria do conteúdo.",
    line3: "Os ficheiros de vídeo e audio devem apresentar uma duração e uma imagem de pré-visualização.",
};

let scenario_6 = {
    title: "Jardim Zoológico",
    line1: "Um zoo organiza os seus animais categorizando-os como terrestres ou aquáticos.",
    line2: "Dentro destas categorias existem animais como peixes, patos e zebras.",
    line3: "Apenas dentro da categoria dos peixes existe uma distinção entre ovíparos e vivíparos.",
};

let scenario_7 = {
    title: "Pagamentos",
    line1: "Uma loja permite vários métodos de pagamento.",
    line2: "Estes pagamentos podem ser em dinheiro, cheque ou por multibanco.",
    line3: "O sistema diferencia os pagamentos usando MBWay e os pagamentos com cartão.",
};

const scenarios = [scenario_1, scenario_2, scenario_3, scenario_4, scenario_5, scenario_6, scenario_7];

function getRandomScenario(){
    const random_scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    scenario_title.innerHTML = random_scenario.title
    scenario_line_1.innerHTML = random_scenario.line1
    scenario_line_2.innerHTML = random_scenario.line2
    scenario_line_3.innerHTML = random_scenario.line3
}

getRandomScenario();