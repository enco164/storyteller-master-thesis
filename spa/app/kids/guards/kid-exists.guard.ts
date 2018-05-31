import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {KidsResource} from '../services/kids.resource';
import {catchError, map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as fromKids from '../store';
import * as kidsActions from '../store/actions/kids-actions';

@Injectable()
export class KidExistsGuard implements CanActivate {

  constructor(private kidsResource: KidsResource, private router: Router, private store: Store<fromKids.State>) {
  }

  hasKidInApi(id: string): Observable<boolean> {
    // this.store.dispatch(new kidsActions.Load(id));

    return this.kidsResource.getKidById(id).pipe(
      map(kidEntry => new kidsActions.LoadSuccess(kidEntry)),
      map(kidInStore => !!kidInStore),
      catchError(() => {
        this.router.navigate(['/404']);
        return of(false);
      })
    );
  }

  hasKid(id: string): Observable<boolean> {
    return this.hasKidInApi(id);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.hasKid(route.params['id']);
  }
}
