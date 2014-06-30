    function new2DArray(h, w, value) {
        var a = new Array(h);
        for (var y = 0; y < h; y++) {
            a[y] = new Array(w);
            for (var x = 0; x < w; x++) {
                a[y][x] = value;
            }
        }
        return a;
    }

    function newArray(N, value) {
        var a = new Array(N);
        for (var i = 0; i < N; i++) {
            a[i] = value;
        }
        return a;
    }

    function isEqual(xs, ys) {
        return xs.length == ys.length && xs.every(function(x, i) {
            return x == ys[i];
        });
    }
   