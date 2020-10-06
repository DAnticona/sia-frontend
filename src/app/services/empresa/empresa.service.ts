import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario/usuario.service';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { throwError } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class EmpresaService {
	constructor(public http: HttpClient, public usuarioService: UsuarioService) {}

	getCompanies(pageNu: number) {
		let url = URL_SERVICIOS + `/v1/empresas/slice/${pageNu}`;
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

	getCompanyById(id: number) {
		let url = URL_SERVICIOS + `/v1/empresas/${id}`;
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

	searchByRuc(term: string) {
		let url = URL_SERVICIOS + `/v1/empresas/ruc/${term}`;

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions);
	}

	searchByName(term: string) {
		let url = URL_SERVICIOS + `/v1/empresas/razon-social/${term}`;

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.get(url, httpOptions);
	}

	createCompany(company: any) {
		let url = URL_SERVICIOS + '/v1/empresas';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.post(url, company, httpOptions).pipe(
			map((res: any) => {
				Swal.fire({
					title: 'Empresa registrada',
					text: res.object.razonSocial,
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

	updateCompany(company: any) {
		let url = URL_SERVICIOS + '/v1/empresas';

		const httpOptions = {
			headers: new HttpHeaders({
				Authorization: `bearer ${this.usuarioService.token}`,
				'Content-Type': 'application/json',
			}),
		};

		return this.http.put(url, company, httpOptions).pipe(
			map((res: any) => {
				Swal.fire({
					title: 'Empresa actualizada',
					text: res.object.razonSocial,
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
