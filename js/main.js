(function() {
    var n = 0;
    var t = document.title;
    var f = function() {
        n ++;
        switch (n) {
            case 3: 
                n = 1;
            case 1: 
                document.title = 'Aaron Mohr'; 
                break;
            default: 
                document.title = 'Needs A Job';
        }
        window.setTimeout(f, 800);
    }
    f();
})();