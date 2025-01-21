import useLike from "../../hooks/useLike"


const Likes = () => {
    const {like, handleDislike, handleLike} = useLike()
  return (
    <div style={{
        display: "flex",
        gap: "16px"

    }}>
        <button onClick={handleLike}>Like</button>
        <p style={{ fontSize: "48px" }}>{like}</p>
        
    </div>
  )
}

export default Likes
