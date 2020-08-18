import { Injectable } from '@angular/core';
import { Menu } from '../../models/menu.model';
import { MENU } from '../../mock-data/mock-menu';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
	providedIn: 'root',
})
export class SidebarService {
	constructor(public usuarioService: UsuarioService) {}
}
