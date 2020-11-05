new Promise(resolve => { // eslint-disable-line compat/compat
    var i = 0;
    const interval = setInterval(() => {
        if(i > 50) {
            clearInterval(interval);
            resolve();
        }
        if($('.dx-scheduler-appointment-title').length) {
            i = 50;
        }
        i++;
    }, 100);
});