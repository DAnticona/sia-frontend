import { Persona } from './persona.model';
export class Usuario extends Persona {
	// public id: number;
	// public tipoDocumento: number;
	// public nuDocumento: string;
	// public nombres: string;
	// public apPaterno: string;
	// public apMaterno: string;
	// public direccion: string;
	// public email: string;
	// public feNacimiento: Date;
	// public sexo: string;
	public username: string;
	public password: string;
	public imagen: string;
	public rol: number;
}
