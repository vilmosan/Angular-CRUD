import { Component, OnInit, Input, Output } from '@angular/core';
import { Character } from '../character.model';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-character',
  templateUrl: './update-character.component.html',
  styleUrls: ['./update-character.component.css']
})
export class UpdateCharacterComponent implements OnInit {

  @Input() character: Character;

  statuses = ['Alive', 'Dead', 'Hibernated', 'Unknown'];

  constructor(
    private activedRoute: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void{
    const id = +this.activedRoute.snapshot.paramMap.get('id');
    this.dataService.getCharacter(id)
      .subscribe(character => this.character = character);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    this.dataService.updateCharacter(this.character)
      .subscribe(() => this.goBack());
  }
}
