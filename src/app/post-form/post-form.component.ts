import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from '../interfaces/post.interfaces';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],

})
export class PostFormComponent {
  postForm: FormGroup;
  postTitle: string = "";
  postBody: string = "";

  @Output() setPost = new EventEmitter<Post>();

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  onSubmit() {
    const post:Post = {
      title: this.postTitle,
      body: this.postBody,
      id:"101"
    };

    this.setPost.emit(post)
  }
}
