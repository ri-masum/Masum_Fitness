import PropTypes from "prop-types"
const Blog = ({ trainers }) => {
  console.log(trainers);
  return (
    <div>
      <div className="hero min-h-[50vh] min-w-[40vh] border-4 bg-gray-800">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={trainers.picture}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Blog Img"
          />
          <div>
            <h1 className="text-5xl font-bold">{trainers.blog_name}</h1>
            <p className="py-6">
             {trainers.details}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
Blog.propTypes ={
    trainers:PropTypes.object
}
