function changeName(name) {
    const len = name.length;
    name = name.slice(len/2);
    const nameFinal = name.split('').reverse().join(''); 
    return nameFinal;
}

function getSpecies(month) {
    let speciesType = "";
    // these races are based primarily on the choosable races from Baldur's Gate 3 but are from D&D nonetheless
    // also these are used in place of a spirit animal
    switch (month) {
        case "January":
            speciesType = "Human";
            break;

        case "February":
            speciesType = "Elf";
            break;

        case "March":
            speciesType = "Drow";
            break;

        case "April":
            speciesType = "Half-Elf";
            break;

        case "May":
            speciesType = "Half-Orc";
            break;

        case "June":
            speciesType = "Halfling";
            break;

        case "July":
            speciesType = "Dwarf";
            break;

        case "August":
            speciesType = "Gnome";
            break;

        case "September":
            speciesType = "Tiefling";
            break;

        case "October":
            speciesType = "Githyanki";
            break;

        case "November":
            speciesType = "Dragonborn";
            break;

        case "December":
            speciesType = "Goblin";
            break;
           
        default:
            console.log("invalid birth month!");
    }
        return speciesType;
}

function displayResults() {
    const name = document.getElementById('name').value;
    const birthMonth = document.getElementById('birthMonth').value;     // retrieves the value of the input from the user

    const nameModified = changeName(name);
    const speciesFinal = getSpecies(birthMonth);          // puts the user input into the functions to be transformed

    const finalMessage = `The last half of your name reversed is: ${nameModified}, and if you were in the world of Dungeons and Dragons, you would be a: ${speciesFinal}.`
    const message = document.createTextNode(finalMessage);
    const output = document.getElementById('fullOutput');       // puts the text into a node to append it
    output.append(message);

}