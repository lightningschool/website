import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

license: string='Source code regised under the MIT License and documentation under the CC0 1.0 Universal';

  constructor() { }

  ngOnInit(): void {
  }

}
