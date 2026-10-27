import Biblioteca from "./models/Biblioteca.js";
import Livro from "./models/Livro.js";
import LivroEspecial from "./models/LivroEspecial.js";

const minhaBiblioteca = new Biblioteca("GT Bezerra - tarde");

const livro1= new LivroEspecial('Dom Casmurro', 'Machado de Assis', 1899, 'Regional');
const livro2= new Livro('Os Miseráveis', 'Victor Hugo', 1815);
const livro3= new Livro('O Elogio da Loucura', 'Erasmo de Rotterdam', 1509);
const livro4= new LivroEspecial('Sapies', 'Yuval Harai', 2011, 'Historia');

minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);
minhaBiblioteca.adicionarLivro(livro3);
minhaBiblioteca.adicionarLivro(livro4);

console.log(`
    -------------Movimentação-------------`)
    livro1.emprestar();
    livro2.emprestar();
    livro1.devolver();
console.log(`
    -------------Movimentação-------------`)
    


minhaBiblioteca.listarLivros();