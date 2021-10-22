const words = ["cosa","anno","uomo","giorno","volta","casa","parte",
"vita","tempo","donna","mano","occhio","ora","signore","paese",
"momento","modo","mondo","parola","padre","punto","lavoro","stato",
"caso","città","guerra","strada","figlio","notte","voce","nome",
"sera","acqua","amico","fatto","gente"]
const letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
"n","o","p","q","r","s","t","u","v","w","x","y","z"]

let create_word = (words) =>{
    number = Math.floor(Math.random() * 36)
    word = words[number]
    return word
}

let position_letter_word = (word) =>{
    let number_word = word.length;
    let word_html = document.getElementById("word")
    for(let n = 0; n <= number_word; n++){
        let underscore = document.createElement("h2")
        underscore.style.border= "3px solid #011C40"
        underscore.style.borderRadius = "4px"
        underscore.style.margin = "3px"
        underscore.style.padding = "10px"
        word_html.appendChild(underscore)
        console.log(underscore)
    }
}

let check_letter = (word) => {

}

let creation_keyboard = (letter) =>{
    let n;
    div_html = document.getElementById("letter")
    for (n of letter){
        let tags = document.createElement("h4")
        tags.style.border= "3px solid #011C40"
        tags.style.borderRadius = "4px"
        tags.style.margin = "3px"
        tags.style.padding = "10px"
        tags.value = n.toUpperCase()
        tags.innerHTML = n 
        tags.addEventListener("click", check_letter)
        div_html.appendChild(tags);
    }
}

let word1 = create_word(words)
position_letter_word(word1)
creation_keyboard(letter)
