import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'https'
})
export class HttpPipe implements PipeTransform {

    transform(http_url:string) {
        return http_url.replace('http://45.77.245.61:6868', 'https://course.aiacademy.edu.vn/images')
    }

}