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
export class DepositoTemporalService {
	constructor(public http: HttpClient, public usuarioService: UsuarioService) {}

	getDepositos() {
		let url = URL_SERVICIOS + '/v1/depositos-temporales';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions);
	}

	createDeposito(deposito: any) {
		let url = URL_SERVICIOS + '/v1/depositos-temporales';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.post(url, deposito, httpOptions).pipe(
			map(res => {
				Swal.fire({
					title: 'Almacén Aduanero creado',
					text: deposito.nombre,
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

	getDepositoById(id: number) {
		let url = URL_SERVICIOS + `/v1/depositos-temporales/${id}`;

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions);
	}

	updateDeposito(deposito: any) {
		let url = URL_SERVICIOS + '/v1/depositos-temporales';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.put(url, deposito, httpOptions).pipe(
			map(res => {
				Swal.fire({
					title: 'Almacén Aduanero actualizado',
					text: deposito.nombre,
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
