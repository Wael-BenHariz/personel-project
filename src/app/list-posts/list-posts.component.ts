import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { GestionService } from '../services/gestion.service';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  listPosts : Post[] = []
  numberOfPosts : number = 0

  constructor(private service : GestionService) { }

  getUrl(name: string , type : string) {
    this.service.getFile(name).subscribe((url) => {
      switch (url.type) {
        case HttpEventType.Response:
          const downloadedFile = new Blob([url.body], { type: url.body.type });
          const a = document.createElement('a');
          a.setAttribute('style', 'display:none;');
          document.body.appendChild(a);
          a.href = URL.createObjectURL(downloadedFile);
          a.target = '_blank';
          if(type == "download") {
            a.download = name
          } 
          a.click();
          document.body.removeChild(a);
          break;
      }
    })
  }


  ngOnInit(): void {
    let entId = parseInt(localStorage.getItem('loggedUserId'))

    this.service.getAllPostsFiltredByIdEnt(entId).subscribe(posts => {
      this.listPosts = posts
      this.numberOfPosts = posts.length
    })
  }

}
