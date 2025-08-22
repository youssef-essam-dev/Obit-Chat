import { CircularImage } from "./TimeLine";
export const Post = ({ post }) => {
    return (
        <div className="card-container-timeline ">
        <div className="flex justify-between">
          <div className="flex">
            <CircularImage
              src="./images/ben-den-engelsen-YUu9UAcOKZ4-unsplash.jpg"
              alt="Profile"
            />
            <div>
              <h2 className="text-lg font-bold m-0">{post.name}</h2>
              <p className="text-gray-600 text-xs font-normal m-0">
                {post.subtitle}
              </p>
              <span className="text-gray-600 text-xs font-normal">
                {post.date} <i className="fa-solid fa-earth-americas"></i>
              </span>
            </div>
          </div>

          <div>
            <i className="fa-solid fa-ellipsis mr-5 cursor-pointer"></i>
            <i className="fa-solid fa-xmark cursor-pointer"></i>
          </div>
        </div>

        <div>
          <p className="m-3 max-w-full break-words text-sm font-normal">
            {post.content}
          </p>
          <img src="" alt="Post" />
        </div>

        <div className="flex justify-between">
          <div className="px-3">
            <i className="fa-regular fa-thumbs-up"></i>
            <i className="fa-regular fa-heart"></i>
            <span className="text-gray-600 text-xs font-normal px-1">150</span>
          </div>
          <div className="flex px-2">
            <p className="text-gray-600 text-xs font-normal px-2">12 comments</p>
            <p className="text-gray-600 text-xs font-normal">29 reposts</p>
          </div>
        </div>

        <hr className="max-w-full h-0 bg-slate-500 m-0" />

        <div className="flex justify-around mt-2">
          <div className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500" >
            <i class="fa-solid fa-thumbs-up"></i>
            <p className="ml-2 font-medium">Like
            </p>
          </div>
          <div className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500" >
            <i class="fa-solid fa-comment"></i>
            <p className="ml-2 font-medium">Comment</p>
          </div>
          <div className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500">
            <i class="fa-solid fa-retweet"></i>
            <p className="ml-2 font-medium">Repost</p>
          </div>
          <div className="flex items-center cursor-pointer text-gray-600 hover:text-blue-500">
            <i class="fa-solid fa-paper-plane-top"></i>
            <p className="ml-2 font-medium">Send</p>
          </div>
        </div>
      </div>
    );
  };