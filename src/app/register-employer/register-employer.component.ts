import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Condidat } from '../models/condidat.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-employer',
  templateUrl: './register-employer.component.html',
  styleUrls: ['./register-employer.component.css']
})
export class RegisterEmployerComponent implements OnInit {

  created : boolean = false 
  pwdError : boolean = false 
  newEmp = new Condidat()
  confirmPwd : string

  constructor(private auth : AuthService , private router : Router) { }

  onRegister() {
    if (
      this.newEmp.nomCondidat != null &&
      this.newEmp.prenomCondidat != null &&
      this.newEmp.emailCondidat != null && 
      this.newEmp.telephoneCondidat != null &&
      this.newEmp.loginCondidat != null &&
      this.newEmp.passwordCondidat != null 
    ) {
      if(this.confirmPwd == this.newEmp.passwordCondidat) {
        this.auth.addNewEmp(this.newEmp).subscribe(emp => {
          this.created = true
          this.pwdError = false
        })
        this.newEmp.nomCondidat = null
        this.newEmp.prenomCondidat = null
        this.newEmp.emailCondidat = null
        this.newEmp.telephoneCondidat = null
        this.newEmp.loginCondidat = null
        this.newEmp.passwordCondidat = null
        this.confirmPwd = null
      } else {
        this.pwdError = true
      }
    }

    this.created = false
  }

  ngOnInit(): void {
  }

}
