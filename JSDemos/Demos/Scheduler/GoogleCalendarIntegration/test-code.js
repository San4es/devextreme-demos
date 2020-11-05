new Promise(resolve => { // eslint-disable-line compat/compat
    var i = 0;
    const interval = setInterval(() => {
        if(i > 50 || $('.dx-scheduler-appointment-title').length) {
            clearInterval(interval);
            resolve();
        }
        i++;
    }, 100);
});