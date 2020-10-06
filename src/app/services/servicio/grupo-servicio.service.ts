import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
	providedIn: 'root',
})
export class GrupoServicioService {
	constructor(public http: HttpClient, public usuarioService: UsuarioService) {}

	getGrupos() {
		let url = URL_SERVICIOS + `/v1/grupos-servicios`;

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions);
	}
}
