import { getAnimales } from './animales.js';

export function calcularComidaDiaria() {
    let animales = getAnimales();
    return animales.reduce((total, animal) => total + animal.alimentacionDiaria, 0);
}
