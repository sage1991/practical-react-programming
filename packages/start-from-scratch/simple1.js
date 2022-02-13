function LikeButton() {
  const [ like, setLike ] = React.useState(false)
  const text = like ? "좋아요 취소" : "좋아요"

  function onClickButton() {
    setLike(!like)
  }

  return React.createElement("button", { onClick: onClickButton }, text)
}

ReactDOM.render(
  React.createElement(LikeButton),
  document.querySelector("#root")
)
