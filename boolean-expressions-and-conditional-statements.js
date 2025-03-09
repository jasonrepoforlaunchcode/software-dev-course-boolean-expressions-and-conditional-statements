/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

let hasTorch = false;
let hasOpenedVinegar = false;
let gameWon = false;
let alive = true;
let topLine = String.fromCharCode(9552);
let t = topLine + topLine  + topLine  + topLine ;
let side = String.fromCharCode(9553);
let tl = String.fromCharCode(9556);
let tr = String.fromCharCode(9559);
let bl = String.fromCharCode(9562);
let br = String.fromCharCode(9565);
let continueGame = true

outerLoop: while(continueGame === true){
  hasTorch = false;
  hasOpenedVinegar = false;
  gameWon = false;
  alive = true;
  console.log(
  `
  ${tl}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${tr}
  ${side}  You wake up in the woods at night. The ground under you is cold, and the air freezes in your lungs.   ${side}
  ${side}    The only lights are coming from the pale moon and the few dim lights from the nearby village.         ${side}
  ${bl}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${t}${br}`)
  mainloop: while(gameWon === false && alive === true){
    console.log("\nThere seem to be two paths: one leads up into the dark mountains, the other to the village.");
    let mountOrVill = readline.question("Do you go to the 'mountains' or the 'village'?  ");
      if (mountOrVill === "end"){
        break;
      }
    printBreakLine();
    if (mountOrVill.toLowerCase() === "mountains") {
      mountainpath:
        if (!hasTorch) {
          console.log("\nYou head toward the mountains. The trees are bare, but this deep into the woods they still block out most of the moonlight.\
                      \nThe path disappears. You trip over a frozen tree root. You hear a rustle in the bushes directly in front of you.\
                      \nTo the left is complete darkness. To the right are some shrubs. Which direction do you want to go?");
          let direction = readline.question("(FORWARD, BACKWARD, LEFT, RIGHT): ");
          printBreakLine();
          if (direction.toLowerCase() === "backward"){
            console.log("\nProbably a good call. You head back to where you started.");
            continue mainloop;
          }
          else if (direction.toLowerCase() === "left"){
            console.log("\n\nYou panic and dart through the trees to your left.\
                      \nYou run off an embankment and fall toward the river below.\
                      \nAs you fall, you wonder why you didn't hear the river a second earlier.\
                      \nThen you realize it was because the river is frozen solid. That's why. Yeah...");
            alive = false;
          }
          else if (direction.toLowerCase() === "right"){
            console.log("\nYou panic and dart through the shrubbery to your right.\
              \nThe cold air stabs your chest as you try to catch your breath.\
              \nThen, you see three monsterous silhouettes standing in the place you just ran from.\
              \nDo you run forward and face them head on? Or do you backtrack to where you first woke up?");
            let answer = readline.question("\n(FORWARD, BACKTRACK): ");
            if (answer.toLowerCase() === "backtrack") {
              console.log("Good call. You successfully backtrack to the place where you woke up.\
                          \n(By the way, it was three polar bears, and they would have eaten you. Good decision making.)");
            }
            
            else {
              if (answer.toLowerCase() === "forward"){
                console.log("You bravely yell 'Aaaaaaaahhhhh!!' at whatever is up ahead.\
                  \nYou stop bravely yelling when you realize what those silhouettes were silhouettes OF.\
                  \n3 polar bears, and they can tell where you are. Because of all the yelling.");
              }
              else{
                console.log("Between those two options, you chose a third thing, which didn't work.\
                  \nYou realize that those silhouettes were actually polar bears. And they eat you.");
              }
              alive = false;
            } 
          }
          else {
            let sentenceBeginning = "\nYou stumble in a moment of indecision. By the time you've picked yourself up you notice";
            if (direction.toLowerCase() === "forward"){
              sentenceBeginning = "\nYou try to find your way forward in the darkness, hoping the sound you heard was something small and adorable.\
                                    \nIt wasn't. It was";
            }
            console.log(`${sentenceBeginning} 3 polar bears. \nThey form a menacing triangle around you and begin circling.\nThen they eat you.`);

            alive = false;
          }
        }
        else if(hasTorch){
          console.log("You walk the mountain path a little more confidently, now that you can see. \
            \nTo the left there is a frozen river. To the right there are nothing but trees for miles. \
            \nAnd straight ahead, about twenty yards away, are the silhouettes of what are, no doubt, 3 giant polar bears.\
            \nWhat do you do?");
            let firstMountainAnswer = readline.question("(RETREAT, KEEP GOING): ");
            printBreakLine()
            if (firstMountainAnswer.toLowerCase() === "keep going") {
              if (hasOpenedVinegar === true) {
                console.log("The bears look at you hungrily. \
                  \nThey start waggling their noses in a way that unmistakeably says they're smelling something, and it's not pleasant.\
                  \nSuddenly, all three of them run off into the darkness of the woods. The path is clear!\
                  \nYou start again on the path. You go on to have lots of adventures (some of them involving a map) that surely would have\
                  \nfailed had you not come upon the torch and spilled vinegar on yourself. Good Job!");

                gameWon = true
              }
              else {
                console.log("The bears look at you hungrily. Then they eat you. It seems the bears were more hungry for you than they were afraid of fire. What might ruin their appetite?");
                alive = false
              }
            }
            else if (firstMountainAnswer.toLowerCase() === "retreat"){
              console.log("You head back to where you started.");
            }
            else {
              console.log("You tried something kinda weird that didn't work at all. The bears noticed the thing you did and they come after you.\
                          \nYou probably try something like batting them away with your torch, but that works for maybe two seconds. Then they eat you.\n");
              alive = false;
            }
            continue mainloop;
        }
      }
    else if (mountOrVill.toLowerCase() === "village") {
      if (hasTorch === false){
        console.log("\nYou head toward the nearby village.");
      }
      else {
        console.log("You head back to the village to take another look around.");
      }
      villagepath:
        if (hasTorch === false){
          console.log("You don't recognize this place. A few of the houses have lit torches out front.");
        }
        let attemptsCount = 0;
        while(hasTorch === false){
          
          let firstVillageAnswer = readline.question("It seems noone else in this town is awake. What do you do?: \n");
          printBreakLine()
          if (firstVillageAnswer.toLowerCase().includes("torch")){
            console.log("You got a torch!");
            hasTorch = true;
          }
          else if (firstVillageAnswer.toLowerCase().includes("look")){
            console.log("It's the middle of the night, so this town is pretty much lifeless. The only things that stand out to you are the torchlit houses. With their many doors.");
          }
          else if (firstVillageAnswer.toLowerCase().includes("knock") && firstVillageAnswer.toLowerCase().includes("door")) {
            console.log("You go to the nearest house and knock on the door.\
                      \nAfter a few minutes, an elderly man in a nightcap answers the door.");
            if (attemptsCount == 0) {
              console.log("'What do you want at this time of night? Are you lost?'");
            }
            else if (attemptsCount == 1){
              console.log("'....yes?..'");
            }
            else {
              console.log("He glares at you.");
            }
            let secondVillageAnswer = readline.question("\nWhat do you say?: ");
            printBreakLine()
            if (secondVillageAnswer.toLowerCase().includes("lost") || secondVillageAnswer.toLowerCase().includes("help") ||
              secondVillageAnswer.toLowerCase().includes("torch") || secondVillageAnswer.toLowerCase().includes("dark") ||
              secondVillageAnswer.toLowerCase().includes("cold") || secondVillageAnswer.toLowerCase().includes("mountain"))
              {
                console.log("'Ok ok, hold on....'\
                  \nAfter a minute or two he comes back. 'You'll probably need this then. Should have enough fuel for the rest of the night. Good luck to you'.\
                  \nHe hands you a torch! You walk away happily.");
                hasTorch = true;
              }
            else {
              attemptsCount++;
              if (attemptsCount == 1){
                console.log("'I really don't have time for weirdos. I have work in the morning!'. He slams the door in your face.");
              }
              else if (attemptsCount == 2) {
                console.log("You again?! It's so late...why...whyyyyyy?");
              }
              else {
                console.log("'Okay look. If I give you this torch, will you stop pestering me?!'\
                  \nHe hands you a torch! Finally, a result!");
                hasTorch = true;
              }
            }
          }
          else {
            console.log("It didn't work.\n");
          }
        }
        if (hasTorch === true && hasOpenedVinegar === false) {
          console.log("\nOut of the corner of your eye, you notice a bin behind someone's house.\
            \nDo you rifle through the bin, or leave?");
          let thirdVillageAnswer = readline.question("RIFLE, LEAVE: ");
          printBreakLine()
          if (thirdVillageAnswer.toLowerCase() === "rifle") {
            console.log("Unsurprisingly, most of what you find is junk. Except....a small bottle.");
            let fourthVillageAnswer = readline.question("Do you open it?");
            printBreakLine()
            if (fourthVillageAnswer.toLowerCase() === "yes" || fourthVillageAnswer.toLowerCase() === "y"){
              console.log("The cap is stuck tightly. Is that why they threw it away?\
                \nYou keep wrestling with the cap and eventually it comes off, spilling a foul smelling substance all over you!\
                \nWhat horrible luck! Is that vinegar? Urgggg! You have always hated that smell. Hmm, I wonder what else might hate that smell?\
                \nSlightly embarrassed, you head back to where you started.");
                hasOpenedVinegar = true;
            }
            else {
              console.log("You head back to where you started.");
            }
          }
          else {
            console.log("You head back to where you started.");
            continue mainloop;
          }
        }
        else if (hasTorch === true && hasOpenedVinegar === true){
          console.log("After taking a look around, you feel like you've bothered these people enough. You head back");
        }
    }
    else {
      console.log("Like I said, it's really dark out, so you can't see any other options.");
    }
  }

  if (gameWon === true){
    console.log("Congratulations, you won!");
  }
  else if (alive !== true){
    console.log("You died! Sorry!");
  }
  else {
    console.log("Game Over.");
  }
  let continueAnswer = readline.question("Start Over? (Yes/No): ");
  if (continueAnswer.toLowerCase() === "yes" || continueAnswer.toLowerCase() === "y"){
    continueGame = true;
  }
  else {
    continueGame = false;
  }
  
}
function printBreakLine(){
  console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ")
}