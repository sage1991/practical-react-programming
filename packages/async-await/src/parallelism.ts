

const fetchNumber = (num: number, timeout: number) => {
  return new Promise<number>(resolve => {
    setTimeout(() => {
      console.log(`${num} resolved`)
      resolve(num)
    }, timeout)
  })
}

const synchronous = async () => {
  const num1 = await fetchNumber(10, 1000)
  const num2 = await fetchNumber(50, 500)
}

// synchronous()


const asynchronous = async () => {
  // const [ num1, num2 ] = await Promise.all([ fetchNumber(10, 1000), fetchNumber(50, 500) ])
  // or
  const promise1 = fetchNumber(10, 1000)
  const promise2 = fetchNumber(50, 500)
  const num1 = await promise1
  const num2 = await promise2
}

asynchronous()
