function log(mood,exp,proud,work, logFormat){
	this.mood=mood;
	this.exp = exp;
	this.proud = proud;
	this.work = work;
	this.logFormat = logFormat
	}		



	var m=prompt("describe your mood: Positive, Neutral or Negative");
	var e=prompt("summarize the experience");
	var p=prompt("What is something you are proud of today?");
	var w = prompt("What is something today you wish to work on in the future?");
	var t = logFormat;
	var log1 = new log(m,e,p,w,t);


	var log2 = new log("negative", "I slipped on ice", "I helped a person with their work", "get better boots for ice", `12, 12, 2026 @ 11:11:11`);


	var today = new Date();
	var logFormat = today.getMonth()+1+" "+today.getDate()+","+today.getFullYear() +" @ "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();	
	

	document.getElementById("Mood1").innerHTML = log1.mood;
	document.getElementById("Exp1").innerHTML = log1.exp;
	document.getElementById("Proud1").innerHTML = log1.proud;
	document.getElementById("Work1").innerHTML = log1.work;			
	document.getElementById("logFormat1").innerHTML = logFormat;
	

	document.getElementById("Mood2").innerHTML = log2.mood;
	document.getElementById("Exp2").innerHTML = log2.exp;
	document.getElementById("Proud2").innerHTML = log2.proud;
	document.getElementById("Work2").innerHTML = log2.work;			
	document.getElementById("logFormat2").innerHTML = logFormat;	
	

	document.getElementById("date").innerHTML = today;
	

	
		

