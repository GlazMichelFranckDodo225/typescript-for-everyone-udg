var pseudo = "Superman";
var total = 100;
var isLoading = false;
// IntelliSense in Visual Studio Code
console.log(pseudo.length);
console.log(typeof total);
var totalString = total.toString();
console.log(totalString);
console.log(typeof totalString);
var welcomeMessage = "\n  Bienvenue ".concat(pseudo, "!\n  Vous avez un Total de ").concat(totalString, " points.\n");
console.log(welcomeMessage);
