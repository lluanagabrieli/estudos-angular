import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    userData = {
        name: 'Robertinho',
        age: 24,
        city: 'Piranguinho'
  }; 

  colorStars = {
        bigStar: 'blue',
        mediumStar: 'orange',
        littleStar: 'red'
  };

  title = 'angular_study';
}
