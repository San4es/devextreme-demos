﻿new Promise(resolve => { // eslint-disable-line compat/compat
    var i = 0;
    const interval = setInterval(() => {
        if(i > 100 || $('#tasks-count:contains("0")').length) {
            clearInterval(interval);
            resolve();
        }
        i++;
    }, 200);
});