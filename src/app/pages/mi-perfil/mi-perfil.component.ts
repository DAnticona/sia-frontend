import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { TipoDocumentoService } from '../../services/tipo-documento/tipo-documento.service';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-mi-perfil',
	templateUrl: './mi-perfil.component.html',
	styles: [],
	providers: [DatePipe],
})
export class MiPerfilComponent implements OnInit {
	usuario: any = {};
	tidocs: any[] = [];
	iguales = false;
	cargando = false;

	imagenSubir: File;
	imagenTemp: string | ArrayBuffer;

	constructor(
		public usuarioService: UsuarioService,
		public tipoDocumentoService: TipoDocumentoService,
		private datePipe: DatePipe
	) {
		this.tipoDocumentoService.getTipos().subscribe((res: any) => {
			console.log(res);
			this.tidocs = res.object;
		});
		this.usuario = this.usuarioService.usuario;
		this.cargando = true;
		this.usuarioService.encontrarUsuarioPorId(this.usuario.idPersona).subscribe((res: any) => {
			console.log(res);
			this.usuario = res.object;
			this.usuario.idRol = res.object.rol.idRol;
			this.usuario.idTipoDocumento = res.object.tipoDocumento.idTipoDocumento;
			this.usuario.fechaNacimiento = this.datePipe.transform(
				new Date(res.object.fechaNacimiento),
				'yyyy-MM-dd'
			);
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	guardar(f: NgForm) {
		console.log(this.usuario);
		this.cargando = true;
		this.usuarioService.actualizarUsuario(this.usuario).subscribe(
			res => {
				console.log(res);
				this.cargando = false;
			},
			(err: any) => {
				console.log(err);
				this.cargando = false;
			}
		);
	}

	seleccionImagen(archivo: File) {
		// if (!archivo) {
		// 	this.imagenSubir = null;
		// 	return;
		// }

		// if (archivo.type.indexOf('image') < 0) {
		// 	Swal.fire({
		// 		title: 'No es una imagen',
		// 		text: 'El archivo no es una imagen',
		// 		icon: 'error',
		// 	});
		// 	this.imagenSubir = null;
		// 	return;
		// }

		// this.imagenSubir = archivo;

		// let reader = new FileReader();
		// let urlImagenTemp = reader.readAsDataURL(archivo);

		// reader.onloadend = () => (this.imagenTemp = reader.result);
		console.log('Buscar Nueva Imagen');
	}

	cambiarImagen() {
		// this.userService.cambiarImagen(this.imagenSubir, this.user.id);
		console.log('Cambiar Imagen');
	}

	changePassword(password: string) {
		if (!this.iguales) {
			console.log('Las contraseñas no son iguales');
			return;
		}
		this.usuarioService.changeMyPassword(this.usuario.idPersona, password).subscribe(res => {
			console.log(res);
		});
	}

	checkPassword(password1: string, password2: string) {
		if (!password1 || password1 !== password2) {
			this.iguales = false;
			return;
		}
		this.iguales = true;
	}
}
