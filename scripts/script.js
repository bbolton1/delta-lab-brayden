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
    textOutput.innerHTML = '';
    textOutput.appendChild(message);
    // output.append(message);

    /* gives key-value pairs to match the return of speciesType with the image of the species */
    const speciesImages = {
        "Human": "https://www.dndbeyond.com/avatars/thumbnails/6/258/420/618/636271801914013762.png",
        "Elf": "https://www.dndbeyond.com/avatars/thumbnails/7/639/420/618/636287075350739045.png",
        "Drow": "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/4df80815-c986-481b-9941-0ddd452dc640/width=450/11072157-34667478-drow,%20male,%20%20male%20focus,%20pointy%20ears,%20red%20eyes,%20armor,%20elf,%20white%20hair,%20shoulder%20armor,%20upper%20body,%20closed%20mouth,%20long%20hair,%20pau.jpeg",
        "Half-Elf": "https://www.dndbeyond.com/avatars/thumbnails/6/481/420/618/636274618102950794.png",
        "Half-Orc": "https://www.worldanvil.com/uploads/images/2e1d14dc12bed57e73a1651529b2bae3.jpg",
        "Halfling": "https://www.dndbeyond.com/avatars/thumbnails/6/256/420/618/636271789409776659.png",
        "Dwarf": "https://www.dndbeyond.com/avatars/thumbnails/6/254/420/618/636271781394265550.png",
        "Gnome": "https://www.dndbeyond.com/avatars/thumbnails/6/334/420/618/636272671553055253.png",
        "Tiefling": "https://www.dndbeyond.com/avatars/thumbnails/7/641/420/618/636287076637981942.png",
        "Githyanki": "https://cdna.artstation.com/p/assets/images/images/018/196/644/large/ea-howell-githyanki-1.jpg?1558586756",
        "Dragonborn": "https://www.dndbeyond.com/avatars/thumbnails/6/340/420/618/636272677995471928.png",
        "Goblin": "https://www.dndbeyond.com/avatars/thumbnails/30783/955/1000/1000/638062024584880857.png"
    };
    
    const img = document.createElement('img');
    img.src = speciesImages[speciesFinal];
    img.alt = speciesFinal; 

    img.width = 500;
    img.height = 500; // keeps images from taking up half the screen

    output.appendChild(img);

    const imageOutput = document.getElementById('imageOutput');
    imageOutput.innerHTML = ''; 
    imageOutput.appendChild(img);

}
