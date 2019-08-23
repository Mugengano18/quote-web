import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quot:Quote[]=[
    {name:'alice',quote:'thank you'},
    {name:'alice',quote:'never lie'},
    {name:'alice',quote:'hard work pays'},
    {name:'alice',quote:'nevr be a fool'},
    {name:'alice',quote:'try to understand'},

  ]
  constructor() {
  }

  ngOnInit() {
  }

}
