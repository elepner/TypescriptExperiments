import {Component, Inject, ElementRef, Attribute} from 'angular2/core';
import {Canvas} from './fabric-js-wrapper';
@Component({
	selector: 'hypernet-canvas',
	templateUrl: 'app/html/fabric-js-hypernet-canvas.html'
})
export class FabricJSHypernetCanvas {
	
	private static CanvasCount = 0;
	
	constructor(@Inject(ElementRef) elementRef: ElementRef){
		var domElement : HTMLElement = elementRef.nativeElement ;
		var canvasElement = domElement.getElementsByTagName('canvas')[0];
		var idVal = 'canvas-directive-' + FabricJSHypernetCanvas.CanvasCount++;
		canvasElement.setAttribute('id', idVal);
		
		var canvas = new Canvas(idVal);
		
		var boundingRect = domElement.getBoundingClientRect();
		canvas.setDimensions(boundingRect.width, boundingRect.height);
	}	
}