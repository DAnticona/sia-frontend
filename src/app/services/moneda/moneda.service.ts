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
export class MonedaService {
	constructor(public http: HttpClient, public usuarioService: UsuarioService) {}

	getAll() {
		let url = URL_SERVICIOS + '/v1/monedas';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions);
	}

	getById(id: number) {
		let url = URL_SERVICIOS + `/v1/cotizaciones/${id}`;

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions);
	}
}
