import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'application-gestion-clinet-side';

  constructor(private auth : AuthService , private router : Router){}


  ngOnInit(): void {
      let isConnected 
      let loggedUser 
      let loggedUserId
      let loggedUserRole 

      isConnected = localStorage.getItem('isConnected')
      loggedUser = localStorage.getItem('loggedUser')
      loggedUserId = localStorage.getItem('loggedUserId')
      loggedUserRole = localStorage.getItem('loggedUserRole')

      if(isConnected === "false" || !isConnected || !loggedUserId) {
        this.router.navigate(['/home'])
      } else {
        this.auth.setLoggedUserDataToLocalStorage(loggedUser , parseInt(loggedUserId) , loggedUserRole)
      }
  }
}
