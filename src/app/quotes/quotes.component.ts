import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quot:Quote[]=[
    new Quote('alice','Read a thousand books, and your words will flow like a river.','Lisa See',new Date(2019,8,25)),
    new Quote('alice','The first draft is just you telling yourself the story.','Terry Pratchett',new Date(2019,8,25)),
    new Quote('alice','You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it. That’s why I say one of the most valuable traits is persistence.','Octavia E. Butler',new Date(2019,8,25)),
    new Quote('alice','Start writing, no matter what. The water does not flow until the faucet is turned on.','Louis L’Amour',new Date(2019,8,25)),
    new Quote('alice','Every secret of a writer’s soul, every experience of his life, every quality of his mind, is written large in his works.','Virginia Woolf',new Date(2019,8,25)),
  ];
  deleteQuot(isDelete,index){
    if(isDelete){
      let todelete=confirm(`are you sure you ant to delete this quote`)
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
