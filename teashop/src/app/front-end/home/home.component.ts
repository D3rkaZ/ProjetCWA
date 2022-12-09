import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
    test()
    {
      console.log(localStorage.getItem("token"));
    }
  ngOnInit(): void {
  }

}
