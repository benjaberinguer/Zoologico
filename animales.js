let animales = [];

export function registrarAnimal(nombre, especie, edad, alimentacionDiaria) {
    animales.push({ nombre, especie, edad, alimentacionDiaria, jaula: null, cuidador: null });
}

export function asignarJaula(animalNombre, jaulaId) {
    let animal = animales.find(a => a.nombre === animalNombre);
    if (animal) {
        animal.jaula = jaulaId;
    }
}

export function asignarCuidador(animalNombre, cuidadorId) {
    let animal = animales.find(a => a.nombre === animalNombre);
    if (animal) {
        animal.cuidador = cuidadorId;
    }
}

export function getAnimales() {
    return animales;
}
