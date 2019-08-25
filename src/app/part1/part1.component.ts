import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {
  @Output() isScrolled= new EventEmitter<boolean>();

  scrollQuote(scroll:boolean){
    this.isScrolled.emit(scroll);
  }
  constructor() { }

  ngOnInit() {
  }

}
