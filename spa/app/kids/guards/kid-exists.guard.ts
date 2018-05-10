import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {KidsService} from '../services/kids.service';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class KidExistsGuard implements CanActivate {

  constructor(private kidService: KidsService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.kidService.getKidById(route.params['id']).pipe(
      map(kid => !!kid),
      catchError(() => {
        this.router.navigate(['/404']);
        return of(false);
      })
    );
  }
}
