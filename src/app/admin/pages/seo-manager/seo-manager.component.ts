import { Component, OnInit } from '@angular/core';
import { SeoManagerService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-seo-manager',
  templateUrl: './seo-manager.component.html',
  styleUrls: ['./seo-manager.component.css']
})

export class SeoManagerComponent implements OnInit {

  seo: any = {};
  list: any[] = [];

  constructor(private seoService: SeoManagerService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.seoService.getAll().subscribe(res => this.list = res);
  }

  save() {
    this.seoService.create(this.seo).subscribe(() => {
      this.seo = {};
      this.load();
    });
  }
}