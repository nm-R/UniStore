import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UniStore-site');
  route = ''
  isopen = false
  togglenav(){
    this.isopen = !this.isopen
  }

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.route = this.router.url.substring(1);
    });
  }



  isActiveRoute(route: string): boolean {
    if(this.route === route){
      return true
    }
    return false
  }
  navigateTo(route: string): void {
    this.route = route;
    this.router.navigate([`/${route}`]);
  }

}
