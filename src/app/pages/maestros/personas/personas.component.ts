import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../../../services/persona/persona.service';

@Component({
	selector: 'app-personas',
	templateUrl: './personas.component.html',
	styles: [],
})
export class PersonasComponent implements OnInit {
	personas: any[] = [];
	cargando = true;
	pageNu = 1;
	pages = 1;

	constructor(public router: Router, public personaService: PersonaService) {
		this.personaService.getPersons(this.pageNu).subscribe((res: any) => {
			console.log(res);
			this.personas = res.object;
			this.pages = Math.ceil(res.count / 10);
			this.cargando = false;
		});
	}

	getPersons(pageNu: number) {
		this.personaService.getPersons(pageNu).subscribe((res: any) => {
			this.personas = res.object;
			this.pageNu = Number(pageNu);
		});
	}

	ngOnInit(): void {}

	search(type: string, term: string) {
		this.cargando = true;
		if (term) {
			if (type === '1') {
				console.log('1');
				this.personaService.seacrhByDocument(term).subscribe((res: any) => {
					console.log(res);
					if (res.object) {
						this.router.navigate(['personas', res.object.idPersona]);
					}
					this.cargando = false;
				});
			} else if (type === '2') {
				this.personaService.seacrhByName(term).subscribe((res: any) => {
					console.log(res);
					this.personas = res.object;
					this.cargando = false;
				});
			}
		} else {
			this.personaService.getPersons(1).subscribe((res: any) => {
				console.log(res);
				this.personas = res.object;
				this.cargando = false;
			});
		}
	}

	edit(persona: any) {
		this.router.navigate(['personas', persona.idPersona]);
	}

	nuevo() {
		this.router.navigate(['personas', 'nuevo']);
	}
}
