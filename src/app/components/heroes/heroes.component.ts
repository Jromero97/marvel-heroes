import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  @Input() data: any[] = [];
  @Input() filterTerm!: string;

  createHeroSrc(hero: any): string {
    return `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  }
}
