import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from '../models/entreprise.model';
import { AuthService } from '../services/auth.service';
import { GestionService } from '../services/gestion.service';

@Component({
  selector: 'app-login-business',
  templateUrl: './login-business.component.html',
  styleUrls: ['./login-business.component.css']
})
export class LoginBusinessComponent implements OnInit {

  entreprise = new Entreprise()
  error : number = 0


  constructor(private service : AuthService , private router : Router) { }

  onLogin() {
    this.service.getEntFromDb(this.entreprise.loginEnt).subscribe(ent => {
      if(ent != null && ent.passwordEnt == this.entreprise.passwordEnt) {
        this.service.loginUser(ent , 'ENT')
        this.router.navigate(['/offres'])
      } else {
        this.error = 1
      }
    })
  }

  ngOnInit(): void {
  }

}
