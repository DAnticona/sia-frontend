import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-reporte-saldos-ubicacion',
	templateUrl: './reporte-saldos-ubicacion.component.html',
	styles: [],
})
export class ReporteSaldosUbicacionComponent implements OnInit {
	// Radar
	public radarChartOptions: RadialChartOptions = {
		responsive: true,
	};
	public radarChartLabels: Label[] = [
		'Almacén 1',
		'Almacén 2',
		'Almacén 3',
		'Almacén 4',
		'Almacén 5',
		'Almacén 6',
		'Almacén 7',
	];

	public radarChartData: ChartDataSets[] = [
		{ data: [65, 59, 60, 81, 44, 55, 40], label: 'Series A' },
		{ data: [28, 48, 40, 19, 56, 27, 60], label: 'Series B' },
	];
	public radarChartType: ChartType = 'radar';

	constructor() {}

	ngOnInit(): void {}
	// events
	public chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}

	public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}
}
