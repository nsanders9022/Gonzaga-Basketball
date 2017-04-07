import { Pipe, PipeTransform } from '@angular/core';
import { Players } from './players.model';

@Pipe({
  name: 'playerPosition',
  pure: false
})
export class PlayerPositionPipe implements PipeTransform {

  transform(input: Players[], desiredPosition) {
    var output: Players[] = [];
    if (desiredPosition === "guard") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "Guard") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPosition === "center") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "Center") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPosition === "forward") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "Forward") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
