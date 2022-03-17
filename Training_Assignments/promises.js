var promise = new Promise(function(resolve, reject) {
    const x = "shruti";
    const y = "shruti"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
    });
    
    promise
        .then(function () {
            console.log('Promise executed successfully');
        })
        .catch(function () {
            console.log('Some error has occurred');
        });
    