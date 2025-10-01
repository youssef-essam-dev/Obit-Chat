

const FeedCard = ({ image, name, description }) => (
  <div className="flex">
    <div className="w-14 h-14 mx-3 rounded-full overflow-hidden border-2 border-white">
      <img className="w-full h-full object-cover" src={image} alt={name} />
    </div>
    <div className="flex-1">
      <h2 className="text-base font-semibold m-0">{name}</h2>
      <p className="text-xs text-gray-600 m-0">{description}</p>
      <button className="m-1 px-4 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
        Follow
      </button>
    </div>
  </div>
);

export default FeedCard;
