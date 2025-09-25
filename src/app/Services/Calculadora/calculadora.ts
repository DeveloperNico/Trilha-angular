import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Calculadora {
  add(x: number, y: number) {
    return x + y;
  }
}
