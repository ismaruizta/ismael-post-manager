import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interfaces';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  @Input() post!: Post;
  @Output() editPost = new EventEmitter<Post>();
  @Output() deletePost = new EventEmitter<number>();

  constructor(){}

  deleteItem(){
    this.deletePost.emit(parseInt(this.post.id));
  }

  updateItem(){
    this.editPost.emit(this.post);
  }

}
