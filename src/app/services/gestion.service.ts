import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Entreprise } from '../models/entreprise.model';
import { OffreEmploi } from '../models/offreDemploi.model';
import { Post } from '../models/post.model';
import { Message } from '../models/message.model';
import { Categorie } from '../models/categorie.model';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  private apiUrl = 'http://localhost:8081/api'


  constructor(private http: HttpClient) { }


  /* List entreprises */

  listOffres(): Observable<OffreEmploi[]> {
    return this.http.get<OffreEmploi[]>(this.apiUrl + "/offre")
  }

  /* Find entreprise by id */

  getEntrepriseById(id : number) : Observable<Entreprise> {
    const url = `${this.apiUrl + "/entreprise/id"}/${id}`
    return this.http.get<Entreprise>(url)
  }

  addNewEntreprise(entreprise : Entreprise) : Observable<Entreprise>{
    return this.http.post<Entreprise>(this.apiUrl + "/entreprise" , entreprise , httpOptions)
  }

  /* Find offre by id */

  getOffreById(id :number) : Observable<OffreEmploi> {
    const url = `${this.apiUrl + "/offre/id"}/${id}`
    return this.http.get<OffreEmploi>(url)
  }

  /* Upload image */

  uploadImage(file : File , filename : string) {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);

    const url = `${this.apiUrl + "/image/upload"}`

    return this.http.post(url , imageFormData)
  }


  /* Load image */

  loadImage(id : number) {
    const url = `${this.apiUrl + "/image/get/info"}/${id}`
    return this.http.get(url)
  }

  /* Add new post */

  addNewPost(post : Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl + "/post" , post , httpOptions)
  }

  /* Get all posts by id entreprise*/

  getAllPostsFiltredByIdEnt(id: number):Observable<Post[]> {
    const url = `${this.apiUrl + "/post/id"}/${id}`
    return this.http.get<Post[]>(url, httpOptions)
  }

  /* File uploading */

  upload(file : File , user : String):Observable<HttpEvent<any>>{
    const formData = new FormData();
    formData.append('file' , file);

    const url = `${this.apiUrl+"/file/upload"}/${user}`

    const req = new HttpRequest('POST', url , formData, {
		  reportProgress: true,
		  responseType: 'json'
		});

    return this.http.request(req)
  }

  getFile(name : String): Observable<HttpEvent<Blob>> {
    const url = `${this.apiUrl+"/file/load"}/${name}`
		return this.http.get(url , {
      reportProgress: true ,
      observe: 'events' ,
      responseType : 'blob'
    });
	}


  /* Send message to admin*/

  sendMessage(message : Message): Observable<Message> {
    return this.http.post<Message>(this.apiUrl + "/message" , message ,httpOptions)
  }


  /* Find categorie by id */

  getCategorieById(idCat : number) : Observable<Categorie> {
    const url = `${this.apiUrl + "/categorie/id"}/${idCat}`
    return this.http.get<Categorie>(url , httpOptions)
  }

  /* Add new offre */

  addNewOffreDemploi(offre : OffreEmploi) : Observable<OffreEmploi>{
    return this.http.post<OffreEmploi>(this.apiUrl + "/offre" , offre , httpOptions)
  }


  /* List entreprise */
  getEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.apiUrl + "/entreprise")
  }

  /* List categories */
  getCategories() : Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.apiUrl + "/categorie" , httpOptions)
  }

  /* Add new category */

  addNewCategorie(categorie : Categorie) : Observable<Categorie>{
    return this.http.post<Categorie>(this.apiUrl + "/categorie" , categorie , httpOptions)
  }


  /* Get offers by id entreprise */

  getOffersByIdEnt(id : number ) : Observable<OffreEmploi[]>{
    const url = `${this.apiUrl + "/offre/entid"}/${id}`
    return this.http.get<OffreEmploi[]>(url)
  }

  /* Get offers count */

  getCount(id : number ) : Observable<number>{
    const url = `${this.apiUrl + "/post/count"}/${id}`
    return this.http.get<number>(url)
  }

}
