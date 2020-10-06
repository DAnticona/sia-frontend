import { Injectable } from '@angular/core';
import { UsuarioService } from '../usuario/usuario.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { throwError } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UbicacionService {
	constructor(public http: HttpClient, private usuarioService: UsuarioService) {}

	getUbicacionesByArea(id: number) {
		let url = URL_SERVICIOS + `/v1/ubicaciones/area/${id}`;

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions).pipe(
			map(res => {
				return res;
			}),
			catchError(err => {
				console.log(err);
				Swal.fire(err.error.message, err.error.message, 'error');
				return throwError(err);
			})
		);
	}

	createUbicacion(ubicacion: any) {
		let url = URL_SERVICIOS + `/v1/ubicaciones`;
		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.post(url, ubicacion, httpOptions);
	}

	updateUbicacion(ubicacion: any) {
		let url = URL_SERVICIOS + `/v1/ubicaciones`;
		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.put(url, ubicacion, httpOptions);
	}
}
