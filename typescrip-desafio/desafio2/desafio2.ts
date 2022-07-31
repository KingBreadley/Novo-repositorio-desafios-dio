interface Pessoa {
    nome: string;
    idade: number;
    profissao?: string;
}

const pessoa1: Pessoa = {
    nome: "José",
    idade: 30,
    profissao: "Mecânico"
}

const pessoa2: Pessoa = {
    nome: "Marcos",
    idade: 19
}

const pessoa3: Pessoa = {
    nome: "Maria",
    idade: 25,
    profissao: "Recepcionista"
}