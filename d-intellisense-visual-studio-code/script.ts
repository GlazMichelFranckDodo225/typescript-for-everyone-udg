let pseudo: string = "Superman";
let total: number = 100;
let isLoading: boolean = false;

// IntelliSense in Visual Studio Code
console.log(pseudo.length);
console.log(typeof total);

let totalString: string = total.toString();
console.log(totalString);
console.log(typeof totalString);

let welcomeMessage: string = `
  Bienvenue ${pseudo}!
  Vous avez un Total de ${totalString} points.
`;
console.log(welcomeMessage);


