import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  Subscription,
} from 'rxjs';
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('countrySearch')
  public countrySearch!: ElementRef<HTMLInputElement>;

  @Output()
  public countries$: EventEmitter<string> = new EventEmitter<string>();

  private inputSubscription: Subscription = new Subscription();

  public ngAfterViewInit(): void {
    this.inputSubscription = fromEvent(
      this.countrySearch.nativeElement,
      'keyup'
    )
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((countryInput) => {
        this.countries$.emit((countryInput.target as HTMLInputElement).value);
      });
  }

  public ngOnDestroy(): void {
    this.inputSubscription.unsubscribe();
  }
}
