function LikeButton() {
  const [like, setLike] = React.useState(false);
  const text = like ? "좋아요 취소" : "좋아요";

  function toggleLike() {
    setLike(!like);
  }

  return /*#__PURE__*/React.createElement("button", {
    onClick: toggleLike
  }, text);
}

function Container() {
  const [count, setCount] = React.useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD604\uC7AC \uCE74\uC6B4\uD2B8: "), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: increase
  }, "\uC99D\uAC00"), /*#__PURE__*/React.createElement("button", {
    onClick: decrease
  }, "\uAC10\uC18C")));
}

ReactDOM.render( /*#__PURE__*/React.createElement(Container, null), document.querySelector("#root"));