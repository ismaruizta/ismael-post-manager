import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewPost, Post } from '../../interfaces/post.interfaces';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormMode } from '../../enums/form-mode.enum';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],

})
export class PostFormComponent {
  postForm: FormGroup;
  @Input() mode: FormMode = FormMode.NEW;
  @Input() body:string = "";
  @Input() title:string = "";
  @Input() id:string = "";
  

  @Output() setPost = new EventEmitter<NewPost>();
  @Output() setMode = new EventEmitter<FormMode>();

  constructor(private fb: FormBuilder) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  handleClear(){
    this.clear();
  }
  
  clear(){
    this.body = "";
    this.title = "";
    this.mode = FormMode.NEW;
    this.setMode.emit(FormMode.NEW)
  }


  onSubmit() {
    const {body, title, id} = this;
    const post:Post = { body,title, id }
    this.setPost.emit(post)
  }
}
