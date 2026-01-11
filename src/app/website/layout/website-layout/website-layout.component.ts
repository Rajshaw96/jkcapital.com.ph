import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-website-layout',
  templateUrl: './website-layout.component.html'
})
export class WebsiteLayoutComponent implements OnInit {

  showLayout = true;
  lastOnlineUrl = '/';

  constructor(private router: Router) {}

  ngOnInit(): void {

    // Track navigation and control layout
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe(event => {

        // Save last NON-offline URL
        if (!event.urlAfterRedirects.includes('/offline')) {
          this.lastOnlineUrl = event.urlAfterRedirects;
        }

        // Hide layout only for offline & 404
        this.showLayout = !(
          event.urlAfterRedirects.includes('/offline') ||
          event.urlAfterRedirects.includes('/404')
        );
      });

    // When internet goes OFFLINE
    window.addEventListener('offline', () => {
      this.router.navigateByUrl('/offline', { replaceUrl: true });
    });

    // ✅ When internet comes back ONLINE
    window.addEventListener('online', () => {
      this.router.navigateByUrl(this.lastOnlineUrl || '/', {
        replaceUrl: true
      });
    });
  }
}
