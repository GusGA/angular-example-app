import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute, private _heroesServices: HeroesService) {
    this.activatedRoute.params.subscribe(param => {
      this.heroe = this._heroesServices.getHeroe(param.id);
    });
  }

  ngOnInit(): void {
  }

}
