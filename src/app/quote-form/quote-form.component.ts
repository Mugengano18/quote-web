import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote: Quote[] = [
    { name: "", quote: "", author: "", publishDate: new Date },
  ];
  @Output() getQuote = new EventEmitter<Quote[]>();

  displayQuote() {
    this.getQuote.emit(this.newQuote);
    console.log(this.newQuote);
    this.newQuote = [
      { name: "", quote: "", author: "", publishDate: new Date() },
    ];
  }

  constructor() { }

  ngOnInit() {
  }

}
