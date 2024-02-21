function calculateNameValue(name) {
    let nameFinal = "";
    const len = name.length;
    nameFinal = name.slice(len/2);
    return nameFinal;
}

function getAnimal(name) {
    const animals = ['Lion', 'Eagle', 'Dolphin', 'Ant', 'Tiger', 'Cheetah', 'Bear', 'Elephant', 'Fox', 'Owlbear'];
    const index = name % animals.length;
    return animals[index];
}

function showNameFacts() {
    const name = document.getElementById('nameInput').value;
    if (name.trim() === '') {
        console.log('Please enter your name.');
        return;
    }
    const nameValue = calculateNameValue(name);
    const spiritAnimal = getAnimal(nameValue);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your name value is ${nameValue} and your spirit animal is ${spiritAnimal}.`;
}