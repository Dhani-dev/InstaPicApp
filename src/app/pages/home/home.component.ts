import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import Swal from 'sweetalert2';
import { User } from '../../shared/interfaces/user.interface';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{

  followers = 15;
  authService;
  username = 'Bienvenido';

  constructor(authService:AuthService){
    this.authService = authService;
    console.log('Este es el constructor');
  }
  
  ngOnInit(): void {
    console.log('Este es OnInit');
    const user = this.authService.getUser();
    this.username = user? user.name!:'Bienvenido';
  }
  
  ngOnDestroy(): void {
    console.log('Este es OnDestroy');
    Swal.fire({
          title: "Bye...",
          text: "Esta a punto de abandonar",
          width: 600,
          padding: "3em",
          color: "#716add",
          backdrop: `
            rgba(0,0,123,0.4)
            left top
            no-repeat
          `
        });
  }

  /*seguir(){
    //this.followers=this.followers+1;
    this.followers++;
  }*/

}
