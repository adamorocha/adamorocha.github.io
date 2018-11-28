/* CronÃimetro e RelÃggio */     
$(document).ready(function(){
	$("#date-label").delay(1000).fadeIn(1000);
});	
   

   
function startTimer(duration, display) {
    
    var timer = duration, minutes, seconds;
        myInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

            $(".txtTempo").html(minutes + ":" + seconds);

            if (--timer < 0) {
                $("#min").html("00:00");
                clearInterval(myInterval);
            }
                        
            else{
                var Tempo = $("#Cronometro").val();
                
                if(Tempo === "1"){                    
                    if($("#min").html() === "00:30"){
                        document.getElementById('min').style.color='black';
						$('#30-seconds').modal('show');
                    }
                } 
                if(Tempo === "1"){                    
                    if($("#min").html() === "00:29"){
                        document.getElementById('min').style.color='red';
                    }
                } 
                
                if(Tempo === "1"){                    
                    if($("#min").html() === "00:28"){
                        document.getElementById('min').style.color='black';
                    }
                } 
                
                if(Tempo === "1"){                    
                    if($("#min").html() === "00:27"){
                        document.getElementById('min').style.color='red';
                    }
                }   
                
                if(Tempo === "1"){                    
                    if($("#min").html() === "00:26"){
                        document.getElementById('min').style.color='black';
                    }
                }

                if(Tempo === "1"){                    
                    if($("#min").html() === "00:25"){
                        document.getElementById('min').style.color='red';
                    }
                } 
                if(Tempo === "1"){                    
                    if($("#min").html() === "00:24"){
                        document.getElementById('min').style.color='black';
                    }
                }     
                
                if(Tempo === "1"){                    
                    if($("#min").html() === "00:23"){
                        document.getElementById('min').style.color='red';
                    }
                }      
                if(Tempo === "1"){                    
                    if($("#min").html() === "00:22"){
                        document.getElementById('min').style.color='black';
                    }
                }    
                
                if(Tempo === "1"){                    
                    if($("#min").html() === "00:21"){
                        document.getElementById('min').style.color='red';
                    }
                }    
                
                if(Tempo === "1"){                    
                    if($("#min").html() === "00:20"){
                        document.getElementById('min').style.color='black';
                    }
                }     
                
                if(Tempo === "1"){                    
                    if($("#min").html() === "00:19"){
                        document.getElementById('min').style.color='red';
                    }
                }     
                
                if(Tempo === "1"){                    
                    if($("#min").html() === "00:18"){
                        document.getElementById('min').style.color='black';
                    }
                }                 
                
                if(Tempo === "1"){                    
                    if($("#min").html() === "00:17"){
                        document.getElementById('min').style.color='red';
                    }
                } 

                 if(Tempo === "1"){                    
                    if($("#min").html() === "00:16"){
                        document.getElementById('min').style.color='black';
                    }
                } 
                
        
                if(Tempo === "1"){
                    if($("#min").html() === "00:15"){
                        document.getElementById('min').style.color='red';
						$('#nav-bar').addClass('timeOver');
                    }
                } 
                 if(Tempo === "1"){                    
                    if($("#min").html() === "00:14"){
                        document.getElementById('min').style.color='black';
                    }
                }                 
                 if(Tempo === "1"){                    
                    if($("#min").html() === "00:13"){
                        document.getElementById('min').style.color='red';
                    }
                } 
                 if(Tempo === "1"){                    
                    if($("#min").html() === "00:12"){
                        document.getElementById('min').style.color='black';
                    }
                }    
                
                 if(Tempo === "1"){                    
                    if($("#min").html() === "00:11"){
                        document.getElementById('min').style.color='red';
                    }
                }                 
                
                if(Tempo === "1"){
                    if($("#min").html() === "00:10"){
                       $('#10-seconds').modal('show');
                       document.getElementById('min').style.color='black';
                    }
                }  
                
                
                 if(Tempo === "1"){                    
                    if($("#min").html() === "00:09"){
                        document.getElementById('min').style.color='red';
                    }
                }     
                
                 if(Tempo === "1"){                    
                    if($("#min").html() === "00:08"){
                        document.getElementById('min').style.color='black';
                    }
                }  
                
                
                 if(Tempo === "1"){                    
                    if($("#min").html() === "00:07"){
                        document.getElementById('min').style.color='red';
                    }
                }    
                
                
                 if(Tempo === "1"){                    
                    if($("#min").html() === "00:06"){
                        document.getElementById('min').style.color='black';
                    }
                }                 
                
                 if(Tempo === "1"){                    
                    if($("#min").html() === "00:05"){
                        document.getElementById('min').style.color='red';
                    }
                }                 
                                                
                
                 if(Tempo === "1"){                    
                    if($("#min").html() === "00:04"){
                        document.getElementById('min').style.color='black';
                    }
                }                 
                                                
                
                 if(Tempo === "1"){                    
                    if($("#min").html() === "00:03"){
                        document.getElementById('min').style.color='red';
                    }
                }                 
                                                
                
                 if(Tempo === "1"){                    
                    if($("#min").html() === "00:02"){
                        document.getElementById('min').style.color='black';
                    }
                }      
				
                 if(Tempo === "1"){                    
                    if($("#min").html() === "00:01"){
                        document.getElementById('min').style.color='red';
                    }
                }  				
                                                
                                                     
        }
    }, 1000);
}
        
function Start() {
    var Tempo = $("#Cronometro").val();
    var fiveMinutes = 35 * Tempo,
        display = document.querySelector('#min');
    
    $(".txtTempo").show();
    startTimer(fiveMinutes, display);
    $("#btn-play").attr("disabled","disabled");
};

function Stop() {
    $("#min, .txtTempo").html("00:00");
    $(".txtTempo").hide();
    clearInterval(myInterval);
    $("#msgHold").hide();
    $("#btn-play").removeAttr("disabled");
	$('#nav-bar').removeClass('timeOver');
    document.getElementById('min').style.color='black';
};


function abrir(file) {
        if(file != 'undefined'){
            novajanela = window.open(file,'janela', 'fullWindow,scrollbars=auto,resizable=yes');
            novajanela.focus();
      }
};   

function avancar(){
	window.history.go(+1)
	alert(iframe-home)
}

function voltar(){
	window.history.go(-1)
}