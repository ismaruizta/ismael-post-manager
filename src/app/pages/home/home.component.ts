import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormMode } from 'src/app/enums/form-mode.enum';
import { NewPost, Post, PostState } from 'src/app/interfaces/post.interfaces';
import { Store } from '@ngrx/store';
import { addPost, deletePost, loadPosts, updatePost } from 'src/app/actions/post.actions';
import { selectAllPosts } from 'src/app/stores/post.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page:number = 1;
  limit:number = 3;
  posts$: Observable<Post[]>  = this.store.select(selectAllPosts);
  editPost: Post | null = null;
  mode: FormMode = FormMode.NEW;
  
  constructor( private store: Store<PostState> ){}

  ngOnInit(): void {
    this.store.dispatch(loadPosts({page: this.page, limit:this.limit}));
  }

  handleSetPost( post:NewPost|Post ){
    if( this.mode === FormMode.NEW ){
      this.store.dispatch(addPost({post:post as NewPost}))
    }else if( this.mode === FormMode.EDIT){
      this.store.dispatch(updatePost({post:post as Post}))
    }
  }

  clearPost(){
    this.editPost = null
    this.mode = FormMode.NEW;
  }

  handleDelete( id: number ){
    this.store.dispatch(deletePost({id}))
  }

  handleEdit( post:Post ){
    this.editPost = post;
    this.mode = FormMode.EDIT;
  }

  handleSetMode( mode:FormMode ){
    this.mode = mode;
  }

  hasMore(){
    // TODO
    return false;
  }

  loadMore(){
    // TODO
  }
}
