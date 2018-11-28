var tipos = {
    menu: 0,
    folder: 1,
    item: 2
}
function clsMenu() {
    var self = this;
    
    this.folders = [];
    this.itens = [];
    this.$el = $("div#menu");
    this.clicked = false;
    this.tipo = tipos.menu;
    this.order = [];
    this.fila = [];
    this.isOpen = false;
    this.$menuToggle = $("div#menu-toggle")
        .on("click", function() {
            self.toggle();
        });
    
    this.$search = $("input#search-input")
        .on("keyup", function(evt) {
            if (evt.keyCode === 27 && self.clicked) {
                self.close();
            }
        });
    return this;
}
clsMenu.prototype.closeAllChildrenFolders = function() {
	return closeAllChildrenFolders(this);
}
clsMenu.prototype.open = function() {
    if (!this.isOpen) {
        this.isOpen = true;
        this.$search.trigger("focus");
        $("body").removeClass("hideMenu");
    }
}
clsMenu.prototype.close = function() {
    if (this.isOpen) {
        this.isOpen = false;
        $("body").addClass("hideMenu");
    }
}
clsMenu.prototype.toggle = function() {
    if (this.isOpen) {
        this.close();
    } else {
        this.open();
    }
}
clsMenu.prototype.addItem = function(label, href, target, tags, title) {
    addItem(
        label,
        "Menu/",
        href,
        target,
        tags,
        this,
        this,
        title
    );
    
    return this;
}
clsMenu.prototype.addFolder = function(label, title) {
    var tempFolder = addFolder(
        label,
        "Menu/",
        this,
        this,
        title
    );
    
    return tempFolder;
}
clsMenu.prototype.itemClick = function(item) {
    if (!this.clicked && (item.target !== undefined || item.target !== "" || item.target !== "_blank")) {
        this.clicked = true;
        
        $("iframe, div#menu-toggle").show();
    }
}

function enterBusca(folderObj) {
    var i;
    for ( i = 0; i < folderObj.folders.length; i++ ) {
        folderObj.folders[i].enterBusca();
        enterBusca( folderObj.folders[i] );
    }
    for ( i = 0; i < folderObj.itens.length; i++ ) {
        folderObj.itens[i].enterBusca();
    }
}

function exitBusca(folderObj) {
    var i;
    for ( i = 0; i < folderObj.folders.length; i++ ) {
        folderObj.folders[i].exitBusca();
        exitBusca( folderObj.folders[i] );
    }
    for ( i = 0; i < folderObj.itens.length; i++ ) {
        folderObj.itens[i].exitBusca();
    }
}

function clsFolder(label, path, parentObj, menuObj, title) {
    this.folders = [];
    this.itens = [];
    this.label = label;
    this.path = path;
    this.parent = parentObj;
    this.menu = menuObj;
    this.$el = undefined;
    this.$label = undefined;
    this.tipo = tipos.folder;
    this.title = title;
    
    var pAberto = false;
    this.aberto = function(valor, noAnimation, closeSiblingFolders) {
    	if (closeSiblingFolders !== true) {
    		closeSiblingFolders = false;
    	}
        if (noAnimation !== true) {
            noAnimation = false;
        }
        
        if (valor === true) {
        	if (closeSiblingFolders) {
        		this.parent.closeAllChildrenFolders();
        	}
            if (noAnimation) {
                this.$el
                    .stop()
                    .hide()
                    .show();
            } else {
                this.$el
                    .stop()
                    .slideDown();
            }
            
            this.$label.addClass("open");
            
            pAberto = true;
            return this;
        } else if (valor === false) {
            if (noAnimation) {
                this.$el
                    .stop()
                    .hide();
            } else {
                this.$el
                    .stop()
                    .slideUp();
            }
            
            this.$label.removeClass("open");
            
            pAberto = false;
            return this;
        } else {
            return pAberto;
        }
    }
    
    return this;
}
clsFolder.prototype.construir = function() {
    var self = this;
    
    this.$label = $(document.createElement("div"))
        .addClass("folder-label")
        .text(this.label)
        .on("click", function() {
            self.toggle();
        })
        .on("keyup", function(evt) {
            if (evt.keyCode === 27 && self.menu.click) {
                self.menu.close();
            }
        });
        
    if ( this.title != undefined ) {
    	this.$label.attr("title", this.title);
    } else {
    	this.$label.attr("title", this.label);
    }

    
    this.$el = $(document.createElement("div"))
        .addClass("folder");
    
    this.exitBusca();
    
    return this;
}
clsFolder.prototype.exitBusca = function() {
    this.$label
        .show()
        .appendTo( this.parent.$el )
    
    if (this.aberto()) {
        this.$el.show();
    } else {
        this.$el.hide();
    };
    
    this.$el.insertAfter( this.$label )
    
}
clsFolder.prototype.enterBusca = function() {
    this.$label.hide();
    this.$el.hide();
}
clsFolder.prototype.toggle = function() {
	if (this.aberto()) {
		this.aberto(false, false, false);
	} else {
		this.aberto(true, false, true)
	}
}
clsFolder.prototype.addItem = function(label, href, target, tags, title) {
    addItem(
        label,
        this.path + this.label + "/",
        href,
        target,
        tags,
        this,
        this.menu,
        title
    );
    
    return this;
}

