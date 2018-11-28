var helper = {
    retiraAcentos: function(palavra, toLowerCase) {
        var texto = $.trim(palavra);
        var novoTexto = ""
        var comAcento = "Ã¡Ã Ã¢Ã£Ã¤Ã©Ã¨Ã«ÃªÃ­Ã¬Ã¯Ã®Ã³Ã²Ã´ÃµÃ¶ÃºÃ¹Ã¼Ã»Ã§Ã€ÃÃ‚Ã„ÃƒÃ‰ÃˆÃ‹ÃŠÃÃŒÃŽÃÃ’Ã“Ã”Ã•Ã–ÃšÃ™ÃœÃ›Ã‡'";
        var semAcento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
        
        var i, letra;
        for ( i = 0; i < texto.length; i++ ) {
            letra = texto.substr(i, 1);
            var letraPos = comAcento.indexOf(letra);
            if ( letraPos > -1 ) {
                letra = semAcento.charAt(letraPos)
            }
            novoTexto = novoTexto + letra
        }
        
        if (toLowerCase === true) {
            return novoTexto.toLowerCase()
        } else {
            return novoTexto;
        }
    },
    bVersion: function() {
        var userAgent = navigator.userAgent;
        var versoes = userAgent.split(";");
        var versaoEncontrada = browsers.Else;

        $(versoes).each(function(index, value) {
            if (value.toLowerCase().indexOf("msie") > -1) {
                var valArr = value.split(" ");
                $(valArr).each(function(index, value) {
                    var versao = parseInt(value);
                    if (!isNaN(versao)) {
                        switch (versao) {
                            case 7:
                                found = true;
                                versaoEncontrada = browsers.IE7;
                                break;
                            case 8:
                                found = true;
                                versaoEncontrada = browsers.IE8;
                                break;
                            case 9:
                                found = true;
                                versaoEncontrada = browsers.IE9;
                                break;
                            case 10:
                                found = true;
                                versaoEncontrada = browsers.IE10;
                                break;
                        }
                    }
                });
            }
        })

        return versaoEncontrada;
    },
    random: function(min, max) {
        var impossible = false;
        if (typeof min !== "number") {
            min = 0;
        }
        if (typeof max !== "number") {
            max = 100;
        }
        
        if (max < min) {
            impossible = true;
        }
        
        if (impossible) {
            return NaN;
        }
        
        var rand;
        while (rand < min || rand == undefined) {
            rand = Math.floor(Math.random() * max ) + 1;
        }
        
        return rand;
    },
    srcs: {
        imgFile: "http://bookunilever.atento.com.br/website/e_arq_comum/1/images/lista_file.png",
        imgPlus: "http://bookunilever.atento.com.br/website/e_arq_comum/1/images/lista_plus.png",
        imgMinus: "http://bookunilever.atento.com.br/website/e_arq_comum/1/images/lista_minus.png",
        yep: "http://bookunilever.atento.com.br/website/e_arq_comum/1/images/checklist_yep.png",
        nope: "http://bookunilever.atento.com.br/website/e_arq_comum/1/images/checklist_nope.png",
        yepBlack: "http://bookunilever.atento.com.br/website/e_arq_comum/1/images/checklist_yep_black.png",
        nopeBlack: "http://bookunilever.atento.com.br/website/e_arq_comum/1/images/checklist_nope_black.png"

    },
    modulo: function(numero) {
        if (typeof numero !== "number") {
            return false;
        } else {
            if (numero < 0) {
                return (numero * -1);
            } else {
                return numero
            }
        }
    },
    substituir: function($elDe, $elPara) {
    	$elDe
    		.after( $elPara )
    		.remove();
    	
    	return $elPara;
    },
    wrap: function($elOut, $elIn) {
    	$elOut
    		.insertAfter( $elIn )
    		.append( $elIn );
    	return $elOut;
    },
    createScriptTag: function(src) {
        var script = document.createElement("script");
        script.src = src;
        script.origin = "anonymous";
        
        document.getElementsByTagName("head")[0].appendChild(script);
    },
    createLinkTag: function(href) {
        var link = document.createElement("link");
        link.href = href;
        link.rel = "stylesheet";
        
        document.getElementsByTagName("head")[0].appendChild(link);
    }
}

var browsers = {
    IE10: 10,
    IE9: 9,
    IE8: 8,
    IE7: 7,
    Else: 11
}

$(document).ready(function() {
    $("div#footer")
        .removeAttr("style")
        .removeAttr("height")
        .removeAttr("width");
})