import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

diego: string='Diego takes care of the communication with the users and the quality of their experience. The latest to join the project, his professionalism and dedication to the project make him a partner of unparalleled competence.';
anton: string="Anton is the founder and developer of the project. And since he is the author of this description, he won't say anything more, just to make sure he's not talking nonsense";
nathan: string='Nathan is involved in advising the LightnigSchool project.  He is the second partner to join the project; his opinion influences the project strongly and remains very constructive.  Nathan is the piece of the puzzle that makes the project so effective. ';

  constructor() { }

  ngOnInit(): void {
  }

}
