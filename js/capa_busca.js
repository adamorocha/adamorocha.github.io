var busca = {
    $el: function() {
        return $("input#search-input");
    },
    keys: function() {
        var value = $.trim(this.$el().val());
        if (value === "") {
            value = [];
        } else {
            value = helper.retiraAcentos( this.$el().val(), true ).split(/\s+/gi);
//            value = helper.retiraAcentos( this.$el().val(), true ).replace(/\/s+/gi, " ");
        }
        
        return value;
    },
    porTitulo: function(valor) {
        if (typeof valor === "boolean") {
            $("input#por-titulo").prop("checked", valor);
        } else {
            return $("input#por-titulo").prop("checked");
        }
    },
    buscaAproximada: function(valor) {
        if (typeof valor === "boolean") {
            $("input#busca-aproximada").prop("checked", valor);
        } else {
            return $("input#busca-aproximada").prop("checked");
        }
    },
    toggleConfig: function() {
        $("div.search-config")
            .stop()
            .slideToggle();
    },
    filtrarItem: function(item) {
        var tags;
        if (this.porTitulo()) {
            tags = item.tituloTags;
        } else {
            tags = item.tags;
        };
        
        var keys = this.keys();
        var resultado;
        
        resultado = compararKeysTags(keys, tags, this.buscaAproximada(), 70);
//        resultado = tags.indexOf( keys ) > -1;
        
        if (resultado) {
            item.show();
        } else {
            item.hide();
        }
    }
}

$(document).ready(function() {
    function filtrarTudo(sairDaBusca) {
        if (sairDaBusca !== true) {
            sairDaBusca = false;
        };
        
        $(menu.order).each(function() {
            if (this.tipo === tipos.item) {
                busca.filtrarItem( this )
            }
        });
        
        if (sairDaBusca) {
            exitBusca( menu );
        } else {
            enterBusca( menu );
        }
    }
    function buscar(keyCode) {
        var semKeys = busca.keys().length === 0;
        var enterPressed = keyCode === 13;
        
        if (!semKeys && enterPressed) {
            filtrarTudo(false)
        } else if (semKeys) {
            filtrarTudo(true)
        }
    }
    
    $("button#config").on("click", busca.toggleConfig);
    $("input#search-input").on("keyup", function(evt) {
        buscar(evt.keyCode)
    });
    $("input#por-titulo, input#busca-aproximada").on("change", function() {
        buscar(13);
    });
    $("button#search").on("click", function() {
        buscar(13);
    })
})