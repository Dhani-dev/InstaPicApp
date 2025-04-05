import { Injectable, signal } from '@angular/core';
import { User } from '../interfaces/user.interface';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isSignedUser = signal(false);

  login(user:User):boolean{
    const userSrt = localStorage.getItem(user.username!); //Recupera un string

    if(userSrt){
      
      const userDB:User = JSON.parse(userSrt);

      if(user.password===userDB.password){
        this.isSignedUser.set(true);
        return true;
      }
    }
    Swal.fire({
      title: "Oops...",
      text: "Credenciales no válidas",
      width: 600,
      padding: "3em",
      color: "#716add",
      backdrop: `
        rgba(0,0,123,0.4)
        left top
        no-repeat
      `,
      icon: "error"
    });
    return false;
  }   

  logout(){
    this.isSignedUser.set(false);
  }

  registry(user:User){ //Es tipo User y este esta en user.interface.ts
    //console.log('Desde el servicio', user);
    localStorage.setItem(user.username!,JSON.stringify(user)); //setItem sirve para el identificador del objeto que se va guardar

  }
}

