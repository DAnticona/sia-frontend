import { Cliente } from '../models/cliente.model';
export const CLIENTES: Cliente[] = [
	{
		coEmp: '001',
		nuDoc: '20512976108',
		raSoc: 'PLASTICOS A SAC',
		coClie: '001',
		nuCarta: '179-2015',
		feCarta: new Date(2015, 11, 14),
		tarifaMinima: 495,
		comision: 150,
		tiMoneda: 'SOLES',
		PctMerca: 0.35,
		facCont20: 495,
		facCont40: 825,
		facCargSuelta30m3: 495,
		facPolSeguro: 100,
		vaPctSeguro: 0.05,
		monCargSuelta15m3: 0,
		monCont20: 132,
		monCont40: 264,
		monAlq4Tn2H: 250,
		estCargSuelta20m3: 99,
		estCont20: 120,
		estCont40: 200,
		despParcial: 0,
		servExtraXHora: 99,
		movCarga0a20m3: 0,
		movCarga20a35m3: 132,
		movCarga40a60m3: 264,
		forrCargaCont20: 150,
		forrCargaCont40: 300,
		forrCargaSuelta: 100,
	},
	{
		coEmp: '002',
		nuDoc: '20507553711',
		raSoc: 'WAN XIN GROUP EIRL',
		coClie: '002',
		nuCarta: '005-2019',
		feCarta: new Date(2019, 0, 7),
		tarifaMinima: 390,
		comision: 0,
		tiMoneda: 'SOLES',
		PctMerca: 0,
		facCont20: 390,
		facCont40: 700,
		facCargSuelta30m3: 390,
		facPolSeguro: 50,
		vaPctSeguro: 0.05,
		monCargSuelta15m3: 0,
		monCont20: 132,
		monCont40: 264,
		monAlq4Tn2H: 264,
		estCargSuelta20m3: 120,
		estCont20: 120,
		estCont40: 180,
		despParcial: 0,
		servExtraXHora: 90,
		movCarga0a20m3: 90,
		movCarga20a35m3: 90,
		movCarga40a60m3: 180,
		forrCargaCont20: 0,
		forrCargaCont40: 0,
		forrCargaSuelta: 0,
	},
	{
		coEmp: '003',
		nuDoc: '20547386176',
		raSoc: 'COMERCIAL REFRIGERACION PERU SAC',
		coClie: '003',
		nuCarta: '040-2019',
		feCarta: new Date(2019, 2, 22),
		tarifaMinima: 80,
		comision: 0,
		tiMoneda: 'SOLES',
		PctMerca: 0.4,
		facCont20: 0,
		facCont40: 0,
		facCargSuelta30m3: 80,
		facPolSeguro: 30,
		vaPctSeguro: 0.05,
		monCargSuelta15m3: 0,
		monCont20: 0,
		monCont40: 0,
		monAlq4Tn2H: 0,
		estCargSuelta20m3: 30,
		estCont20: 50,
		estCont40: 60,
		despParcial: 0,
		servExtraXHora: 30,
		movCarga0a20m3: 7,
		movCarga20a35m3: 0,
		movCarga40a60m3: 0,
		forrCargaCont20: 0,
		forrCargaCont40: 0,
		forrCargaSuelta: 0,
	},
];
