import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from '../models/entreprise.model';
import { Image } from '../models/image.model';
import { AuthService } from '../services/auth.service';
import { GestionService } from '../services/gestion.service';

@Component({
  selector: 'app-register-business',
  templateUrl: './register-business.component.html',
  styleUrls: ['./register-business.component.css']
})
export class RegisterBusinessComponent implements OnInit {

  created: boolean = false
  pwdError: boolean = false
  newEnt = new Entreprise()
  confirmPwd: string
  uploadedImage: File;
  image: any;
  response: any

  constructor(private service: GestionService, private router: Router) { }

  onRegister() {
    if (
      this.newEnt.nomEntreprise != null &&
      this.newEnt.descriptionEnt != null &&
      this.newEnt.matriculeFiscaleEnt != null &&
      this.newEnt.raisonSocialEnt != null &&
      this.newEnt.emailEnt != null &&
      this.newEnt.telephoneEnt != null &&
      this.newEnt.adresseEnt != null &&
      this.newEnt.loginEnt != null &&
      this.newEnt.passwordEnt != null
    ) {

      //if (this.newEnt.passwordEnt == this.confirmPwd) {
        this.service.uploadImage(this.uploadedImage, this.uploadedImage.name).subscribe((response: any) => {
          this.service.loadImage(response.idImage).subscribe((image: any) => {
            let img = new Image();
            img.idImage = image.idImage
            img.name = image.name
            img.type = image.type
            img.image = image.image
            this.newEnt.image = new Image()
            this.newEnt.image = img
            this.service.addNewEntreprise(this.newEnt).subscribe((ent) => {
              console.log(ent)
              this.created = true
              this.pwdError = false
            },(err) => {
              this.created = false;
              alert("ENTREPRISE EXISTE");
            })

            this.newEnt.nomEntreprise = null
            this.newEnt.descriptionEnt = null
            this.newEnt.matriculeFiscaleEnt = null
            this.newEnt.raisonSocialEnt = null
            this.newEnt.emailEnt = null
            this.newEnt.telephoneEnt = null
            this.newEnt.adresseEnt = null
            this.newEnt.loginEnt = null
            this.newEnt.passwordEnt = null
            this.confirmPwd = null
            this.uploadedImage = undefined
          })
        })
     // } else {
      //  this.pwdError = true
     // }

    }

    this.created = false
  }

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }

  ngOnInit(): void {
  }

}
