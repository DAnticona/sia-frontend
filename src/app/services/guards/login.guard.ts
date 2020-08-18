import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
	providedIn: 'root',
})
export class LoginGuard implements CanActivate {
	constructor(public usuarioService: UsuarioService, public router: Router) {}
	canActivate(): boolean {
		if (this.usuarioService.estaLogueado()) {
			return true;
		} else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}