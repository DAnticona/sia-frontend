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
export class TipoMercanciaService {
	constructor(public http: HttpClient, public usuarioService: UsuarioService) {}

	getTipos() {
		let url = URL_SERVICIOS + '/v1/tipos-mercancias';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions);
	}

	createTipo(tipo: any) {
		let url = URL_SERVICIOS + '/v1/tipos-mercancias';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.post(url, tipo, httpOptions).pipe(
			map(res => {
				Swal.fire({
					title: 'Tipo de Mercancía registrada',
					text: tipo.nombre,
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

	getTipo(id: number) {
		let url = URL_SERVICIOS + `/v1/tipos-mercancias/${id}`;

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

	updateTipo(tipo: any) {
		let url = URL_SERVICIOS + '/v1/tipos-mercancias';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.put(url, tipo, httpOptions).pipe(
			map(res => {
				Swal.fire({
					title: 'Tipo de Mercancía actualizada',
					text: tipo.nombre,
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
