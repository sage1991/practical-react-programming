function LikeButton() {
  const [ like, setLike ] = React.useState(false)
  const text = like ? "좋아요 취소" : "좋아요"

  function onClickButton() {
    setLike(!like)
  }

  return React.createElement("button", { onClick: onClickButton }, text)
}

function Container() {
  const [ count, setCount ] = React.useState(0)

  function increase() {
    setCount(count + 1)
  }

  function decrease() {
    setCount(count - 1)
  }

  return React.createElement(
    "div",
    null,
    React.createElement(LikeButton),
    React.createElement(
      "div",
      { style: { marginTop: 20 } },
      React.createElement("span", null, "현재 카운트: "),
      React.createElement("span", null, count),
      React.createElement("button", { onClick: increase }, "증가"),
      React.createElement("button", { onClick: decrease }, "감소")
    )
  )
}

ReactDOM.render(
  React.createElement(Container),
  document.querySelector("#root")
)
