function PostCard({ title, body, tags, reactions, views }) {
  return (
    <div className="post-card">
      <h4>{title}</h4>
      <p>{body}</p>
      <div className="post-tags">
        {tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </div>
      <div className="post-footer">
        <span>👍 {reactions.likes}</span>
        <span>👎 {reactions.dislikes}</span>
        <span>👁️ {views}</span>
      </div>
    </div>
  );
}
export default PostCard;
