//GET character by id. Will 404 if id not found */
/* getCharacter(id: number | string): Observable<Character> {
  const url = `${this.charactersUrl}/${id}`;
  return this.http.get<Character>(url).pipe(
    tap(_ => this.log(`Fetched character id=${id}`)),
    catchError(this.handleError<Character>(`getCharacter id=${id}`))
  );
}
 */

/*
<!--
<div>
<h1>Character details for character: {{ character.name }} </h1>
<form novalidate ngForm="#f">
  <div class="form-group">
    <label for="exampleFormControlInput1">ID</label>
    <input type="text" name="id" class="form-control" id="exampleFormControlInput1" [value]="character.id" disabled>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Name</label>
    <input type="text" name="name" class="form-control" id="exampleFormControlInput2" [(ngModel)]="character.name" required #nameInput="ngModel">
    <span style="color: red" *ngIf="name.invalid">Name is required</span>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Username</label>
    <input type="text" name="username" class="form-control" id="exampleFormControlInput3" [(ngModel)]="character.username" #city="ngModel" minlength="3" required>
    <span style="color: red" *ngIf="username.invalid">Username is invalid!</span>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email</label>
    <input type="text" name="email" class="form-control" id="exampleFormControlInput3" [(ngModel)]="character.email" #city="ngModel" minlength="3" required>
    <span style="color: red" *ngIf="email.invalid">Email is invalid!</span>
  </div>
  <button class="btn btn-info" (click)="save()">Save</button>
</form>
</div>
-->
*/