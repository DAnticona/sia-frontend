import { Persona } from './persona.model';
import { Rol } from './rol.model';
export class Usuario extends Persona {
	username: string;
	password: string;
	rol: Rol;
	TOKEN: any;
}
