function myPromiseFunction() {
    return new Promise((resolve, reject) => {

      const success = true;
      if (success) {
        resolve('Operation successful!');
      } else {
        reject('Operation failed.');
      }
    });
  }
  

  myPromiseFunction()
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });
  