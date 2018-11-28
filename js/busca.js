function letras(texto) {
    var letrasPorString = [];
    var letrasPorIndex = [];
    var i, letra;
    
    for (i = 0; i < texto.length; i++) {
        letra = texto.substr(i, 1);
        if (letrasPorString[letra] === undefined) {
            letrasPorString[letra] = 1;
            letrasPorIndex.push(letra);
        } else {
            letrasPorString[letra]++;
        }
    };
    
    this.porString = letrasPorString;
    this.porIndex = letrasPorIndex;
}

function compararLetras(letrasObj1, letrasObj2, corte) {
    var i;
    var qndeCertas = 0;
    for (i = 0; i < letrasObj1.porIndex.length; i++) {
        var letra = letrasObj1.porIndex[i];
        if (letrasObj1.porString[letra] === letrasObj2.porString[letra]) {
            qndeCertas++;
        }
    };
    
    var percentual = (qndeCertas / letrasObj1.porIndex.length) * 100;
    return percentual >= corte;
}

function duplas(texto) {
    var tduplas = [];
    var i;
    for (i = 0; i < texto.length - 1; i++) {
        tduplas.push( texto.substr(i, 2) );
    }
    
    return tduplas;
};

function compararDuplas(duplas1, duplas2, corte) {
    var i, j;
    var encontrados = 0;
    for (i = 0; i < duplas1.length; i++) {
        var dupla = duplas1[i];
        var encontrado = false;
        for (j = 0; j < duplas2.length; j++) {
            if (dupla == duplas2[j]) {
                encontrado = true;
            }
        };
        
        if (encontrado) { encontrados++ }
    };
    
    var percentual = (encontrados / duplas1.length) * 100;
    return percentual >= corte
}

function compararKeyTag(key, tag, buscaAproximada, corte) {
    if (buscaAproximada === true) {
        var lk, lt, dk, dt;
        lk = new letras(key);
        lt = new letras(tag);
        dk = new duplas(key);
        dt = new duplas(key);
        
        if (corte === undefined) { corte = 70 }
        if ( compararLetras(lk, lt, corte) && compararDuplas(dk, dt, corte) ) {
            return true;
        } else {
            return false;
        }
    } else {
        if (tag.indexOf(key) > -1) {
            return true;
        } else {
            return false;
        }
    }
}

function compararKeysTags(keysArr, tagsArr, buscaAproximada, corte) {
    var encontrados = 0;
    $(keysArr).each(function(index, key) {
        var encontrado = false;
        $(tagsArr).each(function(index, tag) {
            if (compararKeyTag( key, tag, buscaAproximada, corte )) {
                encontrado = true;;
            }
        });
        
        if (encontrado) {encontrados++};
    });
    
    if ( encontrados == keysArr.length ) { 
        return true;
    } else {
        return false;
    }
}