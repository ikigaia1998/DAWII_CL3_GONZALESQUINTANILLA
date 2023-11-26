import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from './rickandmorty.service';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickAndMortyComponent implements OnInit {
  episodes: any[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    this.rickAndMortyService.getEpisodes().subscribe((data: any) => {
      // Filtrar episodios con ID impar
      this.episodes = data.results.filter((episode: any) => episode.id % 2 !== 0);
    });
  }
}
