import { Component, OnInit, Input, NgModule } from '@angular/core';
import { PersonaService } from '../../../services/persona/persona.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TipoDocumentoService } from '../../../services/tipo-documento/tipo-documento.service';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'app-persona',
	templateUrl: './persona.component.html',
	styles: [],
	providers: [DatePipe],
})
export class PersonaComponent implements OnInit {
	persona: any = {};
	tiDocs: any[] = [];
	cargando = true;

	constructor(
		public personaService: PersonaService,
		public router: Router,
		public activatedRoute: ActivatedRoute,
		public tiDocService: TipoDocumentoService,
		public datePipe: DatePipe
	) {
		this.tiDocService.getTipos().subscribe((res: any) => {
			console.log(res);
			this.tiDocs = res.object;
		});

		this.activatedRoute.params.subscribe(params => {
			if (params.id !== 'nuevo') {
				let id = params.id;
				this.personaService.getPerson(id).subscribe((res: any) => {
					console.log(res);
					this.persona = res.object;
					this.persona.id = res.object.idPersona;
					this.persona.idTipoDocumento = res.object.tipoDocumento.idTipoDocumento;
					this.persona.fechaNacimiento = this.datePipe.transform(res.object.fechaNacimiento, 'yyyy-MM-dd');
				});
			}
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	search(term: string) {
		if (term) {
			this.cargando = true;
			this.personaService.seacrhByDocument(term).subscribe((res: any) => {
				console.log(res);
				if (res.object) {
					this.router.navigate(['personas', res.object.idPersona]);
				}
				this.cargando = false;
			});
		}
	}

	guardar(f: NgForm) {
		this.cargando = true;
		console.log(this.persona);
		if (this.persona.id) {
			this.personaService.actualizarPersona(this.persona).subscribe(
				res => {
					console.log(res);
					this.router.navigate(['personas', res.object.idPersona]);
					this.cargando = false;
				},
				(err: any) => {
					this.cargando = false;
				}
			);
		} else {
			this.personaService.crearPersona(this.persona).subscribe(
				res => {
					console.log(res);
					this.router.navigate(['personas', res.object.idPersona]);
					this.cargando = false;
				},
				(err: any) => {
					this.cargando = false;
				}
			);
		}
	}

	volver() {
		this.router.navigate(['/personas']);
	}
}
