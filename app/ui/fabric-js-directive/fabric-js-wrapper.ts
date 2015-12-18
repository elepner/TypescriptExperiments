declare var fabric: any;

export class Canvas {

	private _fabricCanvas: any;

	public constructor(elementId: string) {
		this._fabricCanvas = new fabric.Canvas(elementId);
		this._fabricCanvas.add(
			new fabric.Rect({ top: 100, left: 100, width: 50, height: 50, fill: '#f55' }),
			new fabric.Circle({ top: 140, left: 230, radius: 75, fill: 'green' }),
			new fabric.Triangle({ top: 300, left: 210, width: 100, height: 100, fill: 'blue' })
		);
	}
	
	/**
	 * Sets the dimensions of canvas. Use negative number to leave the dimension as is.
	 */
	public setDimensions(width: number, height: number){
		if(width > 0) this._fabricCanvas.setWidth(width);
		if(height > 0) this._fabricCanvas.setHeight(height);
		
		this._fabricCanvas.renderAll(); 	
	}
}