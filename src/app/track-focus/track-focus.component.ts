import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-focus',
  templateUrl: './track-focus.component.html',
  styleUrls: ['./track-focus.component.css']
})
export class TrackFocusComponent implements OnInit {

  val!: number;

  constructor() { }

  ngOnInit(): void {
  }

  focusRandomValue() {
    this.val = Math.floor(Math.random() * 180);
  }

}
