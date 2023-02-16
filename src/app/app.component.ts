import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listTitles = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      trailer: 'assets/videos/trailer_shawshank_redemption_1080p.mp4',
      cover: 'assets/images/o-resgate.jpg',
      name: 'O Resgate',
      relevance: 98,
      age: 12,
      parts: 1,
      categories: ['Filme de drama', 'Filme de prisão']
    },
    {
      title: 'The Godfather',
      year: 1972,
      trailer: 'assets/videos/trailer_godfather_1080p.mp4',
      cover: 'assets/images/o-poderoso-chefao.jpg',
      name: 'O Poderoso Chefão',
      relevance: 100,
      age: 16,
      parts: 1,
      categories: ['Filme de drama', 'Filme de máfia']
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      trailer: 'assets/videos/trailer_godfather_part_2_1080p.mp4',
      cover: 'assets/images/o-poderoso-chefao-2.jpg',
      name: 'O Poderoso Chefão 2',
      relevance: 99,
      age: 16,
      parts: 2,
      categories: ['Filme de drama', 'Filme de máfia']
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      trailer: 'assets/videos/trailer_dark_knight_1080p.mp4',
      cover: 'assets/images/cavaleiro-das-trevas.jpg',
      name: 'Cavaleiro das Trevas',
      relevance: 97,
      age: 12,
      parts: 1,
      categories: ['Filme de fantasia', 'Épico', 'Viagem no espaço']
    }
  ];
}
