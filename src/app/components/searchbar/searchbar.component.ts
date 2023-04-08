import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit, OnDestroy {
    @Output() searchValue = new EventEmitter<string>();
    searchFormSubscription!: Subscription;
    searchForm!: FormGroup;
    constructor(private fb: FormBuilder) {
      this.searchForm = this.fb.group({
        search: ['']
      });
    }

    ngOnInit() {
      this.searchFormSubscription = this.searchForm.controls['search'].valueChanges.subscribe((value) => {
        this.searchValue.emit(value);
      });
    }

    ngOnDestroy() {
      this.searchFormSubscription.unsubscribe();
    }


}
