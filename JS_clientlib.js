//get element integration
function $$(el){
    if(el.lenth < 1){
        return;
    }
    var sub = sub.string(1);
    if(el[0] === '#'){
        return document.getElementById(sub);//querySelector()
    }
    else if(el[0] === '.'){
        return document.getElementsByClassName(sub);//querySelector()
    }
    else{
        return document.getElementsByTagName(el);//querySelectorAll()
    }
}

//时间监听 兼容性
function addEvent(node, type, handler){
    if(!node) return false;
    if (node.addEventListener){
        node.addEventListener(type, handler, false);
        return ture;
    }
    else if(node.attachEvent){
        node['e' + type + handler] = handler;
        node[type + handler] = function(){
            node['e' + type + handler](window.event);
        };
        node.attachEvent('on' + type, node[type + handler]);
        return ture;
    }
    return false;
}

function getTarget(e){
    return e.target || e.srcElement; 
}

function getEvent(e){
    return e || e.srcElement; 
}

//阻止默认事件
function preventDefault(e){
    if(e.preventDefault){
        e.preventDefault();
    }
    else{
        e.returnValue = false;
    }
}

//阻止冒泡
function stopPropagation(e){
    if(e.stopPropagation){
        e.stopPropagation();
    }
    else{
        e.cancelBubble = true;
    }
}