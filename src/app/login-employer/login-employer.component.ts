import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Condidat } from '../models/condidat.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-employer',
  templateUrl: './login-employer.component.html',
  styleUrls: ['./login-employer.component.css']
})
export class LoginEmployerComponent implements OnInit {

  cond = new Condidat()
  error : number = 0

  constructor(private auth : AuthService , private router : Router) { }

  onLogin() {
    this.auth.getEmpFromDb(this.cond.loginCondidat).subscribe(cond => {
      if(cond != null && cond.passwordCondidat == this.cond.passwordCondidat){
        this.auth.loginUser(cond, 'EMP')
        this.router.navigate(['/offres'])
      } else {
        this.error = 1
      }
    })
  }

  ngOnInit(): void {
  }

}
