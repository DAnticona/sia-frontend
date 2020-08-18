import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styles: [],
})
export class BreadcrumbsComponent implements OnInit {
	titulo: string;
	padre: string;
	rutaPadre: string;
	esPadre: boolean;
	// esPadre: boolean;
	constructor(private router: Router, private title: Title) {
		this.getDataRoute().subscribe(data => {
			this.titulo = data.titulo;
			this.padre = data.padre;
			this.rutaPadre = data.rutaPadre;
			this.esPadre = data.esPadre;
			// this.esPadre = data.esPadre;
			// if (!this.esPadre) {

			// }
		});
	}

	ngOnInit(): void {}

	private getDataRoute() {
		return this.router.events.pipe(
			filter(evento => evento instanceof ActivationEnd),
			filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
			map((evento: ActivationEnd) => evento.snapshot.data)
		);
	}
}
