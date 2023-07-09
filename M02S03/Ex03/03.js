
//exemplo If e Else:

let grade1, grade2, average;

grade1 = prompt("Digite a primeira nota: ");
grade1 = eval(grade1);

grade2 = prompt("Digite a segunda nota: ");
grade2 = eval(grade2);

average = (grade1 + grade2) / 2;

if (average >= 7) {
    document.write("Aprovado");
} else if (average <= 6) {
    document.write("Reprovado");
} else {
    document.write("Recuperação");
}