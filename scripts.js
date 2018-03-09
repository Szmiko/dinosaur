var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';
var upperCasedDinosaur = dinosaur.toUpperCase();

console.log(upperCasedDinosaur);

var textAfter = text.replace ('Velociraptor', dinosaur);

console.log(textAfter);

console.log(textAfter.length/2);

var textSliced = text.slice(0, 73);

console.log(textSliced);