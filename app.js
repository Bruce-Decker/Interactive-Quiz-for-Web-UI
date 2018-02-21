console.log('Connected')

function cancel() {
	var radio = document.getElementsByName('Question')
    var radio2 = document.getElementsByName('Question2')
	for ( var i = 0; i < radio.length; i++) {
		radio[i].checked = false;
	} 
	for ( var i = 0; i < radio2.length; i++) {
		radio2[i].checked = false;
	} 
}

function check_question1() {
	     
		if (document.getElementById('question1_4').checked == true) {
			sessionStorage.setItem("quantitative_correct_answer", 1)
		} else {
			sessionStorage.setItem("quantitative_correct_answer", 0)

		}
		
		 if (document.getElementById('question1_1').checked == true || document.getElementById('question1_2').checked == true || document.getElementById('question1_3').checked == true || document.getElementById('question1_4').checked == true) {
            sessionStorage.setItem("quantitative_answered", 1)
            	
	     } else {
	     	sessionStorage.setItem("quantitative_answered", 0)
	     
	     	
	     }

		
}

function check_question2() {
	
	var quantitative_correct_answer = sessionStorage.getItem("quantitative_correct_answer")
	var quantitative_answered = sessionStorage.getItem("quantitative_answered")
	if (document.getElementById('question2_1').checked == true) {
		quantitative_correct_answer++;
		sessionStorage.setItem("quantitative_correct_answer", quantitative_correct_answer)
    } 

   if (document.getElementById('question2_1').checked == true || document.getElementById('question2_2').checked == true || document.getElementById('question2_3').checked == true || document.getElementById('question2_4').checked == true) {
            
            quantitative_answered++;
            sessionStorage.setItem("quantitative_answered", quantitative_answered)
	}
  
}


function check_question3() {
	 
	 if (document.getElementById('question3_1').checked == true && document.getElementById('question3_2').checked == true) {
       sessionStorage.setItem("reading_correct_answer", 1)
     } else {
     	sessionStorage.setItem("reading_correct_answer", 0)
     }

      if (document.getElementById('question3_1').checked == true || document.getElementById('question3_2').checked == true || document.getElementById('question3_3').checked == true || document.getElementById('question3_4').checked == true || document.getElementById('question3_5').checked == true || document.getElementById('question3_6').checked == true) {
            sessionStorage.setItem("reading_answered", 1)
            
	     } else {
	     	sessionStorage.setItem("reading_answered", 0)
	     	
	     }


      
}


function check_question4() {
	
	 if (document.getElementById('question4_1').checked == true) {
        sessionStorage.setItem("video_correct_answer", 1)
     } else {
     	sessionStorage.setItem("video_correct_answer", 0)
     }

     if (document.getElementById('question4_1').checked == true || ('question4_2').checked == true || document.getElementById('question4_3').checked == true || document.getElementById('question4_4').checked == true) {
        sessionStorage.setItem("video_answered", 1)
     } else {
     	sessionStorage.setItem("video_answered", 0)
     }
     
}

function DOM_Manipulation() {
	
	if (document.getElementById('question3_1').checked == true) {
	
		document.getElementById('replace1').innerHTML = "<span> 650 </span>";
    }

	if (document.getElementById('question3_2').checked == true) {
		
        document.getElementById('replace2').innerHTML = "<span> Twitter </span>";
	}

	if (document.getElementById('question3_3').checked == true) {
		
        document.getElementById('replace1').innerHTML = "<span> 550 </span>";
	}
	if (document.getElementById('question3_4').checked == true) {
		
        document.getElementById('replace2').innerHTML = "<span> Google </span>";
	}

	if (document.getElementById('question3_5').checked == true) {
		
        document.getElementById('replace1').innerHTML = "<span> 650 </span>";
	}

	if (document.getElementById('question3_6').checked == true) {
		
        document.getElementById('replace2').innerHTML = "<span> Facebook </span>";
	}
}

function present_score() {
	 var quantitative_score = sessionStorage.getItem("quantitative_correct_answer").toString();
	 
	 var quantitative_answered = sessionStorage.getItem("quantitative_answered").toString();
	 
	 var reading_score = sessionStorage.getItem("reading_correct_answer").toString();
	  var reading_answered = sessionStorage.getItem("reading_answered").toString();
	 var video_score = sessionStorage.getItem("video_correct_answer").toString();
	 var video_answered = sessionStorage.getItem("video_answered").toString();
	
	 document.getElementById('quantitative_score').innerHTML = quantitative_score;
	  document.getElementById('quantitative_answered').innerHTML = quantitative_answered;
	 document.getElementById('reading_score').innerHTML = reading_score;
	 document.getElementById('reading_answered').innerHTML = reading_answered;
	 document.getElementById('video_score').innerHTML = video_score;
	 document.getElementById('video_answered').innerHTML = video_answered;
}


