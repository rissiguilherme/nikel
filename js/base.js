const nome = "Guilherme";
let nome2 = "";
let pessoaDefault = {
    nome: "Guilherme",
    idade: "18",
    trabalho: "DEV" 
}

let nomes = ["Guilherme", "Pedro","Eduardo"]
let pessoas = [
    {
        nome: "Caio Jablonski",
        idade: "18",
        trabalho: "DEV"  
    },
    {
        nome: "Pedro",
        idade: "18",
        trabalho: "DEV"
    },
    {
        nome: "Eduardo",
        idade: "18",
        trabalho: "DEV"
    }
]

function alterarnome() {
    nome2 = "John"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Maria",
    idade: "19",
    trabalho: "DEV"
});

imprimirPessoas();
