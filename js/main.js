(function() {
    var n = 0;
    var t = document.title; // original page title
    var f = function() {
        n ++;
        switch (n) {
            case 3: 
                n = 1; // no break, so continue to next label
            case 1: 
                document.title = 'Aaron Mohr'; 
                break;
            default: 
                document.title = 'Needs A Job';
        }
        window.setTimeout(f, 600); // every 500ms, adjust if necessary
    }
    f(); // start the animation
})();