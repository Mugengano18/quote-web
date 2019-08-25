import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quot:Quote[]=[
    {name:'alice',quote:'Read a thousand books, and your words will flow like a river.',author:'Lisa See',publishDate:new Date(2019,8,25)},
    {name:'alice',quote:'The first draft is just you telling yourself the story.',author:'Terry Pratchett',publishDate:new Date(2019,8,25)},
    {name:'alice',quote:'You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it. That’s why I say one of the most valuable traits is persistence.',author:'Octavia E. Butler',publishDate:new Date(2019,8,25)},
    {name:'alice',quote:'Start writing, no matter what. The water does not flow until the faucet is turned on.',author:'Louis L’Amour',publishDate:new Date(2019,8,25)},
    {name:'alice',quote:'Every secret of a writer’s soul, every experience of his life, every quality of his mind, is written large in his works.',author:'Virginia Woolf',publishDate:new Date(2019,8,25)},
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
