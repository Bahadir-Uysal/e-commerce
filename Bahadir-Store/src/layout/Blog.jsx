import madison1 from "../assets/mad1.jpeg"
import madison2 from "../assets/mad2.jpeg"
import madison3 from "../assets/mad3.jpeg"



function Blog () {
    const posts = [
        {
          id: 1,
          img: madison1,
          title: "Loudest à la Madison #1 (L'integral)",
          description:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
          date: "22 April 2021",
          comments: 10,
        },
        {
          id: 2,
          img: madison2,
          title: "Loudest à la Madison #2 (L'integral)",
          description:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
          date: "22 April 2021",
          comments: 10,
        },
        {
          id: 3,
          img: madison3,
          title: "Loudest à la Madison #3 (L'integral)",
          description:
            "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
          date: "22 April 2021",
          comments: 10,
        },
      ];
    return(
        <>
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-16 mt-6">
      <h5 className="text-center text-[#23A6F0] font-semibold">Practice Advice</h5>
      <h2 className="text-4xl font-bold text-center mb-6">Featured Posts</h2>
      <p className="text-center text-gray-600 mb-8">
        Problems trying to resolve the conflict between Classical and Newtonian mechanics.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-0  mx-auto"> 
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md  mx-auto flex flex-col justify-center"
            style={{ height: '500px', width: '80%' }} 
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-1/2 object-cover shadow-sm" 
            />
            
            <div className="p-4 sm:p-6 flex flex-col justify-between h-1/2"> 
              <div className="w-1/2 flex justify-between mb-2 gap-4 text-xs ">
                <p className="hover:text-[#8EC2F2]">Google</p>
                <p className="hover:text-[#8EC2F2]">Trending</p>
                <p className="hover:text-[#8EC2F2]">New</p>
              </div>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{post.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="flex items-center gap-1"><i className="fa-regular fa-clock fa-xs text-[#8EC2F2] mt-1"></i>{post.date}</span>
                <span className="flex items-center gap-1"><i className="fa-solid fa-chart-line fa-xs text-[#23856D] mt-1"></i>{post.comments} comments</span>
              </div>
              <button className="mt-4 text-sm text-blue-500 text-left flex items-center gap-2"> 
                Learn More<i className="fa-solid fa-arrow-right fa-xs text-[#8EC2F2] mt-1"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
        </>
    )
}

export default Blog