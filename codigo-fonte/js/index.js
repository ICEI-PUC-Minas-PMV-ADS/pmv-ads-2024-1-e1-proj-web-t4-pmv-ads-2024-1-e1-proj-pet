let isDBEmpty = JSON.parse(localStorage.getItem("cadastros"));
console.log (isDBEmpty);
if(isDBEmpty == null){
    (()=> {
        const petSitters = new PetSitters();
        petSitters.load();
    })()
}
