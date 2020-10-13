import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;
  fillerNav = [
    { name: 'Asignatura', route: "asignatura", icon: "school" },
    { name: 'Libro', route: "libro", icon: "menu_books" },
  ]
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 300px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

}
