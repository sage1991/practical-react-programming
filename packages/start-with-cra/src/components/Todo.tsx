import React, { FC } from "react"

interface Props {
  title: string
}

export const Todo: FC<Props> = (props) => {
  return (
    <div>
      <p>{ props.title }</p>
    </div>
  )
}
