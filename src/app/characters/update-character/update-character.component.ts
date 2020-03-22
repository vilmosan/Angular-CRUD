import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-character',
  templateUrl: './update-character.component.html',
  styleUrls: ['./update-character.component.css']
})
export class UpdateCharacterComponent implements OnInit {

  character$: Observable<Character>;

  statuses = ['Alive', 'Dead', 'Hibernated'];

  constructor(
    private activedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.character$ = this.activedRoute.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.dataService.getCharacter(params.get('id')))
    );
  }

  goToCharacters(character: Character) {
    let characterId = character ? character.id : null;
    // Pass along the character id if available so that the ListOfCharacters component can select that character.
    this.router.navigate(['/characters', { id: characterId }]);
  }
}
