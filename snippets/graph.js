    function Graph(V) {
        var adj = new Array(V);
        for (var i = 0; i < V; i++) {
            adj[i] = [];
        }

        this.V = function () {
            return V;
        }

        this.addEdge = function (u, v) {
            adj[u].push(v);
            adj[v].push(u);
        }

        this.adjacent = function (u) {
            return adj[u];
        }
    }
