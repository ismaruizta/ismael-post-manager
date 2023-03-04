import { Component, OnInit } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { from, map, Observable, of, pipe } from 'rxjs';
import { PageQueryOptions, Post } from 'src/app/interfaces/post.interfaces';
import { PostServiceService } from 'src/app/services/post-items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page:number;
  limit:number;
  queryRef!: QueryRef<any>;
  posts!: Post[];
  
  constructor( private postItemService:PostServiceService ){
    this.page = 1;
    this.limit = 50;
  }

  ngOnInit(): void {
    this.queryRef = this.postItemService.getPosts( this.page, this.limit);
    this.setPosts();
  }

  setPosts(){
    this.queryRef.valueChanges.pipe(
      map((result) => result.data.posts.data)
    ).subscribe((data:any)=> this.posts = data );
  }

  newPost(){
    this.postItemService.createPost().subscribe((data:any)=>{
      console.log(data);
    })
  }

  handleDelete( id: number ){
    this.postItemService.deletePost( id ).pipe(map((result)=>result.data))
    .subscribe((data:any)=>{
      // TODO - handle posts
    })
  }


  updatePost(){
    this.postItemService.updatePost().subscribe((data:any)=>{
      console.log(data);
    })
  }

  hasMore(){
    return this.queryRef.getLastResult().data.posts.meta.totalCount > this.page * this.limit;
  }

  loadMore(){
    if ( this.hasMore() ) {
      const options: PageQueryOptions = {
          options: {
            paginate: {
              page: this.page + 1,
              limit: this.limit,
            },
          },
      };

      this.queryRef.fetchMore({
        variables:{
          ...options
        }
      }).then(( result )=>{
        this.page ++;
        const data = result.data;
        const newPosts = data.posts.data;
        this.posts = [...this.posts, ...newPosts]
      })
    }
  }
}
