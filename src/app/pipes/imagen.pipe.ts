import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
	transform(image: string): any {
		if (!image) {
			return './assets/images/users/noimage2.jpg';
		}
		return image;
	}
}
