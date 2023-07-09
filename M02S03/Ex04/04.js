
//exemplo Switch Case:

let user = 'gerente';

switch (user) {
    case 'gerente':
        console.log('Acesso de gerente!')
    break;
    case 'funcionario':
        console.log('Acesso de funcionário!')
    break;
    case 'administrador':
        console.log('Acesso de administrador!')
    break;
    default:
        console.log('Acesso negado!');
}