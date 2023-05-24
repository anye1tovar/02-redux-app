import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
})
export class HijoComponent {
  @Input() contador: number = 0;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() {}
  ngOnInit() {}

  multiplicar() {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  dividir() {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador: number) {
    this.contador = nuevoContador;
    this.cambioContador.emit(this.contador);
  }
}
