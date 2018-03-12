let myNotification = new Notification('Title', {
    body: 'Lorem Ipsum Dolor Sit Amet'
})

myNotification.onclick = () => {
    console.log('Notification clicked')
}

function incrementValue(){
    
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;

    console.log('Called! :))))')
}
