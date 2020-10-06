import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../../models/persona.model';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { throwError } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PersonaService {
	constructor(public http: HttpClient, public usuarioService: UsuarioService) {}

	getPersons(pageNu: number) {
		let url = URL_SERVICIOS + `/v1/personas/slice/${pageNu}`;

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions);
	}

	getPerson(id: number) {
		let url = URL_SERVICIOS + `/v1/personas/${id}`;

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions);
	}

	crearPersona(persona: any) {
		let url = URL_SERVICIOS + '/v1/personas';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.post(url, persona, httpOptions).pipe(
			map((res: any) => {
				if (persona.idPersona === this.usuarioService.usuario.id) {
					console.log(res);
					this.usuarioService.usuario.id = res.id;
					this.usuarioService.usuario.nombres = res.name;
					this.usuarioService.usuario.apPaterno = res.lastname;
					this.usuarioService.usuario.username = res.username;
					this.usuarioService.usuario.email = res.email;
					this.usuarioService.usuario.sexo = res.gender;
					this.usuarioService.guardarStorage(
						this.usuarioService.usuario,
						this.usuarioService.token,
						this.usuarioService.menus
					);
				}

				Swal.fire({
					title: 'Persona registrada',
					text: res.object.nombres,
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

	actualizarPersona(persona: Persona) {
		let url = URL_SERVICIOS + '/v1/personas';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.put(url, persona, httpOptions).pipe(
			map((res: any) => {
				if (persona.id === this.usuarioService.usuario.id) {
					console.log(res);
					this.usuarioService.usuario.id = res.id;
					this.usuarioService.usuario.nombres = res.name;
					this.usuarioService.usuario.apPaterno = res.lastname;
					this.usuarioService.usuario.username = res.username;
					this.usuarioService.usuario.email = res.email;
					this.usuarioService.usuario.sexo = res.gender;
					this.usuarioService.guardarStorage(
						this.usuarioService.usuario,
						this.usuarioService.token,
						this.usuarioService.menus
					);
				}

				Swal.fire({
					title: 'Persona actualizada',
					text: res.object.nombres,
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

	seacrhByDocument(term: string) {
		let url = URL_SERVICIOS + `/v1/personas/numero-documento/${term}`;

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions);
	}

	seacrhByName(term: string) {
		let url = URL_SERVICIOS + `/v1/personas/nombre/${term}`;

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions);
	}
}
