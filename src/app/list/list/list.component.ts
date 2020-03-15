/*
import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users = [];

  constructor(
    private service: DataService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.users = this.service.list();
  }

  goToDetails(userId: string) {
    this.router.navigate(['details', userId]);
  }
}*/
