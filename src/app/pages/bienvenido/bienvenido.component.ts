import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
	selector: 'app-bienvenido',
	templateUrl: './bienvenido.component.html',
	styles: [],
})
export class BienvenidoComponent implements OnInit {
	usuario: any;
	constructor(public usuarioService: UsuarioService) {
		this.usuario = usuarioService.usuario;
	}

	ngOnInit(): void {}
}
