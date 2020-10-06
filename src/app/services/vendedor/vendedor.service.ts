import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { URL_SERVICIOS } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { throwError } from 'rxjs';
import { Vendedor } from '../../models/vendedor.model';

@Injectable({
	providedIn: 'root',
})
export class VendedorService {
	constructor(public usuarioService: UsuarioService, public http: HttpClient) {}

	getSeller(id: number) {
		let url = URL_SERVICIOS + `/v1/vendedores/${id}`;

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions).pipe(
			map((res: any) => {
				return res;
			}),
			catchError(err => {
				console.log(err);
				Swal.fire(err.error.message, err.error.message, 'error');
				return throwError(err);
			})
		);
	}

	getSellers() {
		let url = URL_SERVICIOS + '/v1/vendedores';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions).pipe(
			map((res: any) => {
				return res;
			}),
			catchError(err => {
				console.log(err);
				Swal.fire(err.error.message, err.error.message, 'error');
				return throwError(err);
			})
		);
	}

	createSeller(vendedor: Vendedor) {
		let vendedorDB = {
			idTipoDocumento: vendedor.idTipoDocumento,
			numeroDocumento: vendedor.nuDocumento,
			nombres: vendedor.nombres,
			apellidoPaterno: vendedor.apPaterno,
			apellidoMaterno: vendedor.apMaterno,
			sexo: vendedor.sexo,
			fechaNacimiento: vendedor.feNacimiento,
			email: vendedor.email,
		};

		console.log(vendedorDB);
		let url = URL_SERVICIOS + '/v1/vendedores';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.post(url, vendedorDB, httpOptions).pipe(
			map((res: any) => {
				// if (persona.id === this.usuarioService.usuario.id) {
				// 	console.log(res);
				// 	this.usuarioService.usuario.id = res.id;
				// 	this.usuarioService.usuario.nombres = res.name;
				// 	this.usuarioService.usuario.apPaterno = res.lastname;
				// 	this.usuarioService.usuario.username = res.username;
				// 	this.usuarioService.usuario.email = res.email;
				// 	this.usuarioService.usuario.sexo = res.gender;
				// 	this.usuarioService.guardarStorage(
				// 		this.usuarioService.usuario,
				// 		this.usuarioService.token,
				// 		this.usuarioService.menus
				// 	);
				// }

				Swal.fire({
					title: 'Datos actualizados',
					text: vendedor.nombres,
					icon: 'success',
				});

				return res;
			}),
			catchError(err => {
				console.log(err);
				Swal.fire(err.error.message, err.error.message, 'error');
				return throwError(err);
			})
		);
	}

	updateSeller(vendedor: Vendedor) {
		let vendedorDB = {
			idPersona: vendedor.id,
			idTipoDocumento: vendedor.idTipoDocumento,
			numeroDocumento: vendedor.nuDocumento,
			nombres: vendedor.nombres,
			apellidoPaterno: vendedor.apPaterno,
			apellidoMaterno: vendedor.apMaterno,
			sexo: vendedor.sexo,
			fechaNacimiento: vendedor.feNacimiento,
			email: vendedor.email,
		};

		console.log(vendedorDB);
		let url = URL_SERVICIOS + '/v1/vendedores';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.put(url, vendedorDB, httpOptions).pipe(
			map((res: any) => {
				// if (persona.id === this.usuarioService.usuario.id) {
				// 	console.log(res);
				// 	this.usuarioService.usuario.id = res.id;
				// 	this.usuarioService.usuario.nombres = res.name;
				// 	this.usuarioService.usuario.apPaterno = res.lastname;
				// 	this.usuarioService.usuario.username = res.username;
				// 	this.usuarioService.usuario.email = res.email;
				// 	this.usuarioService.usuario.sexo = res.gender;
				// 	this.usuarioService.guardarStorage(
				// 		this.usuarioService.usuario,
				// 		this.usuarioService.token,
				// 		this.usuarioService.menus
				// 	);
				// }

				Swal.fire({
					title: 'Datos actualizados',
					text: vendedor.nombres,
					icon: 'success',
				});

				return res;
			}),
			catchError(err => {
				console.log(err);
				Swal.fire(err.error.message, err.error.message, 'error');
				return throwError(err);
			})
		);
	}
}
