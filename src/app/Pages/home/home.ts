import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  produtos = signal([
    {
      nome: 'Valorant',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ap0fN8gjeNoQh8GrDGUwl_ahZE0Bva_TbQ&s"
    },
    {
      nome: 'Hollow Knigth: Silksong',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GVvyXPsh8Cdkar8MgEc5d6Q2DKzUdLkdpg&s"
    },
    {
      nome: 'Clash Royale',
      image: "https://assetsio.gnwcdn.com/clash-royale-codes.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
    }
  ])
}
