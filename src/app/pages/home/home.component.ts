import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  followers = 15;

  /*seguir(){
    //this.followers=this.followers+1;
    this.followers++;
  }*/

}
