﻿new Promise(resolve => { // eslint-disable-line compat/compat
    var i = 0;
    const interval = setInterval(() => {
        if(i > 100 || $('span:contains("Home Appliances Total")').length) {
            clearInterval(interval);
            resolve();
        }
        i++;
    }, 200);
});