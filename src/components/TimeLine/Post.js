import { CircularImage } from "./TimeLine";


export const Post = ({ post }) => {
  return (
    <div className="card-container-timeline">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex">
          <CircularImage
            src="./images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg"
            alt={`${post.name}'s profile picture`}
          />
          <div>
            <h2 className="text-lg font-bold m-0">{post.name}</h2>
            <p className="text-gray-600 text-xs font-normal m-0">{post.subtitle}</p>
            <span className="text-gray-600 text-xs font-normal">
              {post.date} <i className="fa-solid fa-earth-americas" aria-hidden="true"></i>
            </span>
          </div>
        </div>

        <div className="flex space-x-2">
          <button className="btn-reset" aria-label="More options">
            <i className="  fa-solid fa-ellipsis"></i>
          </button>
          <button className="btn-reset" aria-label="Close post">
            <i className="  fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div>
        <p className="m-3 max-w-full break-words text-sm font-normal">
          {post.content}
        </p>
        {post.image && (
          <img
            src={post.image}
            alt={`${post.name}'s post image`}
            className="max-w-full mt-2 rounded-md"
          />
        )}
      </div>

      {/* Reactions */}
      <div className="flex justify-between mt-2">
        <div className="px-3 flex space-x-1">
          <i className="fa-regular fa-thumbs-up" aria-hidden="true"></i>
          <i className="fa-regular fa-heart" aria-hidden="true"></i>
          <span className="text-gray-600 text-xs font-normal px-1" aria-label="150 reactions">150</span>
        </div>
        <div className="flex px-2 space-x-2">
          <p className="text-gray-600 text-xs font-normal" aria-label="12 comments">12 comments</p>
          <p className="text-gray-600 text-xs font-normal" aria-label="29 reposts">29 reposts</p>
        </div>
      </div>

      <hr className="max-w-full h-0 bg-slate-500 m-0" />

      {/* Actions */}
      <div className="flex justify-around mt-2">
        <button  aria-label="Like post" className="btn-reset flex items-center text-gray-600 hover:text-blue-500">
          <i className="fa-solid fa-thumbs-up"></i>
          <span className="ml-2 font-medium">Like</span>
        </button>
        <button aria-label="Comment on post" className="btn-reset flex items-center text-gray-600 hover:text-blue-500">
          <i className="fa-solid fa-comment"></i>
          <span className="ml-2 font-medium">Comment</span>
        </button>
        <button aria-label="Repost" className="btn-reset flex items-center text-gray-600 hover:text-blue-500">
          <i className="fa-solid fa-retweet"></i>
          <span className="ml-2 font-medium">Repost</span>
        </button>
        <button aria-label="Send post" className="btn-reset flex items-center text-gray-600 hover:text-blue-500">
          <i className="fa-solid fa-paper-plane-top"></i>
          <span className="ml-2 font-medium">Send</span>
        </button>
      </div>
    </div>
  );
};
