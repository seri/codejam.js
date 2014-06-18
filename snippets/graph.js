    function Graph(V) {
        this._V = V;
        this._adj = new Array(V);
        for (var i = 0; i < V; i++) {
            this._adj[i] = [];
        }
    }
    Graph.prototype.V = function () {
        return this._V;
    }
    Graph.prototype.addEdge = function (u, v) {
        this._adj[u].push(v);
        this._adj[v].push(u);
    }
    Graph.prototype.adjacent = function (u) {
        return this._adj[u];
    }