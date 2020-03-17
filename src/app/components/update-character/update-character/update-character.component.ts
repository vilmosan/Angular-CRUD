import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-update-character',
  templateUrl: './update-character.component.html',
  styleUrls: ['./update-character.component.css']
})
export class UpdateCharacterComponent implements OnInit {

  character: Character;

  constructor(
    private activedRoute: ActivatedRoute,
    private dataService: DataService,
    //private router: Router
  ) { }

  ngOnInit(): void {
    this.character = this.dataService.findById(this.activedRoute.snapshot.params.id);
  }
/*
  getCharacter(id){
    this.dataService.findById(id)
      .subscribe(
        data => {
          this.currentCharacter = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
*/
}
