import { Component, OnInit } from '@angular/core';
import { OffreEmploi } from '../models/offreDemploi.model';
import { Post } from '../models/post.model';
import { GestionService } from '../services/gestion.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  listOffres : OffreEmploi[] = []
  myPostsCount : number = 0;
  countArray : number[] = [];

  constructor(private service : GestionService) { }

  ngOnInit(): void {
    let entId = parseInt(localStorage.getItem('loggedUserId'))

    this.service.getOffersByIdEnt(entId).subscribe(offre => {
      this.listOffres = offre
      this.myPostsCount = offre.length

      for(let i = 0; i < this.listOffres.length ; i++) {
        this.service.getCount(this.listOffres[i].idOffre).subscribe(count => {
          this.countArray[i] = count
        })
      }
    })
  }

}
