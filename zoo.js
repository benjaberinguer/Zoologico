import { registrarAnimal, asignarJaula, asignarCuidador } from './animales.js';
import { registrarJaula, asignarAnimalAJaula } from './jaulas.js';
import { registrarCuidador, asignarAnimalACuidador } from './cuidadores.js';
import { calcularComidaDiaria } from './alimentacion.js';

// Registrar datos
registrarAnimal('León', 'Felino', 5, 10);
registrarJaula('Jaula1', 'Grande');
registrarCuidador('C1', 'Pedro');

// Asignar relaciones
asignarJaula('León', 'Jaula1');
asignarCuidador('León', 'C1');
asignarAnimalAJaula('León', 'Jaula1');
asignarAnimalACuidador('León', 'C1');

// Calcular alimentación diaria
console.log(`Comida diaria necesaria: ${calcularComidaDiaria()} kg`);
