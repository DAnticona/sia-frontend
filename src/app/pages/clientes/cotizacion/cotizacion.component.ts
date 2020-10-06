import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CotizacionService } from '../../../services/cotizacion/cotizacion.service';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { VendedorService } from '../../../services/vendedor/vendedor.service';
import { MonedaService } from '../../../services/moneda/moneda.service';
import { AgenciasService } from '../../../services/agencias/agencias.service';

declare function cierra_modal(id);
declare function open_modal(id);

@Component({
	selector: 'app-cotizacion',
	templateUrl: './cotizacion.component.html',
	styles: [],
	providers: [DatePipe],
})
export class CotizacionComponent implements OnInit {
	cotizacion: any = {};
	cargando = false;
	items: any[] = [];
	item: any = {};
	clients: any[] = [];
	monedas: any[] = [];
	// client: any = {};

	constructor(
		public activatedRoute: ActivatedRoute,
		public router: Router,
		public datePipe: DatePipe,
		public cotizacionService: CotizacionService,
		public clienteService: ClienteService,
		public vendedorService: VendedorService,
		public monedaService: MonedaService,
		public agenciasService: AgenciasService
	) {
		this.cotizacion.fecha = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

		this.monedaService.getAll().subscribe((res: any) => {
			console.log(res);
			this.monedas = res.object;
		});

		this.activatedRoute.params.subscribe(params => {
			if (params.id !== 'nuevo') {
				let id = Number(params.id);
				this.cotizacionService.getById(id).subscribe((res: any) => {
					console.log(res);
					this.cotizacion = res.object;
					this.cotizacion.id = res.object.idCotizacion;
				});
			}
			this.cargando = false;
		});
	}

	ngOnInit(): void {}

	getClient(cliente: any) {
		console.log(cliente);
		this.cotizacion.idCliente = cliente.idCliente;
		if (cliente.empresa) {
			this.cotizacion.nombreCliente = cliente.empresa.razonSocial;
		} else if (cliente.persona) {
			this.cotizacion.nombreCliente = cliente.persona.nombres + cliente.persona.apellidoPaterno;
		}
		cierra_modal('clientes');
	}

	getSeller(seller: any) {
		console.log(seller);
		this.cotizacion.idVendedor = seller.idVendedor;
		this.cotizacion.nombreVendedor = `${seller.nombres} ${seller.apellidoPaterno}`;
		cierra_modal('sellers');
	}

	getAgencia(agencia: any) {
		console.log(agencia);
		this.cotizacion.idEmpresa = agencia.idEmpresa;
		this.cotizacion.agencia = `${agencia.codigoAduana} - ${agencia.razonSocial}`;
		cierra_modal('agencias');
	}

	getServicio(servicio: any) {
		console.log(servicio);
		// this.cotizacion.idEmpresa = servicio.idEmpresa;
		// this.cotizacion.agencia = `${agencia.codigoAduana} - ${agencia.razonSocial}`;
		cierra_modal('servicios');
	}

	addItem() {
		open_modal('servicios');
	}

	guardar(f: NgForm) {
		console.log(this.cotizacion);
		if (this.cotizacion.id) {
			this.cotizacionService.update(this.cotizacion).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/cotizaciones', res.object.idCotizacion]);
			});
		} else {
			this.cotizacionService.create(this.cotizacion).subscribe((res: any) => {
				console.log(res);
				this.router.navigate(['/cotizaciones', res.object.idCotizacion]);
			});
		}
	}

	volver() {
		this.router.navigate(['/cotizaciones']);
	}
}
