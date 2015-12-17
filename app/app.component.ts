import {Component} from 'angular2/core';
declare var dockspawn: any;
@Component({
    selector: 'my-app',
    templateUrl: 'app/ui/main.html'
})
export class AppComponent {
    private a: number;

    constructor() {

        var divDockManager = document.getElementById("my_dock_manager");
        var dockManager = new dockspawn.DockManager(divDockManager);
        dockManager.initialize();
        // Let the dock manager element fill in the entire screen
        var onResized = function(e) {
            dockManager.resize(window.innerWidth - (divDockManager.clientLeft + divDockManager.offsetLeft), window.innerHeight - (divDockManager.clientTop + divDockManager.offsetTop));
        }
        window.onresize = onResized;
        onResized(null);

        // Convert existing elements on the page into "Panels".
        // They can then be docked on to the dock manager
        // Panels get a titlebar and a close button, and can also be
        // converted to a floating dialog box which can be dragged / resized
        var hypernetWindow = new dockspawn.PanelContainer(document.getElementById("hypernet_window"), dockManager);
        var properties = new dockspawn.PanelContainer(document.getElementById("properties_window"), dockManager);
        var outline = new dockspawn.PanelContainer(document.getElementById("outline_window"), dockManager);
        var editor1 = new dockspawn.PanelContainer(document.getElementById("editor1_window"), dockManager);
        var editor2 = new dockspawn.PanelContainer(document.getElementById("editor2_window"), dockManager);
        

        // Dock the panels on the dock manager
        var documentNode = dockManager.context.model.documentManagerNode;
        var outlineNode = dockManager.dockLeft(documentNode, outline, 0.15);
        var solutionNode = dockManager.dockFill(outlineNode, hypernetWindow);
        var propertiesNode = dockManager.dockDown(outlineNode, properties, 0.6);
        var editor1Node = dockManager.dockFill(documentNode, editor1);
        var editor2Node = dockManager.dockFill(documentNode, editor2);
    }
}