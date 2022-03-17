function resolveAfterSeconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 1500);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfterSeconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();