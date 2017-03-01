import { Component } from '@angular/core';
import { HeroFormComponent  } from './hero-form.component';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <hero-form></hero-form>`,
})
export class AppComponent  { name = 'Angular'; }
