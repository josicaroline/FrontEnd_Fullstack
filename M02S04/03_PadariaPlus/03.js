
class CaixaRegistradora {
    constructor(estoque) {
        this.estoque = estoque;
        this.contaAberta = [];
        this.nomeCliente = '';
    }

    iniciarAtendimento(nome) {
        this.nomeCliente = nome;
        return `olá ${nome}, seja bem vindo(a)`;
    }
    
    adicionarProduto(codigo) {
        let item = this.estoque.find(produto => produto.codigo == codigo);
        if (item === null) {
            let newItem = {
                codigo: item.codigo,
                nome: item.nome,
                preco: item.preco,
                quantidade: item.quantidade
            }
            this.estoque.push(newItem);
            return `produto adicionado com sucesso`;
        } else {
            return `Produto já consta no sistema`;
        }
    }

    adicionarItem (codigo, quantidade) {
        let produto = this.estoque.find(produto => produto.codigo == codigo);
        if(produto.quantidade >= quantidade) {
            let produtoConta = {
                codigo: produto.codigo,
                nome: produto.nome,
                preco: produto.preco,
                quantidade: produto.quantidade
            }
            this.contaAberta.push(produtoConta);
            produto.quantidade -= quantidade;
            return `produto adicionado com sucesso`;
        } else {
            return `quantidade insuficiente no estoque`;
        }
    }

    totalConta () {
        const totalConta = this.contaAberta.reduce((prevValor, elem) => prevValor + elem.preco, 0);
        return `O valor total da conta é ${totalConta}`;
    }

    fecharConta () {
        let money = prompt("informe o valor pago: ");
        money = eval(money);
        const troco = money - this.totalConta();
        return `O troco é: ${troco}`; 
    }
}

const estoque = [{
    codigo: 1,
    nome: "banana",
    preco: 2.00,
    quantidade: 10
},
{
    codigo: 2,
    nome: "arroz",
    preco: 5.00,
    quantidade: 12
},
{
    codigo: 3,
    nome: "leite",
    preco: 4.00,
    quantidade: 8
}];

const caixa = new CaixaRegistradora(estoque);