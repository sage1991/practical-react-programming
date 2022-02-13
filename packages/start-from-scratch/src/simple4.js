function LikeButton() {
  const [ like, setLike ] = React.useState(false)
  const text = like ? "좋아요 취소" : "좋아요"

  function toggleLike() {
    setLike(!like)
  }

  return <button onClick={toggleLike}>{text}</button>
}

function Container() {
  const [ count, setCount ] = React.useState(0)

  function increase() {
    setCount(count + 1)
  }

  function decrease() {
    setCount(count - 1)
  }

  return (
    <div>
      <LikeButton />
      <div style={{ marginTop: 20 }}>
        <span>현재 카운트: </span>
        <span>{count}</span>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Container />,
  document.querySelector("#root")
)
