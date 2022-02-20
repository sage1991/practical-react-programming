
const throwErrorRandom = () => {
  if (Math.random() > 0.5) {
    throw Error("error")
  }
  return Promise.resolve()
}

const throwErrorRandomMain = async (count: number = 1): Promise<void> => {
  try {
    console.log(`${count} times called`)
    await throwErrorRandom()
    return throwErrorRandomMain(count + 1)
  } catch (e) {
    console.error(e)
  }
}

throwErrorRandomMain()
