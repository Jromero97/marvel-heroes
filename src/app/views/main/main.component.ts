import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {HeroesService} from "../../services/heroes.service";
import {Subscription} from "rxjs";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  getHeroesSubscription!: Subscription;
  loadingSubscription!: Subscription;
  heroesData!: any[];
  totalPages = 0;
  totalResults = 0;
  limit = 0;
  offset = 0;
  loading = false;
  error = false;

  constructor(
    private heroes: HeroesService,
    private loaderService: LoaderService
    ) {
  }
  filterTerm = '';

  ngOnInit() {
    this.loadingSubscription = this.loaderService.httpProgress().subscribe((status) => {
      this.loading = status;
    });
    this.getData();
  }

  ngOnDestroy() {
    this.getHeroesSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
  }

  getData(offset = 0) {
    this.getHeroesSubscription = this.heroes.getMarvelHeroes(offset).subscribe(
      response => {
        this.heroesData = response.data.results;
        this.totalResults = response.data.total;
        this.totalPages = response.data.count / response.data.limit;
        this.limit = response.data.limit;
        this.offset = response.data.offset;
      }, (err) => {
        this.error = true;
      }
    );
  }

  listenSearchValue(value: string) {
    this.filterTerm = value;
  }

  updatePage(offset: number) {
    this.getData(offset);
  }
}
