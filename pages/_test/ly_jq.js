var LongYen = function (str, ctx, font) {
    var s = font.size ? font.size / 100 : 0.28;
    ctx.lineWidth = font.weight * s / 100 || 6 * s;
    ctx.lineJoin = "bevel";
    var family = font.family || "heiti";
    var arr = [];	//装部件函数名的容器
    var tone;
    var reg;
    const WARNING = "输入错误，请查看输入法说明，或咨询博主（qq:419121701）";
    var heiti = {			//黑体部件
        a3: function () {
            ctx.beginPath();
            ctx.moveTo(65 * s, 13 * s);
            ctx.lineTo(54 * s, 31 * s);
            ctx.lineTo(88 * s, 27 * s);
            ctx.lineTo(83 * s, 41 * s);
            ctx.stroke();
        },
        a34: function () {
            ctx.beginPath();
            ctx.moveTo(65 * s, 13 * s);
            ctx.lineTo(54 * s, 45 * s);
            ctx.lineTo(88 * s, 43 * s);
            ctx.lineTo(72 * s, 70 * s);
            ctx.stroke();
        },
        a14: function () {
            ctx.beginPath();
            ctx.moveTo(38 * s, 13 * s);
            ctx.lineTo(16 * s, 48 * s);
            ctx.lineTo(85 * s, 40 * s);
            ctx.lineTo(74 * s, 68 * s);
            ctx.stroke();
        },
        a5: function () {
            ctx.beginPath();
            ctx.moveTo(29 * s, 12 * s);
            ctx.lineTo(25 * s, 28 * s);
            ctx.lineTo(80 * s, 26 * s);
            ctx.lineTo(78 * s, 40 * s);
            ctx.stroke();
        },
        o3: function () {
            ctx.beginPath();
            ctx.moveTo(68 * s, 16 * s);
            ctx.lineTo(50 * s, 36 * s);
            ctx.lineTo(82 * s, 32 * s);
            ctx.moveTo(80 * s, 24 * s);
            ctx.lineTo(86 * s, 38 * s);
            ctx.stroke();
        },
        o4: function () {
            ctx.beginPath();
            ctx.moveTo(70 * s, 42 * s);
            ctx.lineTo(52 * s, 66 * s);
            ctx.lineTo(84 * s, 62 * s);
            ctx.moveTo(82 * s, 54 * s);
            ctx.lineTo(88 * s, 68 * s);
            ctx.stroke();
        },
        o34: function () {
            ctx.beginPath();
            ctx.moveTo(68 * s, 18 * s);
            ctx.lineTo(50 * s, 66 * s);
            ctx.lineTo(84 * s, 62 * s);
            ctx.moveTo(82 * s, 48 * s);
            ctx.lineTo(90 * s, 70 * s);
            ctx.stroke();
        },
        o14: function () {
            ctx.beginPath();
            ctx.moveTo(48 * s, 18 * s);
            ctx.lineTo(16 * s, 66 * s);
            ctx.lineTo(78 * s, 62 * s);
            ctx.moveTo(74 * s, 50 * s);
            ctx.lineTo(84 * s, 70 * s);
            ctx.stroke();
        },
        o5: function () {
            ctx.beginPath();
            ctx.moveTo(48 * s, 16 * s);
            ctx.lineTo(22 * s, 36 * s);
            ctx.lineTo(74 * s, 32 * s);
            ctx.moveTo(68 * s, 22 * s);
            ctx.lineTo(78 * s, 38 * s);
            ctx.stroke();
        },
        e3: function () {
            ctx.beginPath();
            ctx.moveTo(54 * s, 20 * s);
            ctx.lineTo(84 * s, 18 * s);
            ctx.lineTo(70 * s, 40 * s);
            ctx.moveTo(68 * s, 34 * s);
            ctx.lineTo(70 * s, 42 * s);
            ctx.stroke();
        },
        e34: function () {
            ctx.beginPath();
            ctx.moveTo(54 * s, 26 * s);
            ctx.lineTo(88 * s, 24 * s);
            ctx.lineTo(70 * s, 58 * s);
            ctx.moveTo(64 * s, 50 * s);
            ctx.lineTo(76 * s, 68 * s);
            ctx.stroke();
        },
        e14: function () {
            ctx.beginPath();
            ctx.moveTo(16 * s, 28 * s);
            ctx.lineTo(86 * s, 24 * s);
            ctx.lineTo(52 * s, 58 * s);
            ctx.moveTo(42 * s, 48 * s);
            ctx.lineTo(56 * s, 68 * s);
            ctx.stroke();
        },
        e5: function () {
            ctx.beginPath();
            ctx.moveTo(24 * s, 20 * s);
            ctx.lineTo(78 * s, 18 * s);
            ctx.lineTo(48 * s, 40 * s);
            ctx.moveTo(44 * s, 34 * s);
            ctx.lineTo(52 * s, 42 * s);
            ctx.stroke();
        },
        E3: function () {
            ctx.beginPath();
            ctx.moveTo(56 * s, 14 * s);
            ctx.lineTo(56 * s, 34 * s);
            ctx.quadraticCurveTo(76 * s, 34 * s, 86 * s, 30 * s);
            ctx.stroke();
        },
        E34: function () {
            ctx.beginPath();
            ctx.moveTo(62 * s, 14 * s);
            ctx.lineTo(62 * s, 66 * s);
            ctx.quadraticCurveTo(72 * s, 64 * s, 92 * s, 54 * s);
            ctx.stroke();
        },
        E14: function () {
            ctx.beginPath();
            ctx.moveTo(24 * s, 18 * s);
            ctx.lineTo(26 * s, 66 * s);
            ctx.quadraticCurveTo(58 * s, 62 * s, 86 * s, 50 * s);
            ctx.stroke();
        },
        y12: function () {	//这里直接改成y了，不行再处理
            ctx.beginPath();
            ctx.moveTo(24 * s, 22 * s);
            ctx.lineTo(34 * s, 20 * s);
            ctx.quadraticCurveTo(35 * s, 68 * s, 14 * s, 72 * s);
            ctx.stroke();
        },
        i2: function () {
            ctx.beginPath();
            ctx.moveTo(10 * s, 68 * s);
            ctx.quadraticCurveTo(36 * s, 64 * s, 48 * s, 54 * s);
            ctx.stroke();
        },
        i3: function () {
            ctx.beginPath();
            ctx.moveTo(68 * s, 14 * s);
            ctx.lineTo(70 * s, 42 * s);
            ctx.stroke();
        },
        i34: function () {
            ctx.beginPath();
            ctx.moveTo(73 * s, 15 * s);
            ctx.lineTo(84 * s, 58 * s);
            ctx.lineTo(70 * s, 70 * s);
            ctx.stroke();
        },
        i14: function () {
            ctx.beginPath();
            ctx.moveTo(14 * s, 40 * s);
            ctx.lineTo(88 * s, 30 * s);
            ctx.lineTo(82 * s, 48 * s);
            ctx.stroke();
        },
        i5: function () {
            ctx.beginPath();
            ctx.moveTo(50 * s, 16 * s);
            ctx.lineTo(52 * s, 40 * s);
            ctx.stroke();
        },
        w12: function () {	//改成w了
            ctx.beginPath();
            ctx.moveTo(16 * s, 22 * s);
            ctx.lineTo(44 * s, 20 * s);
            ctx.lineTo(10 * s, 68 * s);
            ctx.lineTo(44 * s, 60 * s);
            ctx.lineTo(48 * s, 66 * s);
            ctx.stroke();
        },
        u2: function () {
            ctx.beginPath();
            ctx.moveTo(22 * s, 52 * s);
            ctx.lineTo(42 * s, 50 * s);
            ctx.lineTo(14 * s, 70 * s);
            ctx.lineTo(50 * s, 64 * s);
            ctx.stroke();
        },
        u3: function () {
            ctx.beginPath();
            ctx.moveTo(58 * s, 20 * s);
            ctx.lineTo(80 * s, 22 * s);
            ctx.lineTo(52 * s, 42 * s);
            ctx.lineTo(88 * s, 40 * s);
            ctx.stroke();
        },
        u4: function () {
            ctx.beginPath();
            ctx.moveTo(54 * s, 44 * s);
            ctx.lineTo(80 * s, 42 * s);
            ctx.lineTo(52 * s, 66 * s);
            ctx.lineTo(88 * s, 64 * s);
            ctx.stroke();
        },
        u34: function () {
            ctx.beginPath();
            ctx.moveTo(58 * s, 20 * s);
            ctx.lineTo(82 * s, 22 * s);
            ctx.lineTo(54 * s, 66 * s);
            ctx.lineTo(84 * s, 62 * s);
            ctx.lineTo(88 * s, 70 * s);
            ctx.stroke();
        },
        u14: function () {
            ctx.beginPath();
            ctx.moveTo(30 * s, 20 * s);
            ctx.lineTo(72 * s, 20 * s);
            ctx.lineTo(14 * s, 68 * s);
            ctx.lineTo(74 * s, 62 * s);
            ctx.lineTo(86 * s, 70 * s);
            ctx.stroke();
        },
        u6: function () {
            ctx.beginPath();
            ctx.moveTo(20 * s, 44 * s);
            ctx.lineTo(80 * s, 42 * s);
            ctx.lineTo(14 * s, 68 * s);
            ctx.lineTo(88 * s, 64 * s);
            ctx.stroke();
        },
        v12: function () {
            ctx.beginPath();
            ctx.moveTo(14 * s, 28 * s);
            ctx.lineTo(16 * s, 58 * s);
            ctx.lineTo(40 * s, 48 * s);
            ctx.moveTo(40 * s, 14 * s);
            ctx.lineTo(40 * s, 70 * s);
            ctx.stroke();
        },
        v2: function () {
            ctx.beginPath();
            ctx.moveTo(18 * s, 52 * s);
            ctx.lineTo(22 * s, 70 * s);
            ctx.lineTo(46 * s, 60 * s);
            ctx.moveTo(46 * s, 46 * s);
            ctx.lineTo(46 * s, 70 * s);
            ctx.stroke();
        },
        v3: function () {
            ctx.beginPath();
            ctx.moveTo(56 * s, 22 * s);
            ctx.lineTo(58 * s, 38 * s);
            ctx.lineTo(82 * s, 20 * s);
            ctx.moveTo(82 * s, 18 * s);
            ctx.lineTo(84 * s, 40 * s);
            ctx.stroke();
        },
        v34: function () {
            ctx.beginPath();
            ctx.moveTo(56 * s, 28 * s);
            ctx.lineTo(58 * s, 58 * s);
            ctx.lineTo(84 * s, 48 * s);
            ctx.moveTo(82 * s, 18 * s);
            ctx.lineTo(86 * s, 70 * s);
            ctx.stroke();
        },
        v14: function () {
            ctx.beginPath();
            ctx.moveTo(16 * s, 28 * s);
            ctx.lineTo(26 * s, 64 * s);
            ctx.lineTo(80 * s, 34 * s);
            ctx.moveTo(80 * s, 20 * s);
            ctx.lineTo(80 * s, 70 * s);
            ctx.stroke();
        },
        v5: function () {
            ctx.beginPath();
            ctx.moveTo(28 * s, 22 * s);
            ctx.lineTo(30 * s, 38 * s);
            ctx.lineTo(74 * s, 20 * s);
            ctx.moveTo(72 * s, 18 * s);
            ctx.lineTo(74 * s, 40 * s);
            ctx.stroke();
        },
        b12: function () {
            ctx.beginPath();
            ctx.moveTo(26 * s, 16 * s);
            ctx.quadraticCurveTo(28 * s, 58 * s, 10 * s, 70 * s);
            ctx.moveTo(22 * s, 18 * s);
            ctx.lineTo(50 * s, 16 * s);
            ctx.moveTo(47 * s, 18 * s);
            ctx.lineTo(47 * s, 68 * s);
            ctx.stroke();
        },
        b1: function () {
            ctx.beginPath();
            ctx.moveTo(26 * s, 16 * s);
            ctx.quadraticCurveTo(26 * s, 48 * s, 10 * s, 60 * s);
            ctx.moveTo(20 * s, 18 * s);
            ctx.lineTo(50 * s, 16 * s);
            ctx.moveTo(46 * s, 18 * s);
            ctx.lineTo(46 * s, 52 * s);
            ctx.stroke();
        },
        p12: function () {
            ctx.beginPath();
            ctx.moveTo(24 * s, 14 * s);
            ctx.lineTo(12 * s, 34 * s);
            ctx.lineTo(52 * s, 30 * s);
            ctx.moveTo(46 * s, 32 * s);
            ctx.quadraticCurveTo(36 * s, 58 * s, 10 * s, 70 * s);
            ctx.moveTo(22 * s, 38 * s);
            ctx.lineTo(48 * s, 66 * s);
            ctx.stroke();
        },
        p1: function () {
            ctx.beginPath();
            ctx.moveTo(24 * s, 14 * s);
            ctx.lineTo(12 * s, 30 * s);
            ctx.lineTo(52 * s, 26 * s);
            ctx.moveTo(46 * s, 28 * s);
            ctx.quadraticCurveTo(36 * s, 54 * s, 10 * s, 56 * s);
            ctx.moveTo(22 * s, 34 * s);
            ctx.lineTo(48 * s, 56 * s);
            ctx.stroke();
        },
        f12: function () {
            ctx.beginPath();
            ctx.moveTo(16 * s, 20 * s);
            ctx.lineTo(46 * s, 18 * s);
            ctx.quadraticCurveTo(34 * s, 60 * s, 12 * s, 70 * s);
            ctx.moveTo(18 * s, 34 * s);
            ctx.lineTo(34 * s, 40 * s);
            ctx.stroke();
        },
        m12: function () {
            ctx.beginPath();
            ctx.moveTo(16 * s, 22 * s);
            ctx.lineTo(48 * s, 20 * s);
            ctx.moveTo(22 * s, 20 * s);
            ctx.lineTo(14 * s, 48 * s);
            ctx.lineTo(48 * s, 44 * s);
            ctx.quadraticCurveTo(42 * s, 62 * s, 32 * s, 70 * s);
            ctx.stroke();
        },
        m1: function () {
            ctx.beginPath();
            ctx.moveTo(14 * s, 22 * s);
            ctx.lineTo(48 * s, 18 * s);
            ctx.moveTo(20 * s, 20 * s);
            ctx.lineTo(18 * s, 42 * s);
            ctx.lineTo(44 * s, 38 * s);
            ctx.lineTo(42 * s, 52 * s);
            ctx.stroke();
        },
        m14: function () {
            ctx.beginPath();
            ctx.moveTo(16 * s, 22 * s);
            ctx.lineTo(86 * s, 20 * s);
            ctx.moveTo(22 * s, 20 * s);
            ctx.lineTo(14 * s, 48 * s);
            ctx.lineTo(88 * s, 44 * s);
            ctx.lineTo(74 * s, 66 * s);
            ctx.lineTo(50 * s, 60 * s);
            ctx.stroke();
        },
        d12: function () {
            ctx.beginPath();
            ctx.moveTo(24 * s, 14 * s);
            ctx.lineTo(14 * s, 28 * s);
            ctx.lineTo(52 * s, 24 * s);
            ctx.lineTo(44 * s, 66 * s);
            ctx.lineTo(30 * s, 32 * s);
            ctx.quadraticCurveTo(24 * s, 52 * s, 10 * s, 70 * s);
            ctx.stroke();
        },
        d1: function () {
            ctx.beginPath();
            ctx.moveTo(24 * s, 14 * s);
            ctx.lineTo(14 * s, 26 * s);
            ctx.lineTo(50 * s, 20 * s);
            ctx.lineTo(44 * s, 46 * s);
            ctx.lineTo(30 * s, 28 * s);
            ctx.quadraticCurveTo(24 * s, 44 * s, 10 * s, 56 * s);
            ctx.stroke();
        },
        d14: function () {
            ctx.beginPath();
            ctx.moveTo(32 * s, 16 * s);
            ctx.lineTo(16 * s, 32 * s);
            ctx.lineTo(72 * s, 28 * s);
            ctx.lineTo(54 * s, 70 * s);
            ctx.lineTo(44 * s, 32 * s);
            ctx.quadraticCurveTo(34 * s, 52 * s, 12 * s, 66 * s);
            ctx.stroke();
        },
        t12: function () {
            ctx.beginPath();
            ctx.moveTo(10 * s, 46 * s);
            ctx.lineTo(52 * s, 36 * s);
            ctx.moveTo(26 * s, 20 * s);
            ctx.lineTo(30 * s, 68 * s);
            ctx.quadraticCurveTo(42 * s, 66 * s, 50 * s, 60 * s);
            ctx.stroke();
        },
        t1: function () {
            ctx.beginPath();
            ctx.moveTo(16 * s, 32 * s);
            ctx.lineTo(52 * s, 28 * s);
            ctx.moveTo(26 * s, 16 * s);
            ctx.lineTo(18 * s, 46 * s);
            ctx.lineTo(50 * s, 42 * s);
            ctx.stroke();
        },
        l12: function () {
            ctx.beginPath();
            ctx.moveTo(16 * s, 22 * s);
            ctx.lineTo(38 * s, 36 * s);
            ctx.moveTo(10 * s, 68 * s);
            ctx.quadraticCurveTo(42 * s, 60 * s, 50 * s, 30 * s);
            ctx.stroke();
        },
        l1: function () {
            ctx.beginPath();
            ctx.moveTo(16 * s, 18 * s);
            ctx.lineTo(36 * s, 30 * s);
            ctx.moveTo(10 * s, 52 * s);
            ctx.quadraticCurveTo(32 * s, 46 * s, 48 * s, 28 * s);
            ctx.stroke();
        },
        l14: function () {
            ctx.beginPath();
            ctx.moveTo(22 * s, 18 * s);
            ctx.lineTo(48 * s, 32 * s);
            ctx.moveTo(10 * s, 68 * s);
            ctx.quadraticCurveTo(48 * s, 60 * s, 70 * s, 30 * s);
            ctx.stroke();
        },
        n12: function () {
            ctx.beginPath();
            ctx.moveTo(48 * s, 18 * s);
            ctx.quadraticCurveTo(34 * s, 28 * s, 10 * s, 36 * s);
            ctx.moveTo(16 * s, 36 * s);
            ctx.lineTo(24 * s, 68 * s);
            ctx.moveTo(18 * s, 70 * s);
            ctx.lineTo(52 * s, 64 * s);
            ctx.stroke();
        },
        n1: function () {
            ctx.beginPath();
            ctx.moveTo(48 * s, 18 * s);
            ctx.lineTo(14 * s, 24 * s);
            ctx.moveTo(18 * s, 24 * s);
            ctx.lineTo(18 * s, 46 * s);
            ctx.lineTo(48 * s, 42 * s);
            ctx.stroke();
        },
        n4: function () {
            ctx.beginPath();
            ctx.moveTo(88 * s, 42 * s);
            ctx.lineTo(54 * s, 46 * s);
            ctx.lineTo(54 * s, 66 * s);
            ctx.lineTo(90 * s, 65 * s);
            ctx.stroke();
        },
        n14: function () {
            ctx.beginPath();
            ctx.moveTo(82 * s, 20 * s);
            ctx.quadraticCurveTo(56 * s, 30 * s, 12 * s, 36 * s);
            ctx.moveTo(22 * s, 36 * s);
            ctx.lineTo(24 * s, 66 * s);
            ctx.moveTo(18 * s, 66 * s);
            ctx.lineTo(88 * s, 64 * s);
            ctx.stroke();
        },
        n6: function () {
            ctx.beginPath();
            ctx.moveTo(82 * s, 42 * s);
            ctx.lineTo(22 * s, 44 * s);
            ctx.lineTo(16 * s, 68 * s);
            ctx.lineTo(86 * s, 66 * s);
            ctx.stroke();
        },
        g12: function () {
            ctx.beginPath();
            ctx.moveTo(24 * s, 14 * s);
            ctx.lineTo(12 * s, 34 * s);
            ctx.lineTo(52 * s, 30 * s);
            ctx.moveTo(34 * s, 32 * s);
            ctx.quadraticCurveTo(32 * s, 56 * s, 10 * s, 70 * s);
            ctx.stroke();
        },
        g1: function () {
            ctx.beginPath();
            ctx.moveTo(28 * s, 14 * s);
            ctx.lineTo(16 * s, 30 * s);
            ctx.lineTo(48 * s, 26 * s);
            ctx.moveTo(34 * s, 28 * s);
            ctx.quadraticCurveTo(32 * s, 46 * s, 10 * s, 56 * s);
            ctx.stroke();
        },
        g14: function () {
            ctx.beginPath();
            ctx.moveTo(32 * s, 16 * s);
            ctx.lineTo(10 * s, 34 * s);
            ctx.lineTo(70 * s, 30 * s);
            ctx.moveTo(42 * s, 32 * s);
            ctx.quadraticCurveTo(42 * s, 56 * s, 26 * s, 70 * s);
            ctx.stroke();
        },
        k12: function () {
            ctx.beginPath();
            ctx.moveTo(30 * s, 14 * s);
            ctx.quadraticCurveTo(24 * s, 28 * s, 12 * s, 40 * s);
            ctx.moveTo(26 * s, 26 * s);
            ctx.lineTo(46 * s, 30 * s);
            ctx.quadraticCurveTo(34 * s, 60 * s, 12 * s, 70 * s);
            ctx.stroke();
        },
        k1: function () {
            ctx.beginPath();
            ctx.moveTo(32 * s, 14 * s);
            ctx.quadraticCurveTo(24 * s, 24 * s, 14 * s, 32 * s);
            ctx.moveTo(26 * s, 18 * s);
            ctx.lineTo(44 * s, 28 * s);
            ctx.quadraticCurveTo(32 * s, 44 * s, 10 * s, 56 * s);
            ctx.stroke();
        },
        h12: function () {
            ctx.beginPath();
            ctx.moveTo(12 * s, 36 * s);
            ctx.lineTo(48 * s, 32 * s);
            ctx.moveTo(32 * s, 14 * s);
            ctx.quadraticCurveTo(36 * s, 54 * s, 10 * s, 72 * s);
            ctx.stroke();
        },
        h1: function () {
            ctx.beginPath();
            ctx.moveTo(12 * s, 30 * s);
            ctx.lineTo(48 * s, 28 * s);
            ctx.moveTo(32 * s, 14 * s);
            ctx.quadraticCurveTo(30 * s, 48 * s, 10 * s, 60 * s);
            ctx.stroke();
        },
        ng4: function () {
            ctx.beginPath();
            ctx.moveTo(88 * s, 41 * s);
            ctx.lineTo(54 * s, 45 * s);
            ctx.lineTo(54 * s, 67 * s);
            ctx.lineTo(71 * s, 48 * s);
            ctx.lineTo(89 * s, 69 * s);
            ctx.stroke();
        },
        ng14: function () {
            ctx.beginPath();
            ctx.moveTo(82 * s, 20 * s);
            ctx.quadraticCurveTo(56 * s, 30 * s, 12 * s, 36 * s);
            ctx.moveTo(22 * s, 36 * s);
            ctx.lineTo(24 * s, 70 * s);
            ctx.lineTo(54 * s, 38 * s);
            ctx.lineTo(88 * s, 68 * s);
            ctx.stroke();
        },
        ng6: function () {
            ctx.beginPath();
            ctx.moveTo(82 * s, 42 * s);
            ctx.lineTo(22 * s, 44 * s);
            ctx.lineTo(16 * s, 72 * s);
            ctx.lineTo(54 * s, 48 * s);
            ctx.lineTo(86 * s, 70 * s);
            ctx.stroke();
        },
        j12: function () {
            ctx.beginPath();
            ctx.moveTo(34 * s, 16 * s);
            ctx.lineTo(34 * s, 28 * s);
            ctx.moveTo(18 * s, 28 * s);
            ctx.lineTo(48 * s, 28 * s);
            ctx.lineTo(12 * s, 68 * s);
            ctx.lineTo(52 * s, 64 * s);
            ctx.stroke();
        },
        j1: function () {
            ctx.beginPath();
            ctx.moveTo(32 * s, 14 * s);
            ctx.lineTo(32 * s, 22 * s);
            ctx.moveTo(18 * s, 26 * s);
            ctx.lineTo(46 * s, 24 * s);
            ctx.lineTo(16 * s, 47 * s);
            ctx.lineTo(48 * s, 42 * s);
            ctx.stroke();
        },
        j14: function () {
            ctx.beginPath();
            ctx.moveTo(52 * s, 16 * s);
            ctx.lineTo(50 * s, 32 * s);
            ctx.moveTo(24 * s, 32 * s);
            ctx.lineTo(78 * s, 30 * s);
            ctx.lineTo(14 * s, 66 * s);
            ctx.lineTo(88 * s, 62 * s);
            ctx.stroke();
        },
        q12: function () {
            ctx.beginPath();
            ctx.moveTo(10 * s, 24 * s);
            ctx.lineTo(52 * s, 20 * s);
            ctx.lineTo(8 * s, 71 * s);
            ctx.moveTo(31 * s, 45 * s);
            ctx.lineTo(48 * s, 64 * s);
            ctx.stroke();
        },
        q1: function () {
            ctx.beginPath();
            ctx.moveTo(10 * s, 22 * s);
            ctx.lineTo(46 * s, 18 * s);
            ctx.lineTo(8 * s, 60 * s);
            ctx.moveTo(30 * s, 36 * s);
            ctx.lineTo(46 * s, 48 * s);
            ctx.stroke();
        },
        q14: function () {
            ctx.beginPath();
            ctx.moveTo(24 * s, 24 * s);
            ctx.lineTo(78 * s, 20 * s);
            ctx.lineTo(12 * s, 70 * s);
            ctx.moveTo(48 * s, 45 * s);
            ctx.lineTo(88 * s, 66 * s);
            ctx.stroke();
        },
        x12: function () {
            ctx.beginPath();
            ctx.moveTo(32 * s, 14 * s);
            ctx.lineTo(34 * s, 42 * s);
            ctx.moveTo(14 * s, 26 * s);
            ctx.lineTo(50 * s, 24 * s);
            ctx.quadraticCurveTo(38 * s, 58 * s, 12 * s, 70 * s);
            ctx.stroke();
        },
        x1: function () {
            ctx.beginPath();
            ctx.moveTo(32 * s, 14 * s);
            ctx.lineTo(32 * s, 36 * s);
            ctx.moveTo(16 * s, 26 * s);
            ctx.lineTo(50 * s, 24 * s);
            ctx.quadraticCurveTo(36 * s, 46 * s, 14 * s, 54 * s);
            ctx.stroke();
        },
        x14: function () {
            ctx.beginPath();
            ctx.moveTo(48 * s, 16 * s);
            ctx.lineTo(52 * s, 50 * s);
            ctx.moveTo(14 * s, 36 * s);
            ctx.lineTo(86 * s, 30 * s);
            ctx.quadraticCurveTo(78 * s, 62 * s, 22 * s, 70 * s);
            ctx.stroke();
        },
        r12: function () {
            ctx.beginPath();
            ctx.moveTo(44 * s, 14 * s);
            ctx.quadraticCurveTo(32 * s, 34 * s, 8 * s, 44 * s);
            ctx.moveTo(30 * s, 32 * s);
            ctx.lineTo(32 * s, 70 * s);
            ctx.stroke();
        },
        r1: function () {
            ctx.beginPath();
            ctx.moveTo(32 * s, 16 * s);
            ctx.quadraticCurveTo(28 * s, 40 * s, 12 * s, 56 * s);
            ctx.moveTo(28 * s, 34 * s);
            ctx.lineTo(48 * s, 46 * s);
            ctx.stroke();
        },
        r14: function () {
            ctx.beginPath();
            ctx.moveTo(84 * s, 20 * s);
            ctx.quadraticCurveTo(56 * s, 36 * s, 16 * s, 40 * s);
            ctx.moveTo(52 * s, 32 * s);
            ctx.lineTo(54 * s, 68 * s);
            ctx.stroke();
        },
        z12: function () {
            ctx.beginPath();
            ctx.moveTo(18 * s, 22 * s);
            ctx.lineTo(42 * s, 20 * s);
            ctx.lineTo(10 * s, 48 * s);
            ctx.lineTo(48 * s, 44 * s);
            ctx.lineTo(30 * s, 70 * s);
            ctx.lineTo(22 * s, 60 * s);
            ctx.stroke();
        },
        z1: function () {
            ctx.beginPath();
            ctx.moveTo(18 * s, 18 * s);
            ctx.lineTo(42 * s, 16 * s);
            ctx.lineTo(14 * s, 34 * s);
            ctx.lineTo(48 * s, 30 * s);
            ctx.lineTo(38 * s, 44 * s);
            ctx.lineTo(26 * s, 40 * s);
            ctx.stroke();
        },
        z14: function () {
            ctx.beginPath();
            ctx.moveTo(32 * s, 20 * s);
            ctx.lineTo(70 * s, 18 * s);
            ctx.lineTo(16 * s, 50 * s);
            ctx.lineTo(86 * s, 38 * s);
            ctx.lineTo(60 * s, 68 * s);
            ctx.lineTo(42 * s, 60 * s);
            ctx.stroke();
        },
        c12: function () {
            ctx.beginPath();
            ctx.moveTo(18 * s, 18 * s);
            ctx.lineTo(12 * s, 40 * s);
            ctx.lineTo(48 * s, 36 * s);
            ctx.lineTo(42 * s, 68 * s);
            ctx.lineTo(36 * s, 56 * s);
            ctx.moveTo(34 * s, 16 * s);
            ctx.lineTo(30 * s, 42 * s);
            ctx.quadraticCurveTo(26 * s, 60 * s, 12 * s, 70 * s);
            ctx.stroke();
        },
        c1: function () {
            ctx.beginPath();
            ctx.moveTo(22 * s, 18 * s);
            ctx.lineTo(16 * s, 30 * s);
            ctx.lineTo(48 * s, 28 * s);
            ctx.lineTo(42 * s, 48 * s);
            ctx.lineTo(30 * s, 42 * s);
            ctx.moveTo(34 * s, 16 * s);
            ctx.lineTo(32 * s, 32 * s);
            ctx.quadraticCurveTo(28 * s, 42 * s, 14 * s, 50 * s);
            ctx.stroke();
        },
        c14: function () {
            ctx.beginPath();
            ctx.moveTo(28 * s, 18 * s);
            ctx.lineTo(20 * s, 40 * s);
            ctx.lineTo(86 * s, 36 * s);
            ctx.lineTo(80 * s, 68 * s);
            ctx.lineTo(70 * s, 52 * s);
            ctx.moveTo(58 * s, 16 * s);
            ctx.lineTo(54 * s, 40 * s);
            ctx.quadraticCurveTo(42 * s, 64 * s, 14 * s, 68 * s);
            ctx.stroke();
        },
        s12: function () {
            ctx.beginPath();
            ctx.moveTo(34 * s, 14 * s);
            ctx.lineTo(14 * s, 40 * s);
            ctx.lineTo(30 * s, 48 * s);
            ctx.moveTo(38 * s, 34 * s);
            ctx.lineTo(10 * s, 68 * s);
            ctx.lineTo(50 * s, 64 * s);
            ctx.stroke();
        },
        s1: function () {
            ctx.beginPath();
            ctx.moveTo(26 * s, 16 * s);
            ctx.lineTo(20 * s, 24 * s);
            ctx.lineTo(28 * s, 32 * s);
            ctx.moveTo(44 * s, 16 * s);
            ctx.lineTo(18 * s, 44 * s);
            ctx.lineTo(48 * s, 40 * s);
            ctx.stroke();
        },
        s14: function () {
            ctx.beginPath();
            ctx.moveTo(62 * s, 16 * s);
            ctx.lineTo(28 * s, 40 * s);
            ctx.lineTo(40 * s, 50 * s);
            ctx.moveTo(74 * s, 34 * s);
            ctx.lineTo(16 * s, 66 * s);
            ctx.lineTo(88 * s, 62 * s);
            ctx.stroke();
        },
        ao34: function () {
            ctx.beginPath();
            ctx.moveTo(76 * s, 16 * s);
            ctx.lineTo(54 * s, 40 * s);
            ctx.lineTo(66 * s, 48 * s);
            ctx.moveTo(80 * s, 36 * s);
            ctx.lineTo(55 * s, 66 * s);
            ctx.lineTo(82 * s, 62 * s);
            ctx.moveTo(80 * s, 52 * s);
            ctx.lineTo(86 * s, 70 * s);
            ctx.stroke();
        },
        ao14: function () {
            ctx.beginPath();
            ctx.moveTo(58 * s, 16 * s);
            ctx.lineTo(26 * s, 40 * s);
            ctx.lineTo(38 * s, 50 * s);
            ctx.moveTo(70 * s, 36 * s);
            ctx.lineTo(14 * s, 66 * s);
            ctx.lineTo(86 * s, 62 * s);
            ctx.moveTo(80 * s, 48 * s);
            ctx.lineTo(88 * s, 70 * s);
            ctx.stroke();
        },
        ai34: function () {
            ctx.beginPath();
            ctx.moveTo(70 * s, 16 * s);
            ctx.lineTo(54 * s, 40 * s);
            ctx.lineTo(86 * s, 38 * s);
            ctx.lineTo(80 * s, 70 * s);
            ctx.moveTo(55 * s, 66 * s);
            ctx.lineTo(82 * s, 64 * s);
            ctx.stroke();
        },
        ai14: function () {
            ctx.beginPath();
            ctx.moveTo(38 * s, 18 * s);
            ctx.lineTo(14 * s, 40 * s);
            ctx.lineTo(88 * s, 38 * s);
            ctx.lineTo(80 * s, 70 * s);
            ctx.moveTo(18 * s, 66 * s);
            ctx.lineTo(82 * s, 64 * s);
            ctx.stroke();
        },
        Ei34: function () {
            ctx.beginPath();
            ctx.moveTo(70 * s, 16 * s);
            ctx.lineTo(54 * s, 40 * s);
            ctx.lineTo(88 * s, 38 * s);
            ctx.moveTo(72 * s, 40 * s);
            ctx.quadraticCurveTo(70 * s, 58 * s, 78 * s, 70 * s);
            ctx.stroke();
        },
        Ei14: function () {
            ctx.beginPath();
            ctx.moveTo(42 * s, 16 * s);
            ctx.lineTo(16 * s, 40 * s);
            ctx.lineTo(86 * s, 38 * s);
            ctx.moveTo(48 * s, 40 * s);
            ctx.quadraticCurveTo(50 * s, 58 * s, 68 * s, 70 * s);
            ctx.stroke();
        },
        er14: function () {
            ctx.beginPath();
            ctx.moveTo(20 * s, 24 * s);
            ctx.lineTo(64 * s, 20 * s);
            ctx.lineTo(32 * s, 42 * s);
            ctx.lineTo(82 * s, 36 * s);
            ctx.lineTo(56 * s, 58 * s);
            ctx.lineTo(32 * s, 50 * s);
            ctx.moveTo(20 * s, 20 * s);
            ctx.lineTo(42 * s, 70 * s);
            ctx.stroke();
        },
        /*横彦*/
        a: function () {
            ctx.beginPath();
            ctx.moveTo(21 * s, 12 * s);
            ctx.lineTo(8 * s, 52 * s);
            ctx.lineTo(42 * s, 46 * s);
            ctx.lineTo(28 * s, 90 * s);
            ctx.stroke();
        },
        o: function () {
            ctx.beginPath();
            ctx.moveTo(26 * s, 14 * s);
            ctx.lineTo(8 * s, 86 * s);
            ctx.lineTo(40 * s, 76 * s);
            ctx.moveTo(36 * s, 62 * s);
            ctx.lineTo(44 * s, 88 * s);
            ctx.stroke();
        },
        e: function () {    //在方彦中是大写的E,不好意思
            ctx.beginPath();
            ctx.moveTo(12 * s, 20 * s);
            ctx.lineTo(10 * s, 86 * s);
            //ctx.quadraticCurveTo(34 * s, 88 * s, 42 * s, 80 * s);
            ctx.lineTo(44 * s, 72 * s);
            ctx.stroke();
        },
        i: function () {
            ctx.beginPath();
            ctx.moveTo(34 * s, 14 * s);
            //ctx.lineTo(34 * s, 20 * s);
            ctx.quadraticCurveTo(32 * s, 76 * s, 10 * s, 90 * s);
            ctx.stroke();
        },
        u: function () {
            ctx.beginPath();
            ctx.moveTo(12 * s, 22 * s);
            ctx.lineTo(36 * s, 20 * s);
            ctx.lineTo(6 * s, 88 * s);
            ctx.lineTo(38 * s, 82 * s);
            ctx.lineTo(44 * s, 88 * s);
            ctx.stroke();
        },
        V: function () {
            ctx.beginPath();
            ctx.moveTo(10 * s, 28 * s);
            ctx.lineTo(14 * s, 68 * s);
            ctx.lineTo(40 * s, 60 * s);
            ctx.moveTo(40 * s, 14 * s);
            ctx.lineTo(40 * s, 90 * s);
            ctx.stroke();
        }, /////后
        E: function () {
            ctx.beginPath();
            ctx.moveTo(8 * s, 26 * s);
            ctx.lineTo(44 * s, 22 * s);
            ctx.lineTo(26 * s, 76 * s);
            ctx.moveTo(20 * s, 58 * s);
            ctx.lineTo(32 * s, 86 * s);
            ctx.stroke();
        }, /////后
        g: function () {
            ctx.beginPath();
            ctx.moveTo(20 * s, 14 * s);
            ctx.lineTo(8 * s, 40 * s);
            ctx.lineTo(44 * s, 34 * s);
            ctx.moveTo(28 * s, 38 * s);
            ctx.quadraticCurveTo(28 * s, 68 * s, 10 * s, 90 * s);
            ctx.stroke();
        },
        k: function () {
            ctx.beginPath();
            ctx.moveTo(26 * s, 14 * s);
            ctx.quadraticCurveTo(20 * s, 34 * s, 8 * s, 50 * s);
            ctx.moveTo(22 * s, 30 * s);
            ctx.lineTo(42 * s, 38 * s);
            ctx.quadraticCurveTo(32 * s, 68 * s, 8 * s, 90 * s);
            ctx.stroke();
        },
        h: function () {
            ctx.beginPath();
            ctx.moveTo(8 * s, 42 * s);
            ctx.lineTo(44 * s, 38 * s);
            ctx.moveTo(28 * s, 16 * s);
            ctx.quadraticCurveTo(30 * s, 60 * s, 10 * s, 90 * s);
            ctx.stroke();
        },
        ng: function () {
            ctx.beginPath();
            ctx.moveTo(44 * s, 18 * s);
            ctx.quadraticCurveTo(34 * s, 24 * s, 4 * s, 34 * s);
            ctx.moveTo(10 * s, 34 * s);
            ctx.lineTo(18 * s, 86 * s);
            ctx.lineTo(30 * s, 46 * s);
            ctx.lineTo(44 * s, 64 * s);
            ctx.stroke();
        },
        d: function () {
            ctx.beginPath();
            ctx.moveTo(18 * s, 16 * s);
            ctx.lineTo(8 * s, 40 * s);
            ctx.lineTo(42 * s, 36 * s);
            ctx.lineTo(34 * s, 88 * s);
            ctx.lineTo(22 * s, 44 * s);
            ctx.quadraticCurveTo(18 * s, 64 * s, 6 * s, 86 * s);
            ctx.stroke();
        },
        t: function () {
            ctx.beginPath();
            ctx.moveTo(6 * s, 52 * s);
            ctx.lineTo(38 * s, 46 * s);
            ctx.moveTo(26 * s, 14 * s);
            ctx.lineTo(16 * s, 88 * s);
            ctx.quadraticCurveTo(30 * s, 86 * s, 44 * s, 82 * s);
            ctx.stroke();
        },
        l: function () {
            ctx.beginPath();
            ctx.moveTo(10 * s, 24 * s);
            ctx.lineTo(32 * s, 36 * s);
            ctx.moveTo(6 * s, 86 * s);
            ctx.quadraticCurveTo(34 * s, 64 * s, 44 * s, 36 * s);
            //ctx.lineTo(44 * s, 36 * s);
            ctx.stroke();
        },
        r: function () {
            ctx.beginPath();
            ctx.moveTo(18 * s, 18 * s);
            ctx.lineTo(38 * s, 32 * s);
            ctx.moveTo(6 * s, 40 * s);
            ctx.lineTo(34 * s, 48 * s);
            ctx.moveTo(16 * s, 90 * s);
            //ctx.quadraticCurveTo(36 * s, 66 * s, 42 * s, 44 * s);
            ctx.lineTo(42 * s, 56 * s);
            ctx.stroke();
        },
        n: function () {
            ctx.beginPath();
            ctx.moveTo(40 * s, 22 * s);
            ctx.quadraticCurveTo(28 * s, 28 * s, 6 * s, 36 * s);
            ctx.moveTo(12 * s, 36 * s);
            ctx.lineTo(16 * s, 84 * s);
            ctx.moveTo(12 * s, 86 * s);
            ctx.lineTo(44 * s, 84 * s);
            ctx.stroke();
        },
        b: function () {
            ctx.beginPath();
            ctx.moveTo(20 * s, 22 * s);
            ctx.quadraticCurveTo(20 * s, 58 * s, 8 * s, 84 * s);
            ctx.moveTo(14 * s, 20 * s);
            ctx.lineTo(44 * s, 18 * s);
            ctx.moveTo(40 * s, 20 * s);
            ctx.lineTo(40 * s, 88 * s);
            ctx.stroke();
        },
        p: function () {
            ctx.beginPath();
            ctx.moveTo(20 * s, 16 * s);
            ctx.lineTo(8 * s, 42 * s);
            ctx.lineTo(46 * s, 36 * s);
            ctx.moveTo(38 * s, 40 * s);
            ctx.quadraticCurveTo(30 * s, 68 * s, 6 * s, 90 * s);
            ctx.moveTo(16 * s, 46 * s);
            ctx.lineTo(42 * s, 76 * s);
            ctx.stroke();
        },
        f: function () {
            ctx.beginPath();
            ctx.moveTo(10 * s, 24 * s);
            ctx.lineTo(42 * s, 20 * s);
            ctx.quadraticCurveTo(30 * s, 70 * s, 6 * s, 88 * s);
            ctx.moveTo(12 * s, 42 * s);
            ctx.lineTo(30 * s, 50 * s);
            ctx.stroke();
        },
        m: function () {
            ctx.beginPath();
            ctx.moveTo(10 * s, 22 * s);
            ctx.lineTo(42 * s, 18 * s);
            ctx.moveTo(18 * s, 20 * s);
            ctx.lineTo(6 * s, 56 * s);
            ctx.lineTo(42 * s, 50 * s);
            ctx.quadraticCurveTo(40 * s, 66 * s, 28 * s, 88 * s);
            ctx.stroke();
        },
        j: function () {
            ctx.beginPath();
            ctx.moveTo(26 * s, 18 * s);
            ctx.lineTo(26 * s, 40 * s);
            ctx.moveTo(12 * s, 42 * s);
            ctx.lineTo(38 * s, 40 * s);
            ctx.lineTo(6 * s, 88 * s);
            ctx.lineTo(44 * s, 84 * s);
            ctx.stroke();
        },
        ch: function () {
            ctx.beginPath();
            ctx.moveTo(10 * s, 26 * s);
            ctx.lineTo(42 * s, 22 * s);
            ctx.lineTo(6 * s, 88 * s);
            ctx.moveTo(26 * s, 52 * s);
            ctx.lineTo(44 * s, 70 * s);
            ctx.stroke();
        },
        sh: function () {
            ctx.beginPath();
            ctx.moveTo(26 * s, 18 * s);
            ctx.lineTo(28 * s, 56 * s);
            ctx.moveTo(8 * s, 38 * s);
            ctx.lineTo(44 * s, 34 * s);
            ctx.quadraticCurveTo(38 * s, 66 * s, 12 * s, 88 * s);
            ctx.stroke();
        },
        dz: function () {
            ctx.beginPath();
            ctx.moveTo(14 * s, 22 * s);
            ctx.lineTo(38 * s, 20 * s);
            ctx.lineTo(6 * s, 54 * s);
            ctx.lineTo(44 * s, 48 * s);
            ctx.lineTo(28 * s, 88 * s);
            ctx.lineTo(20 * s, 74 * s);
            ctx.stroke();
        },
        ts: function () {
            ctx.beginPath();
            ctx.moveTo(16 * s, 18 * s);
            ctx.lineTo(10 * s, 50 * s);
            ctx.lineTo(42 * s, 46 * s);
            ctx.lineTo(36 * s, 88 * s);
            ctx.lineTo(28 * s, 76 * s);
            ctx.moveTo(32 * s, 16 * s);
            ctx.lineTo(26 * s, 42 * s);
            ctx.quadraticCurveTo(22 * s, 64 * s, 8 * s, 90 * s);
            ctx.stroke();
        },
        s: function () {
            ctx.beginPath();
            ctx.moveTo(32 * s, 18 * s);
            ctx.lineTo(12 * s, 50 * s);
            ctx.lineTo(28 * s, 62 * s);
            ctx.moveTo(36 * s, 46 * s);
            ctx.lineTo(8 * s, 86 * s);
            ctx.lineTo(44 * s, 84 * s);
            ctx.stroke();
        },
        R: function () {
            ctx.beginPath();
            ctx.moveTo(10 * s, 24 * s);
            ctx.lineTo(34 * s, 20 * s);
            ctx.lineTo(20 * s, 42 * s);
            ctx.lineTo(40 * s, 46 * s);
            ctx.lineTo(28 * s, 66 * s);
            ctx.lineTo(18 * s, 60 * s);
            ctx.moveTo(10 * s, 18 * s);
            ctx.lineTo(16 * s, 90 * s);
            ctx.stroke();
        },
        /*音调、浊音*/
        _1: function () {
            ctx.beginPath();
            ctx.moveTo(40 * s, 75 * s);
            ctx.lineTo(36 * s, 87 * s);
            ctx.lineTo(75 * s, 83 * s);
            ctx.stroke();
        },
        _2: function () {
            ctx.beginPath();
            ctx.moveTo(32 * s, 82 * s);
            ctx.bezierCurveTo(32 * s, 68 * s, 72 * s, 68 * s, 72 * s, 82 * s);
            ctx.bezierCurveTo(72 * s, 96 * s, 32 * s, 96 * s, 32 * s, 82 * s);
            ctx.stroke();
        },
        _3: function () {
            ctx.beginPath();
            ctx.moveTo(30 * s, 74 * s);
            ctx.lineTo(33 * s, 91 * s);
            ctx.lineTo(70 * s, 72 * s);
            ctx.lineTo(74 * s, 84 * s);
            ctx.lineTo(68 * s, 93 * s);
            ctx.stroke();
        },
        _4: function () {
            ctx.moveTo(67 * s, 69 * s);
            ctx.quadraticCurveTo(56 * s, 93 * s, 27 * s, 93 * s);
            ctx.moveTo(37 * s, 71 * s);
            ctx.lineTo(62 * s, 90 * s);
            ctx.lineTo(76 * s, 92 * s);
            ctx.stroke();
        },
        $: function () {	//浊音符号,双引号表示
            ctx.beginPath();
            ctx.moveTo(8 * s, 18 * s);
            ctx.lineTo(34 * s, 32 * s);
            ctx.moveTo(8 * s, 36 * s);
            ctx.lineTo(34 * s, 50 * s);
            ctx.stroke();
        },
        t14: function () {
            //测试专用，用于生成音调符号
        },
        S: function () {
            //测试专用，用于生成浊音符号
        }
    };

    function borrowShape(family) {  //浊音字母借对应的清音字符
        family.y = family.i;
        family.w = family.u;
        family.v = family.f;
        family.z = family.s;
        family.gh = family.h;
        family.zh = family.sh;
        //不送气清辅音：
        family.T = family.d;
        family.K = family.g;
        family.P = family.b;
        family.C = family.j;
        //相对不常用
        family.Z = family.dz;
        //family.J = family.r;    //
    }

    borrowShape(heiti);

    //这里肯定还要改的
    if (isNaN(+str[str.length - 1])) { //横彦模式
        try {
            eval(family + "." + str + "()");
        } catch (err) {
            alert(WARNING);
        }
    } else {    //方彦模式
        /* 转码 */
        //解析str结尾表示音调的数字
        tone = str[str.length - 1];
        str = str.slice(0, str.length - 1);

        //转zhi, chi, shi, ri, zi, ci, si
        str = str.replace(/^([zcsr]h?)i$/, "$1");
        //合并wu, yi为无声母的u,i
        str = str.replace(/wu/, "u");
        str = str.replace(/yi/, "i");
        //转u为v
        str = str.replace(/(yu)|ü/, "v");
        str = str.replace(/([jqx])u/, "$1v");
        //转结尾的un为uen
        str = str.replace(/un$/, "uen");
        //转结尾的ie, ve为iE, vE
        str = str.replace(/([ivy])e$/, "$1E");
        //转ei为Ei
        str = str.replace(/e(?=i)/, "E");
        //转结尾的ui, iu为uei, iou
        str = str.replace(/ui$/, "uEi");
        str = str.replace(/iu$/, "iou");
        //转zh, ch, sh, 全部！！！
        str = str.replace(/zh/, "j");
        str = str.replace(/ch/, "q");
        str = str.replace(/sh/, "x");
        //转ian, yan
        str = str.replace(/([iy])an$/, "$1En");
        /*拆分部件*/
        if (str.match(reg = /^[bpmfdtlgkhjqxrzcsyw]|^n(?!g)/)) {	//parse 声母
            arr[0] = str.match(reg);
            str = str.slice(1);
        }
        if (str.match(reg = /^[iuv](?=[aoeiuE])/)) {			//parse y,w,yu
            arr.push(str.match(reg));
            str = str.slice(1);
        }
        if (str.match(reg = /^Ei|^ao|^ai|^ng/)) {
            arr.push(str.match(reg));
            str = str.slice(2);
        } else if (str.match(reg = /^a|^o|^e(?!r)|^E|^i|^u|^v/)) {
            arr.push(str.match(reg));
            str = str.slice(1);
        }
        str.length > 0 && arr.push(str);		//parse 剩下的部件
        /*根据部件数量分配位置*/
        switch (arr.length) {
            case 4:
                for (var i = 0, str = ""; i < 4; arr[i] += i + 1 + "()", i++);
                break;
            case 3:
                if (/^[iuv]$/.test(arr[1]) && arr[2][0] != "n" && arr[1] + arr[2] !== "uo") {
                    arr[0] += "1()";			//排除uo
                    arr[1] += "2()";
                    arr[2] += "34()";
                } else {
                    arr[0] += "12()";
                    arr[1] += "3()";
                    arr[2] += "4()";
                }
                break;
            case 2:
                if (
                    /^[bpmfdtnlgkhjqxrzcsyw]$/.test(arr[0])
                    || ( arr[0] == "v" && arr[1] != "n" )
                ) {
                    arr[0] += "12()";
                    arr[1] += "34()";
                } else {
                    arr[0] += "5()";
                    arr[1] += "6()";
                }
                break;
            case 1:
                arr[0] += "14()";
                break;
        }
        /*最后的解码*/
        if (tone === "0") {
            ctx.save();
            ctx.scale(1, 1.28);		//拉伸
        }
        for (i = 0; i < arr.length; i++) {
            try {
                eval(family + "." + arr[i]);
            } catch (err) {
                alert(WARNING);
            }
        }
        if (tone === "0") {
            ctx.restore();
        } else {
            try {
                eval(family + "._" + tone + "()");
            } catch (err) {
                alert(WARNING);
            }
        }
        //console.log(arr);
        //console.log(ctx.strokeStyle);
    }
};
