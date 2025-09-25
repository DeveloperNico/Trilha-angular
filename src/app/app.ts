import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculadora } from './Services/Calculadora/calculadora';
import { Header } from "./Components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula-1');
  nome = signal("Nicolas");
  nomeCapsLock = computed(() => this.nome().toUpperCase());

  url = "https://lumiere-a.akamaihd.net/v1/images/g_moana_09_17699_064f5500_2f9ff275.jpeg";

  mostrarOi = false;
  toDos = ["Acordar", "Tomar café", "Sair"]

  calculadoraService = inject(Calculadora);

  constructor() {    
    this.nome.set("Ariane");

    this.nome.update((nomeAnterior) => "Mrs, " + nomeAnterior);

    console.log(this.calculadoraService.add(5, 8));
  }

  dizerOi() {
    this.mostrarOi = !this.mostrarOi;
  }
}
