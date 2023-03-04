import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Condidat } from '../models/condidat.model';
import { Entreprise } from '../models/entreprise.model';


const httpOptions ={
  headers: new HttpHeaders ({'Content-Type': 'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedUser : string
  public loggedUserId : number
  public isConnected : boolean = false
  public loggedUserRole : string
  private entApiUrl = "http://localhost:8081/api/entreprise"
  private empApiUrl = "http://localhost:8081/api/condidat"

  constructor(private router : Router, private http: HttpClient) { }

  /* Entreprise */

  getEntFromDb(loginOrEmail: string): Observable<Entreprise> {
    const url = `${this.entApiUrl + "/login"}/${loginOrEmail}`
    return this.http.get<Entreprise>(url)
  }

  addNewEnt(ent : Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(this.entApiUrl, ent, httpOptions)
  }

  /* Condidat */

  getEmpFromDb(loginOrEmail : string):Observable<Condidat> {
    const url = `${this.empApiUrl + "/login"}/${loginOrEmail}`
    return this.http.get<Condidat>(url)
  }

  addNewEmp(emp : Condidat):Observable<Condidat> {
    return this.http.post<Condidat>(this.empApiUrl, emp, httpOptions)
  }

  /* Login - Logout */


  loginUser(user : any , role : string) {
    this.isConnected = true
    this.loggedUserRole = role
    if(role == 'ENT') {
      this.loggedUser = user.nomEntreprise
      this.loggedUserId = user.idEntreprise
    }else {
      this.loggedUser = user.nomCondidat + " " + user.prenomCondidat
      this.loggedUserId = user.idCondidat
    }

    localStorage.setItem('isConnected', String(this.isConnected))
    localStorage.setItem('loggedUserRole', this.loggedUserRole)
    localStorage.setItem('loggedUser', this.loggedUser)
    localStorage.setItem('loggedUserId', String(this.loggedUserId))
  }

  logoutUser() {
    this.isConnected = false
    this.loggedUser = undefined
    localStorage.removeItem('loggedUserRole')
    localStorage.removeItem('loggedUser')
    localStorage.removeItem('loggedUserId')
    localStorage.setItem('isConnected',String(this.isConnected))
    this.router.navigate(['/home'])
  }

  /* Set data to local storage */

  setLoggedUserDataToLocalStorage(loggedUser: string , loggedUserId: number , loggedUserRole: string){
    this.isConnected = true
    this.loggedUser = loggedUser
    this.loggedUserId = loggedUserId
    this.loggedUserRole = loggedUserRole
  }

}
