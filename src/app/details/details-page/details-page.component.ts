import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: DataService
  ) {
  }

  ngOnInit(): void {
    this.user = this.service.findById(this.activatedRoute.snapshot.params.id);
  }

  save() {
    this.service.save(this.user);
  }

}
