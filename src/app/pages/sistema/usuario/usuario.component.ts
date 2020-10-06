import { Component, OnInit, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { RolService } from '../../../services/rol/rol.service';
import { TipoDocumentoService } from '../../../services/tipo-documento/tipo-documento.service';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styles: [],
	providers: [DatePipe],
})
export class UsuarioComponent implements OnInit {
	user: any = {};
	docTypes: any[] = [];
	roles: any[] = [];
	active = true;

	constructor(
		public userService: UsuarioService,
		public activatedRoute: ActivatedRoute,
		public router: Router,
		public docTypeService: TipoDocumentoService,
		public roleService: RolService,
		private datePipe: DatePipe
	) {
		this.docTypeService.getTipos().subscribe((res: any) => {
			console.log(res);
			this.docTypes = res.object;
		});

		this.roleService.getRoles().subscribe((res: any) => {
			console.log(res);
			this.roles = res.object;
		});

		this.activatedRoute.params.subscribe(params => {
			this.user.activeFg = this.active ? 'S' : 'N';
			if (params.id !== 'nuevo') {
				let id = Number(params.id);
				this.userService.encontrarUsuarioPorId(id).subscribe((res: any) => {
					console.log(res);
					this.user = res.object;
					this.user.idRol = res.object.rol.idRol;
					this.user.fechaNacimiento = this.datePipe.transform(
						new Date(res.object.fechaNacimiento),
						'yyyy-MM-dd'
					);
					this.user.idTipoDocumento = res.object.tipoDocumento.idTipoDocumento;
				});
			}
		});
	}

	ngOnInit(): void {}

	activeValue(value: string) {
		console.log(value);
		this.user.activeFg = value;
	}

	guardar() {
		console.log(this.user);
		if (this.user.idPersona) {
			this.userService.actualizarUsuario(this.user).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/usuarios', res.object.idPersona]);
			});
		} else {
			this.userService.createUser(this.user).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/usuarios', res.object.idPersona]);
			});
		}
	}

	changePassword(password: string) {
		this.userService.changeOtherPassword(this.user.id, password).subscribe(res => {
			console.log(res);
		});
	}

	volver() {
		this.router.navigate(['/usuarios']);
	}
}
