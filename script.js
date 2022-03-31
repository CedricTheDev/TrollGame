// definition of the trollBattle() function which runs the game
function trollBattle() {
	// clear any losing messages from the document
	document.getElementById("death").innerHTML = "";
	document.getElementById("result").innerHTML = "";
	// initial prompt for the user that gets stored in a variable
	let action = window.prompt("You're walking through the forest minding your own business and a troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you BRIBE the troll?").toUpperCase();
	// switch statement to handle the player's initial choice
	switch(action) {
		case "FIGHT": {
			let skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
			let strong = window.prompt("Are you stronger than a troll? (YES or NO)").toUpperCase();
			// if statement that analyzes the user responses
			if (skill === "YES" || strong === "YES") {
				// the user said YES to at least one of those prompts
				// write the winning result to the document
				document.getElementById("result").innerHTML = "You can either be more skilled or stronger than a troll to survive!<br/>You live another day!";
				// play the winning audio file
				document.getElementById("win").play();
			} else {
				// the user said NO to both prompts
				// write the negative result to the document
				document.getElementById("death").innerHTML = "You are not skilled or strong? Why did you fight a troll?<br/>You have died!";
				// play the losing audio file
				document.getElementById("lose").play();
			}
			break;
		} // end of case FIGHT
		case "RUN": {
			let fast = window.prompt("Are you fast? (YES or NO)").toUpperCase();
			if (fast === "YES") {
				// write the positive result to the document
				document.getElementById("result").innerHTML = "Your speed has saved you!<br/>But can you live with your cowardice?";
				// play the winning audio file
				document.getElementById("win").play();
			} else {
				// write the negative result to the document
				document.getElementById("death").innerHTML = "If you are going be a coward, at least be fast!<br/>You have died!";
				// play the losing audio file
				document.getElementById("lose").play();
			}
			break;
		} // end of case RUN
		case "BRIBE": {
			let money = window.prompt("You have to pay the troll-toll.\nDo you have any money? (YES or NO)").toUpperCase();
			// only ask if they have a certain amount if they respond YES to first prompt
			if (money === "YES") {
				let amount = window.prompt("How much money do you have?\nPlease enter a NUMERIC VALUE");
				// convert the string to an integer
				amount = parseInt(amount);
				//check the amounth against our condition
				if (amount > 50) {
					// write the positive result to the document 
					document.getElementById("result").innerHTML = "Great job the troll is happy you can pass";
					//play the winning audio file
					document.getElementById("win").play();

				} else {
					// user had money just not enough
					// write negative result to document
					document.getElementById("death").innerHTML = "the troll needs more money than that <br/> you have died";
					//play the losing audio file
					document.getElementById("lose").play();

				}
			} else {
				// user said NO to having any money
				// write the negative result
				document.getElementById("death").innerHTML = "what were you planning on bribing the troll with? <br/> you have died";
				document.getElementById("lose").play();
			}
			break;

			
		} // end of case BRIBE

		default: {
			// the user has not entered a valid choise at the orginal prompt
			window.alert("you entered: " + action + ". that is not a valid choice please try again ");
			// run the trollbattle() function again from the beginning
			trollBattle();
			break;
		}
	} // end of switch statement
} // end of trollBattle() function








