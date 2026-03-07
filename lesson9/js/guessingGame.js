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
      		if (computer==guess){
      			document.getElementById("comments").value="You guessed correctly - congratulations! It only took " + tries + " tries!";
      		} else if (computer<guess) {
        		document.getElementById("comments").value="Your guess is too high, try again!";
        		tries++;
        		document.getElementById("tries").value=tries;
        	}
        	else {
        		document.getElementById("comments").value="Your guess is too low, try again!";
        		tries++;
           		document.getElementById("tries").value=tries;
       		}
        });
     


