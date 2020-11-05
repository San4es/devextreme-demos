new Promise(resolve => { // eslint-disable-line compat/compat
    const interval = setInterval(() => {
        if($('div:contains("Chai")').length) {
            clearInterval(interval);
            resolve();
        }
    }, 200);
});