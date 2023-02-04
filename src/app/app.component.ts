import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  listTtitles = [{
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia',
    relevance: 98,
    age: 12,
    parts: 2,
    categories: ['Filme de fantasia', 'Épico', 'Viagem no espaço']
  }, {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Teste',
    relevance: 25,
    age: 16,
    parts: 2,
    categories: ['Filme de fantasia', 'Épico', 'Viagem no espaço']
  }, {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 45',
    relevance: 100,
    age: 18,
    parts: 2,
    categories: ['Filme de fantasia', 'Épico', 'Viagem no espaço']
  }];

}
