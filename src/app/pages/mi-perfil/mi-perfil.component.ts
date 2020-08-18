import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
	selector: 'app-mi-perfil',
	templateUrl: './mi-perfil.component.html',
	styles: [],
})
export class MiPerfilComponent implements OnInit {
	usuario: Usuario;

	editarNoPers = false;
	editarApPate = false;
	editarApMate = false;
	editarCorreo = false;
	editarSexo = false;
	editarPasswd = false;

	constructor(public usuarioService: UsuarioService) {
		this.usuario = this.usuarioService.usuario;
	}

	ngOnInit(): void {}

	editar() {
		this.editarNoPers = true;
	}
}
