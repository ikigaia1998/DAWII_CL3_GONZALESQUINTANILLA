import { Component } from '@angular/core';

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.css']
})
export class EstacionamientoComponent {
  horas: number = 0;
  minutos: number = 0;
  costo: number | undefined;

  calcularCosto(): void {
    const tiempoTotalEnHoras = this.horas + this.minutos / 60;
    this.costo = 1500 * tiempoTotalEnHoras;
  }
}
