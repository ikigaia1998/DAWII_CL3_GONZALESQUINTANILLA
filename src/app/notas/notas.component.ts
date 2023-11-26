import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;
  promedio: number | undefined;

  calcularPromedio(): void {
    // Crear un array con las notas y ordenarlas de menor a mayor
    const notas = [this.nota1, this.nota2, this.nota3, this.nota4].sort((a, b) => a - b);

    // Eliminar la nota más baja
    notas.shift();

    // Calcular el promedio con la fórmula proporcionada
    this.promedio = notas[0] * 0.2 + notas[1] * 0.3 + notas[2] * 0.5;
  }
}
