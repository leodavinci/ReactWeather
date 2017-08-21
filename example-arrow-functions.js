var names= ['mayank', 'joshi'];

names.forEach(function(name){
    console.log('forEach', name);
});

names.forEach((name) => {
    console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('mayank'));

var person = {
    name: 'Mayank',
    greet: function(){
        names.forEach((name) => {
            console.log(this.name + ' say hi to ' + name)
        });
    }
};

person.greet();
