import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { URL_SERVICIOS } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { throwError } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ServicioService {
	constructor(public http: HttpClient, public usuarioService: UsuarioService) {}

	getServicios() {
		let url = URL_SERVICIOS + '/v1/servicios';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions);
	}

	createServicio(servicio: any) {
		let url = URL_SERVICIOS + '/v1/servicios';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.post(url, servicio, httpOptions).pipe(
			map(res => {
				Swal.fire({
					title: 'Servicio registrado',
					text: servicio.nombre,
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

	getServicio(id: number) {
		let url = URL_SERVICIOS + `/v1/servicios/${id}`;

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions);
	}

	updateServicio(servicio: any) {
		let url = URL_SERVICIOS + '/v1/servicios';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.put(url, servicio, httpOptions).pipe(
			map(res => {
				Swal.fire({
					title: 'Servicio actualizado',
					text: servicio.nombre,
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
