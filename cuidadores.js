let cuidadores = [];

export function registrarCuidador(id, nombre) {
    cuidadores.push({ id, nombre, animales: [] });
}

export function asignarAnimalACuidador(animalNombre, cuidadorId) {
    let cuidador = cuidadores.find(c => c.id === cuidadorId);
    if (cuidador) {
        cuidador.animales.push(animalNombre);
    }
}

export function getCuidadores() {
    return cuidadores;
}
