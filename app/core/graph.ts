export class Vertex {
    x: number;
    y: number;
    eid: number;
    data: any;
}

export class Edge {
    fromVertex: Vertex;
    toVertex: Vertex;
    eid: number;
    data: any;
    constructor() {

    }
}

export class Graph {
    edges: Edge[];
    
}