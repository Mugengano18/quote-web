import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  
  upvote=0;
  downvote=0;

  upvoteQuot(){
    this.upvote++;
  }
  downvoteQuot(){
    this.downvote++;
  }
  constructor() { }

  ngOnInit() {
  }

}
