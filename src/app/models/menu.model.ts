import { Submenu } from './submenu.model';
export class Menu {
	id: number;
	nombre: string;
	icono: string;
	orden: number;
	submenu: Submenu[];
}
