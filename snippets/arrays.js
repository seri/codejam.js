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

    function new4DArray(x, y, z, t, value) {
        var a = new Array(x);
        for (var ix = 0; ix < x; ix++) {
            a[ix] = new Array(y);
            for (var iy = 0; iy < y; iy++) {
                a[ix][iy] = new Array(z);
                for (var iz = 0; iz < z; iz++) {
                    a[ix][iy][iz] = new Array(t);
                    for (var it = 0; it < t; it++) {
                        a[ix][iy][iz][it] = value;
                    }
                }
            }
        }
        return a;
    }