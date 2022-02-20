const fetchData = async (value: number) => {
  return new Promise<number>(resolve => {
    setTimeout(() => resolve(value), 1000)
  })
}

const main = async () => {
  console.log("main function start!")
  const data1 = await fetchData(10)
  const data2 = await fetchData(20)
  console.log(`data1: ${data1}`)
  console.log(`data2: ${data2}`)
}

main()
