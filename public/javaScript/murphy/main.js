import { murphy } from "./murphy.js";

export function app({canvas}){
      return new murphy(canvas,canvas.getContext("2d"));   
}


