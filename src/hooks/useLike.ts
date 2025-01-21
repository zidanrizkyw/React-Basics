import { useState } from "react"


const useLike = () => {
  const [like, useLike] = useState("Dislike")

  const handleLike = () => {
    useLike("Like")
  }
  const handleDislike = () => {
    useLike("Dislike")
  }

  return {
    like,
    handleLike,
    handleDislike,
  }

}

export default useLike
