export default function ParallelRequest() {
  function resolveFoo() {
    return "resolve can accept functions and this was returned in 5secs";
  }
  let fiveSeconds = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(resolveFoo()), 5000);
    });
  // fiveSeconds().then((message) => {
  //   console.log(message);
  // });
  let threeSeconds = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve("resolved in 3 seconds"), 3000);
    });
  
  const runParallel = () => {
    const combinedReq = [threeSeconds(), fiveSeconds()];
    Promise.all(combinedReq).then((values) => console.log(values));
  };

  //async functions
  async function processParallel() {
    const combinedReq = [fiveSeconds(), threeSeconds()];
    combinedReq.forEach(async request => {
      await request.then(response => console.log("resolved request", response))
    })
  }
  return (
    <div>
      ParallelRequest
      {console.log("first")}<button onClick={fiveSeconds}>running in 5</button>
      <button onClick={threeSeconds}>running in 3</button>
      <button onClick={runParallel}>running together</button>
      <div>
        <button onClick={processParallel}>next line</button>
        <div>statement</div>
      </div>
    </div>
  );
}
