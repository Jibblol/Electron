function incrementValue(){
    
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;

    console.log('Called! :))))')
}

function buyUpgrade(){
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>=5){
        value-=5;
        document.getElementById('number').value = value;
    }
    console.log("Bought Upgrade");
}
