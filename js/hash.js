/*
 * Checklist v1.0
 * Necessita de jQuery
 * 
 * Projeto amador para criação de um modelo
 * neutro do Book Info.
 * 
 * Criado por Júlio César Hintze dos Santos
 * Contato: julio.hintze@gmail.com
 */

var hash = {
    hashes: [],
    ids: {
        
    },
    findValueInHash: function(id) {
        var found = false;
        $(this.hashes).each(function() {
            if (this.id === id) {
                found = this.valor;
            }
        })
        
        return found;
    }
}


var docHash = document.location.hash;
$(docHash.substr(1, docHash.length).split("&")).each(function(index, value) {
    hash.hashes.push( new separator(value) );
})

function separator(str) {
    try {
        this.id = str.split("=")[0];
        this.valor = str.split("=")[1];
    } catch(err) {
        this.id = "";
        this.valor = "";
    }
}