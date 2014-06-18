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

    function isSame(xs, ys) {
        if (xs.length != ys.length) {
            return false;
        }
        for (var i = 0; i < xs.length; i++) {
            if (xs[i] != ys[i]) {
                return false;
            }
        }
        return true;
    }
\    