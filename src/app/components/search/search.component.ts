import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[];
  keyword: string;

  constructor(private activatedRoute: ActivatedRoute, private _heroeService: HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.keyword = params.keyword;
        this.heroes = this._heroeService.searchHeroes(this.keyword);
      }
    );
  }

}
