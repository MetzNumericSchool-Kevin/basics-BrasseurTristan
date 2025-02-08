const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
alert("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

let potions_stock = 99; // Je suis prévoyant !
let potion_price = 50;
let store_status = true;
const money = '🪙';
let wallet_wizard = 0;
let wallet_adventurer = 100;
const store_name = 'À la poche pleine !';
const inventory_adventurer = [];
const inventory_wizard = [{ name: 'potion de vie', price: 40, stock: 1 },
{ name: 'potion de mana', price: 20, stock: 2 },
{ name: 'potion d\endurance', price: 20, stock: 1 }
]


if (store_status) {
    let choice;
    while (choice != 0) {
        choice = parseInt(prompt(`Bienvenue dans la boutique ${store_name} Aventurier ! 🎉 \nQue veux-tu savoir ? 🤔 \n1. Le nom de la boutique \n2. Le nom du Sorcier \n3. Le prix d'une potion de soin \n4. La quantité de potion de soin que tu souhaites \n5. La liste de mes potions \n0. Quitter la boutique`));
        switch (choice) {
            case 0:
                alert(`Merci d'être venu aventurier, à la revoyure !`)
                break;
            case 1:
                alert(`Je viens de te le dire ! Tu as trop pris de coups de gourdin sur le casque \n tu est à la boutique ${store_name} !`);
                break;
            case 2:
                alert(`Mon nom ? tu sais vraiment pas qui je suis ? Ah le noob ! Je suis ${nom_sorcier} 🧙‍♂️ grand sorcier de renom!`);
                break;
            case 3:
                alert(`La potion est à ${potion_price} ${money}.`);
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
            case 5:
                // Boucle avec le tableau 
                // let msg = "J'ai actuellement :\n";
                // potions_type.forEach(potion => {
                //     msg += "- " + potion + "\n"
                // });
                // alert(msg);
                // Boucle avec les objets
                let msg = "J'ai actuellement :\n";
                inventory.forEach(potion => {
                    for (const key in potion) {
                        msg += key + " = " + potion[key] + " | ";
                    }
                    msg += "\n"
                })
                alert(msg)
                break;

            default:
                alert(`Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕`);
                break;
        }
    }


} else {
    console.log(`La boutique ${store_name} est fermée, revenez plus tard Aventurier ! 😴`);
}


