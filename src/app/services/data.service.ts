import {Injectable} from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    localStorage.removeItem('data');
    const users = [];
    for (let i = 0; i < 10; i++) {
      const user = new User();
      user.id = 'id-id-id-' + i;
      user.name = 'Name ' + i;
      user.birthDate = new Date();
      user.city = 'City ' + i;
      users.push(user);
    }
    localStorage.setItem('data', JSON.stringify(users));
  }

  public list(): User[] {
    return JSON.parse(localStorage.getItem('data')) as User[];
  }

  public add(user: User) {
    const data = this.list();
    data.push(user);
    localStorage.setItem('data', JSON.stringify(data));
  }

  public save(user: User) {
    let data = this.list();
    data = data.filter(value => value.id !== user.id);
    data.push(user);
    localStorage.setItem('data', JSON.stringify(data));
  }

  public findById(id: string) {
    const data = this.list();
    for (const d of data) {
      if (d.id === id) {
        return d;
      }
    }
    return undefined;
  }

}
