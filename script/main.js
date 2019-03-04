let tableau = [ "pierre", "feuille", "ciseaux" ];
let rdm = parseInt( Math.random() * 3 );
let coupOrdinateur = tableau[ rdm ];

let coupJoueur = window.prompt("Que choisissez vous : pierre, feuille ou ciseaux ? ");
coupJoueur = coupJoueur.toLowerCase();

console.log( "ordi", coupOrdinateur );
console.log( "joueur", coupJoueur );

/*if( tableau.includes( coupJoueur ) == false ){
	console.log( "Le coup n'est pas valide" );
}else{*/

document.write("<p>Coup du Joueur : " + coupJoueur + "</p>");
document.write("<p>Coup de l'Ordinateur : " + coupOrdinateur + "</p>");

	if( coupJoueur == coupOrdinateur ){
		//On gère les égalités
		document.write("<p>Vous avez choisi la même chose, il y'a égalité" + "</p>");
	}else if( coupJoueur == "pierre" ){
		if( coupOrdinateur == "ciseaux" ){
			//Le joueur bat l'ordi
			document.write("<p>Félicitations ! Vous avez gagné!</p>");
		}else if( coupOrdinateur == "feuille" ){
			//Le joueur perds
			document.write("<p>Dommage ! Vous avez perdu.</p>");
		}
	}else if( coupJoueur == "ciseaux" ){
		if( coupOrdinateur == "feuille" ){
			//Le joueur bat l'ordi
			document.write("<p>Félicitations ! Vous avez gagné!</p>");
		}else if( coupOrdinateur == "pierre" ){
			//Le joueur perds
			document.write("<p>Dommage ! Vous avez perdu.</p>");
		}
	}else if( coupJoueur == "feuille" ){
		if( coupOrdinateur == "pierre" ){
			//Le joueur bat l'ordi
			document.write("<p>Félicitations ! Vous avez gagné!</p>");
		}else if( coupOrdinateur == "ciseaux" ){
			//Le joueur perds
			document.write("<p>Dommage ! Vous avez perdu.</p>");
		}
	}else{
		document.write( "Le coup n'est pas valide" );
	}

/*-------------------------------------------------------------------*/
	if( 
		(coupJoueur == "pierre" && coupOrdinateur == "feuille")  ||
		(coupJoueur == "feuille" && coupOrdinateur == "ciseaux") ||
		(coupJoueur == "ciseaux" && coupOrdinateur == "pierre")
	){
		console.log( "le joueur perd" );
	}else if( 
		(coupJoueur == "feuille" && coupOrdinateur == "pierre")  ||
		(coupJoueur == "pierre" && coupOrdinateur == "ciseaux")  ||
		(coupJoueur == "ciseaux" && coupOrdinateur == "feuille")
	){
		console.log( "Le joueur gagne.")
	}else if( coupOrdinateur == coupJoueur ){
		console.log("Egalité");
	}else{
		console.log( "Coup non reconnnu" );
	}
//}
