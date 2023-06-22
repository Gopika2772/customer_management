import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  constructor(private router: Router) { }

  userLogin() {

    this.router.navigate(['/login'])
  }

  adminLogin() {

    this.router.navigate(['/login'])
  }
  nav() {

    this.router.navigate(['/update'])
  }

}
