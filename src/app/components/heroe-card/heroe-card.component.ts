import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html'
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe: Heroe;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHeroe() {
    this.router.navigate(['/heroe', this.heroe.id]);
  }
}
