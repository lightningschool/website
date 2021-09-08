import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

foss: string='LightningSchool project is a completely free and open source project under the MIT license, the most permissive in the world. Anyone can read the source code of our service freely on Github.';
free: string='Education is a right; not a luxury. LightningSchool project is therefore entirely free and is funded by donations.';
privacy: string='Privacy is an essential right that is too often violated. LightningSchool project, on the other hand, follows a strict privacy policy; we do not sell or monetise your data. We collect the minimum amount of metadata and combine this with a high level of security.';
users: string='The user experience is very regularly missed by most other digital workspaces for schools; between mediocre UI, unintuitive or old looking interfaces, nothing is excellent. LightningSchool project on the other hand has a modern and clean interface, very intuitive and pleasant to use.';
stability: string='Another disadvantage of other digital workspaces is their stability. They are often very unstable and cannot handle a large influx of connections (such as a lockdown).LightningSchool project is stable; you are very unlikely to find our service unstable.';
by: string='LightningSchool project is the first digital workspace for schools to be run by users of these services. We are three teenagers and we think we can make schools better.';

  constructor() { }

  ngOnInit(): void {
  }

}
