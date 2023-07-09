
// Exemplo da promise com o método fetch:

async function getPeople() {
    try {
        const people = await fetch ('https://randomuser.me/api/?results=10');
        return people.json();
    } catch (error) {
        console.log(`erro ${error}`);
    }
}

getPeople().then(data => console.log(data));   

getPeople().then( data => {
    const mulheres = data.results;
    console.log(mulheres.filter(m => m.gender === 'female'));
})