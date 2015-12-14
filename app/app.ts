interface Person {
    firstname: string;
    lastname: string;
}

class Vertex {
    x: number;
    y: number;
    eid: number;
    data: any;
}

class Edge {
    fromVertex: Vertex;
    toVertex: Vertex;
    eid: number;
    data: any;
    constructor() {

    }
}

class Graph {
    edges: Edge[];
    
}

function greeter(person : Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

var user = {firstname: "Jane", lastname: "User"};

document.body.innerHTML = greeter(user);