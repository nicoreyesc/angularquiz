import { Component, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Output() topic = '';

  constructor(private router: Router) {}

  onSubmit(template: any) {
    this.router.navigate(['/quiz', this.topic]);
    console.log(this.topic);
  }
}
