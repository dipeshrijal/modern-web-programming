import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="col s12 m3">
      <div class="card">
        <div class="card-image">
          <img src="../../assets/cover.jpeg">
          <span class="card-title">Card Title</span>
          <a href="#modal1"
             class="edit btn-floating halfway-fab waves-effect waves-light blue darken-3 modal-trigger">
            <i class="material-icons">create</i>
          </a>
          <a href="#"
             class="btn-floating halfway-fab waves-effect waves-light red darken-3">
            <i class="material-icons">delete</i>
          </a>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I
             require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../app.component.css']

})
export class CardComponent {

}
