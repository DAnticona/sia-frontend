import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
	selector: 'app-reporte-cliente',
	templateUrl: './reporte-clientes.component.html',
	styles: [],
})
export class ReporteClientesComponent implements OnInit {
	words = [
		'Evergreen',
		'PMA',
		'Wollcorp',
		'Diamante',
		'ST-Computacion',
		'IBM',
		'Sagitario SAC',
		'TPP',
		'Webmas Perú',
		'Coelectus',
		'Ransa',
		'BCP',
		'Tottus',
		'Metro',
	];
	public pieChartOptions: ChartOptions = {
		responsive: true,
		legend: {
			position: 'top',
		},
		plugins: {
			datalabels: {
				formatter: (value, ctx) => {
					const label = ctx.chart.data.labels[ctx.dataIndex];
					return label;
				},
			},
		},
	};
	public pieChartLabels: Label[] = ['Evergreen', 'Spacewise', 'PMA'];
	public pieChartData: number[] = [300, 500, 100];
	public pieChartType: ChartType = 'pie';
	public pieChartLegend = false;
	public pieChartPlugins = [pluginDataLabels];
	public pieChartColors = [
		{
			backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
		},
	];

	constructor() {}

	ngOnInit(): void {}

	// events
	public chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}

	public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}

	changeLabels() {
		let nro = this.pieChartLabels.length;
		const randomWord = () => this.words[Math.trunc(Math.random() * this.words.length)];
		this.pieChartLabels = Array.apply(null, { length: nro }).map(_ => randomWord());
	}

	addSlice() {
		this.pieChartLabels.push(['Spacewise']);
		this.pieChartData.push(400);
		this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
	}

	removeSlice() {
		this.pieChartLabels.pop();
		this.pieChartData.pop();
		this.pieChartColors[0].backgroundColor.pop();
	}

	changeLegendPosition() {
		this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
	}
}
