const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
alert("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

const store_name = 'À la poche pleine !';
let potions = 99; // Je suis prévoyant !
let potion_price = 50;
let store_status = true;
const money = '🪙';

if (store_status) {
    let choice;
    while (choice != 0) {
        choice = parseInt(prompt(`Bienvenue dans la boutique ${store_name} Aventurier ! 🎉 \nQue veux-tu savoir ? 🤔 \n1. Le nom de la boutique \n2. Le nom du Sorcier \n3. Le prix d'une potion de soin \n4. La quantité de potion de soin`));
        switch (choice) {
            case 1:
                alert('1');
                break;
            case 2:
                alert('2');
                break;
            case 3:
                alert('3');
                break;
            case 4:
                alert('4');
                break;
            default:
                alert(`Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕`)
        }
    }


} else {
    console.log(`La boutique ${store_name} est fermée, revenez plus tard Aventurier ! 😴`);
}


