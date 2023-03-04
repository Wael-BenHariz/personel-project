import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../models/categorie.model';
import { GestionService } from '../services/gestion.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  newCategorie = new Categorie()
  constructor(private service : GestionService , private router : Router) { }

  addCategorie() {
    this.service.addNewCategorie(this.newCategorie).subscribe(cat => {
      this.router.navigate(['newjob']).then(() => {
        window.location.reload()
      })
    })
  }

  ngOnInit(): void {
  }

}
