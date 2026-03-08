	var computer = new Number;
	var tries=new Number(0);
    
    document.getElementById("getNumber").addEventListener("click", function(){
    	tries=0;
    	document.getElementById("guess").value="";
    	document.getElementById("tries").value=tries;
        computer= Math.floor((Math.random() *100) + 1);
        document.getElementById("comments").value="I have a number and I am waiting for you to guess it";
    });

    document.getElementById("checkGuess").addEventListener("click", function() {
		var guess = new Number(document.getElementById("guess").value);
		const resp = document.getElementById("comments");
		const tryCount = document.getElementById("tries");
		try {
			//Using if (gatekeeper) else as bad data routing for data validation
			if (guess > 1 && guess < 100) {
				tries++;
				if (computer == guess) {
					resp.value = "You guessed correctly - congratulations! It only took " + tries + " tries!";
				}
				else if (computer < guess) {
					resp.value = "Your guess is too high, try again!";
					tries++;
					tryCount.value = tries;
				}
				else {
					resp.value = "Your guess is too low, try again!";
					tries++;
					tryCount.value = tries;
				}
				//document.getElementById("guess").value = "";
			}
			else {
				//document.getElementById("guess").value = "";
				tries++;
				tryCount.value = tries;
				console.error("The data validation produced an error!")
				throw ("Your guess was not a number from 1 to 100");
			}
			
		}
		catch (err) {
			console.info(err + " @ " + console.count("iteration = "));
			resp.value = err;
		}
		document.getElementById("guess").value = "";
        });
     


