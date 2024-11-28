let jaulas = [];

export function registrarJaula(id, tamaño) {
    jaulas.push({ id, tamaño, animales: [] });
}

export function asignarAnimalAJaula(animalNombre, jaulaId) {
    let jaula = jaulas.find(j => j.id === jaulaId);
    if (jaula) {
        jaula.animales.push(animalNombre);
    }
}

export function getJaulas() {
    return jaulas;
}
