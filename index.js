const tableau = [

    'France FR nous a souvant volé nos richesses <img src="diamant.png" alt=""> <img src="sac.png" alt="">... vous allez aussi nous voler nos footballeurs<img src="le-football.png" alt="" srcset=""> ?',
    ' L\'oiseau <img src="oiseau.png" alt=""> sur le baobab ne doit pas oublier qu\'il a porté des lunetes <img src="des-lunettes-de-soleil.png" alt="">!',
    'On n\'a pas besoins de d\'eau <img src="gouttes.png" alt=""> potable pour éteindre un incendie <img src="flamme.png" alt="">  ',
    'Le crocodile <img src="crocodile.png" alt="" srcset=""> n\'a pas que le gorille <img src="gorille.png" alt="" srcset=""> accouche',
    'Il es tombé comme du n\'importe quoi, on dirait la <img src="girafe.png" alt="">',
    'La chasse <img src="chasse.png" alt=""> est comme le football <img src="football.png" alt="" srcset=""> , un sport d\'endurance '
]
const boutton = document.querySelector('#boutton');
let divBlague = document.querySelector('#divBlague');
// console.log(divBlague);
let blague = document.querySelector('#blague');
// console.log(blague);


function getRandomIntInclusive() {
    min = Math.ceil(0);
    max = Math.floor(tableau.length-1);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  blague.innerHTML = `${tableau[getRandomIntInclusive()]}`;
  
// console.log(getRandomIntInclusive());

boutton.addEventListener('click', ()=>{
    let indice = getRandomIntInclusive();
    const phrase = tableau[indice]
    console.log(phrase);

    blague.innerHTML = `${phrase}`;

});