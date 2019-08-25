import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quot:Quote[]=[
    {name:'alice',quote:'never give up',author:'keza',publishDate:new Date(2019,4,2)},
    {name:'alice',quote:'never give up',author:'keza',publishDate:new Date(2019,6,2)},
  ];
  deleteQuot(isDelete,index){
    if(isDelete){
      this.quot.splice(index,1);
    }
  }
  addNewQuote(quoting){
    quoting.publishDate= new Date(quoting.publishDate)
    this.quot.push(quoting);
  }

  

  constructor() {
  }

  ngOnInit() {
  }

}
