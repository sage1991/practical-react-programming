/**
 * async await function returns promise
 */
async function return10() {
  return 10
}

async function returnPromise() {
  return Promise.resolve(10)
}

async function throwError() {
  throw Error("error")
}

returnPromise()
  .then(console.log)

return10()
  .then(console.log)

throwError()
  .catch(console.error)
