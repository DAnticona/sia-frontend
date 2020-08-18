import { TipoDocumento } from './tipoDocumento.model';
export class Persona {
	idPersona: number;
	numeroDocumento: number;
	nombres: string;
	apellidoPaterno: string;
	apellidoMaterno: string;
	sexo: string;
	fechaNacimiento: Date;
	email: string;
	imagen: string;
	tipoDocumento: TipoDocumento;
}
