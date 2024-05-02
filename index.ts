import inquirer from "inquirer";

import chalk from "chalk";

function startGame() {
    inquirer.prompt(
        [
            {
                name: "playerName",
                type: "input",
                message: "Enter your name? ",
                validate: (input) => {
                    if(input.length > 0){
                    return true
                }else{
                    return `Please enter your name: `
                }
            }
            }
        ]

    ).then((answer) => {
        const playerName = answer['playerName']
        console.log(chalk.bgMagenta(`\t \t \t Welcome ${playerName}, let's begin \t \t `));
        explore()
    });
}

function explore() {
    inquirer.prompt(
        [
            {
                name: "action",
                type: "list",
                message: chalk.greenBright("What do you want to do?"),
                choices: ["Fight the Dragon", "Open the treasure chest", "Run away" ]
            }
        ]
    ).then((answer) => {
        const action = answer['action']
        if(action === 'Fight the Dragon') {
        console.log("You fought bravely, the Dragon defeated you.");
        }else if(action === "Open the treasure chest") {
            console.log("'You found a treasure chest full of gold! You win!!!");
        }else if(action === "Run away") {
            console.log("You run away from the Dragon. Better luck next time");          
        }
        inquirer.prompt(
            {
                name: "playAgain",
                type: "confirm",
                message: chalk.bgCyanBright("Do you want to play again?")
            }
        ).then((answer) =>{
            const playAgain = answer['playAgain']
            if(playAgain) {
                console.log(chalk.bgGreenBright("\t \t \t Start a new adventure....... \t \t "));
                explore();
            }
                else{
                    console.log(chalk.bgYellowBright("\t \t \t Thanks for Playing!!!! \t \t " )); 
                }  
        });

    });

}

startGame();






