import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from '../models/entreprise.model';
import { OffreEmploi } from '../models/offreDemploi.model';
import { Post } from '../models/post.model';
import { AuthService } from '../services/auth.service';
import { GestionService } from '../services/gestion.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  offre : OffreEmploi = new OffreEmploi();
  listOffres : OffreEmploi[] = []
  listImages : String[] = []
  image : any 
  numberOfOffres : number = 0
  post = new Post()
  currentOffre = new OffreEmploi();
  selectedFile: File
  dataSended : boolean = false

  constructor(private service : GestionService, private router : Router , public auth : AuthService) { }


  sendData(id : number) {
    this.post.postulerCondidat = this.post.telCondidat + this.selectedFile.name
    this.service.getOffreById(id).subscribe(offre => {
      this.currentOffre = offre
      this.post.offre = this.currentOffre
      this.service.addNewPost(this.post).subscribe(() => {
        this.service.upload(this.selectedFile, this.post.postulerCondidat).subscribe(event => {
          this.dataSended = true 

          this.post.nomCondidat = ""
          this.post.prenomCondidat = ""
          this.post.emailCondidat = ""
          this.post.telCondidat = ""
          this.post.offre = null
        })
      })
    })
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  ngOnInit(): void {
    this.service.listOffres().subscribe(offres => {
      this.listOffres = offres
      this.numberOfOffres = offres.length

      for (let index = 0; index < this.listOffres.length; index++) {
        this.service.loadImage(this.listOffres[index].entreprise.image.idImage).subscribe((res: any) => {
          //console.log(res.name)
          this.listImages[index] = ('data:' + res.type + ';base64,' + res.image)
        })
      }
    })
  }

}
