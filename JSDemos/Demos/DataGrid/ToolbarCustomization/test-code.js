new Promise(resolve => { // eslint-disable-line compat/compat
    const interval = setInterval(() => {
        resolve();
    }, 2000);
});