clsFolder.prototype.addFolder = function(label, title) {
    var tempFolder = addFolder(
        label,
        this.path + this.label + "/",
        this,
        this.menu,
        title
    );
    
    return tempFolder;
}

clsFolder.prototype.closeAllChildrenFolders = function() {
	return closeAllChildrenFolders(this);
}
function clsItem(label, path, href, target, tags, parentObj, menuObj, title) {
    this.label = $.trim(label);
    this.path = $.trim(path);
    this.href = $.trim(href);
    this.target = $.trim(target);
    this.tituloTags = $.trim(helper.retiraAcentos(this.label, true)).split(" ");
    this.tags = helper.retiraAcentos($.trim(tags), true).split(" ").concat( this.tituloTags );
//    this.tituloTags = $.trim(helper.retiraAcentos(this.label, true));
//    this.tags = helper.retiraAcentos($.trim(tags), true) + " " + this.tituloTags;
    this.parent = parentObj;
    this.menu = menuObj;
    this.$el = undefined;
    this.$a = undefined;
    this.$info = undefined;
    this.tipo = tipos.item;
    this.ajax = false;
    this.title = title;
    
    return this;
}
clsItem.prototype.enterBusca = function() {
    this.$el.appendTo( this.menu.$el );
    this.$a.addClass("onBusca");
    
    return this;
}
clsItem.prototype.exitBusca = function() {
    this.$el.appendTo( this.parent.$el );
    this.$a.removeClass("onBusca");
    
    return this;
}
clsItem.prototype.construir = function() {
    var self = this;
    this.$el = $(document.createElement("div"))
        .addClass("item-container")
        .appendTo( this.parent.$el );
    
    this.$a = $(document.createElement("a"))
        .attr("href", this.href)
        .attr("target", this.target)
        .text( this.label )
        .appendTo( this.$el )
        .on("click", function() {
            self.menu.itemClick(self);
        })
        .on("keyup", function(evt) {
            if (evt.keyCode === 27) {
                self.menu.close();
            }
        });
        
    if ( this.title != undefined ) {
    	this.$a.attr("title", this.title);
    } else {
    	this.$a.attr("title", this.label);
    }
    
    this.$info = $(document.createElement("span"))
        .addClass("info")
        .text("Caminho: " + this.path)
        .appendTo( this.$a );
    
    this.exitBusca();
    return this;
}
clsItem.prototype.hide = function() {
    this.$el.hide();
}
clsItem.prototype.show = function() {
    this.$el.show();
}


function addFolder(label, path, targetObj, menuObj, title) {
    var tempFolder = new clsFolder(label, path, targetObj, menuObj, title);
    
    //menuObj.fila.push ( tempFolder );
    targetObj.folders.push( tempFolder );
    return tempFolder;
}

function addItem(label, path, href, target, tags, targetObj, menuObj, title) {
    var tempItem = new clsItem(label, path, href, target, tags, targetObj, menuObj, title);
    
    menuObj.fila.push( tempItem );
    menuObj.order.push( tempItem );
    targetObj.itens.push( tempItem );
    return tempItem;
}
function closeAllChildrenFolders(targetFolder) {
	$(targetFolder.folders).each(function() {
		if (this.aberto()) {
			this.aberto(false)
		}
	});
	
	return targetFolder;
}
function ordenar(folderObj) {
    var folders, itens;
    var i;
    
    folders = folderObj.folders;
    itens = folderObj.itens;
    
    folders.sort(function(a, b) {
        if ( a.label > b.label ) {
            return 1;
        } else {
            return -1;
        }
    });
    itens.sort(function(a, b) {
        if ( a.label > b.label ) {
            return 1;
        } else {
            return -1;
        }
    });
    
    for ( i = 0; i < folders.length; i++ ) {
        ordenar(folders[i]);
    }
    
    return folderObj;
}
function construir(folderObj) {
    var i, j;
    for ( i = 0; i < folderObj.folders.length; i++ ) {
        folderObj.folders[i].construir();
        construir(folderObj.folders[i]);
    };
    for ( i = 0; i < folderObj.itens.length; i++ ) {
        folderObj.itens[i].construir();
    };
}