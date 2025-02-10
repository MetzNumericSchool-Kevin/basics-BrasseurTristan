const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
alert("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");

let store_status = true;
const money = '🪙';
let wallet_wizard = 0;
let wallet_adventurer = 100;
const store_name = 'À la poche pleine !';
const inventory_adventurer = [];
const inventory_wizard = [{ name: 'potion de vie', price: 40, stock: 1 }, { name: 'potion de mana', price: 20, stock: 2 }, { name: 'potion d\'endurance', price: 20, stock: 1 }];


if (store_status) {
    let choice = 0;
    let potion;
    while (wallet_adventurer != 0) {
        choice = parseInt(prompt(`Bienvenue dans la boutique ${store_name} Aventurier ! 🎉\nBourse du sorcier: ${wallet_wizard} --------- Bourse de l'aventurier: ${wallet_adventurer}\nQue veux-tu savoir ? 🤔 \n1. Acheter des potions  \n2. Vendre des potions \n3. Quitter la boutique `));
        switch (choice) {
            case 1:
                potion_list = inventory_wizard.map((potion, i) => { if (potion.stock > 0) { return `- ${i + 1} : ${potion.name} => ${potion.price} ${money} - stock: ${potion.stock} \n` } }).join('\n');
                potion = parseInt(prompt(`De quel potions as-tu besoin ?\n ${potion_list} \n`));
                if (potion > inventory_wizard.length || inventory_wizard[potion - 1].stock === 0) {
                    alert(`Tu te fout de moi ??? `);
                    break;
                }
                nbr_potion = parseInt(prompt(`Combien en veux-tu ?`));
                if (nbr_potion <= inventory_wizard[potion - 1].stock) {
                    if ((nbr_potion * inventory_wizard[potion - 1].price) < wallet_adventurer) {
                        alert(`Cela te coûte ${nbr_potion * inventory_wizard[potion - 1].price} ${money} pour ${nbr_potion} ${inventory_wizard[potion - 1].name} !`);
                        wallet_adventurer -= (nbr_potion * inventory_wizard[potion - 1].price);
                        wallet_wizard += (nbr_potion * inventory_wizard[potion - 1].price);
                        inventory_wizard[potion - 1].stock -= nbr_potion;
                        inventory_adventurer.push({ name: inventory_wizard[potion - 1].name, price: inventory_wizard[potion - 1].price, stock: nbr_potion });
                        console.log(inventory_adventurer);
                    } else {
                        alert(` Ta bourse n'est pas assez pleine ! traine moins à la taverne et reviens quand tu auras plus d'${money}...`)
                    };
                } else {
                    alert(`Je n'ai que ${inventory_wizard[potion - 1].stock} ${inventory_wizard[potion - 1].name} Aventurier!`);
                }

                break;
            case 2:
                if (inventory_adventurer.length > 0) {
                    potion_list_adventurer = inventory_adventurer.map((potion, i) => { if (potion.stock > 0) { `- ${i + 1} : ${potion.name} => ${potion.price} ${money} - stock: ${potion.stock} \n` } }).join('\n');
                    console.log(potion_list_adventurer);
                    sell = parseInt(prompt(`Quel potion veux-tu me vendre ?\n ${potion_list_adventurer}`));
                    console.log(inventory_adventurer[sell - 1]);
                    if (sell > inventory_adventurer.length || inventory_wizard[sell - 1].stock === 0) {
                        alert(`Tu te fout de moi ???`);
                        break;
                    }
                    value = Math.floor(Math.random() * 6) + 1;
                    result = parseInt(prompt(`Si tu trouves le bon chiffre entre 1 et 5, j'achète toutes tes potions !`));

                    if (result == value && wallet_wizard >= (inventory_adventurer[sell - 1].stock * inventory_adventurer[sell - 1].price)) {
                        alert(`Bravo Tu as trouvé le bon chiffre ! J'achète ton stock de ${inventory_adventurer[sell - 1].name} pour f${inventory_adventurer[sell - 1].stock * inventory_adventurer[sell - 1].price} ${money}`);
                        wallet_wizard -= inventory_adventurer[sell - 1].stock * inventory_adventurer[sell - 1].price;
                        wallet_adventurer += inventory_adventurer[sell - 1].stock * inventory_adventurer[sell - 1].price;
                        inventory_adventurer.pop(sell);
                    } else if (result != value) {
                        alert(`Le chiffre était ${value}. Tu as perdu ! Mais tu peux retenter ta chance.`);
                        break;
                    } else if (result == value && wallet_wizard < (inventory_adventurer[sell].stock * inventory_adventurer[sell].price)) {
                        alert(`Tu as Gagné ! Mais malheureusement ma bourse n'est pas assez pleine pour te racheter toutes tes potions.`);
                        break;
                    }
                } else {
                    alert(`Ta sacoche est vide aventurier ! Tu veux me vendre du vent ? `)
                }
                break;
            case 3:
                alert(`Merci d'être venu aventurier, à la revoyure !\n Je rigole tu va rester avec moi et je vais te vider ta bourse jusqu'à la dernière petite pièce !`)
                break;
            default:
                alert(`Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕`);
                break;
        };
    };
} else {
    console.log(`La boutique ${store_name} est fermée, revenez plus tard Aventurier ! 😴`);
};


