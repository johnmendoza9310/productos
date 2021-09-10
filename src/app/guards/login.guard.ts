import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {


  constructor( private route:Router){


}
  canActivate(): boolean {

    if (localStorage.getItem('login')) {
      this.route.navigateByUrl('products');
      return false;
    } else{
      return true
    }
    
  }
  
}
