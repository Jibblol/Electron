function incrementValue(){
    
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;

    console.log('Called! :))))')
}

function upgradeOne(){
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    console.log("Bought Upgrade");
    if(value>=5){
        value-=5;
        document.getElementById('number').value = value;
        upgradeCount();
    }
}

function upgradeCount(){
    var value = parseInt(document.getElementById('sidenumber').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('sidenumber').value = value;
    console.log("upgrade +1");
}
