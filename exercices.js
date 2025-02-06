const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
alert("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

const store_name = 'À la poche pleine !';
let potions_type = ['potion de vie', 'potion de mana', 'potion de vigueur'];
console.log(potions_type);
let potions_stock = 99; // Je suis prévoyant !
let potion_price = 50;
let store_status = true;
const money = '🪙';
let wallet = 200;


if (store_status) {
    let choice;
    while (choice != 0) {
        choice = parseInt(prompt(`Bienvenue dans la boutique ${store_name} Aventurier ! 🎉 \nQue veux-tu savoir ? 🤔 \n1. Le nom de la boutique \n2. Le nom du Sorcier \n3. Le prix d'une potion de soin \n4. La quantité de potion de soin que tu souhaites \n0. Quitter le magasin`));
        switch (choice) {
            case 0:
                alert(`Merci d'être venu aventurier, à la revoyure !`)
                break;
            case 1:
                alert('');
                break;
            case 2:
                alert('');
                break;
            case 3:
                alert('');
                break;
            case 4:
                let quantity = parseInt(prompt(`Combien de potions souhaites-tu acheter ?`))
                if ((quantity * potion_price) < wallet) {
                    wallet -= (quantity * potion_price);
                    potions_stock -= quantity;
                    alert(`Le prix de la potion étant de ${potion_price} ${money}, cela te couteras ${potion_price * quantity} ${money} mon cher aventurier. 💸`);
                } else {
                    alert(` Désolé aventurier mais c'est pas possible `)
                }
                break;

            default:
                alert(`Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕`);
                break;
        }
    }


} else {
    console.log(`La boutique ${store_name} est fermée, revenez plus tard Aventurier ! 😴`);
}


