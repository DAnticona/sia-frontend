import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
	providedIn: 'root',
})
export class AdminGuard implements CanActivate {
	constructor(public usuarioService: UsuarioService) {}
	canActivate() {
		if (this.usuarioService.usuario.rol.noRol === 'ADMIN_ROLE') {
			return true;
		} else {
			return false;
		}
	}
}
