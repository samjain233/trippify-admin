import CreateBlogData from "./Components/CreateBlogData/CreateBlogData";

const CreateBlog = () => {
  return (
    <>
      <div className="bg-[#001a2c] w-full text-white">
        <div className="grid grid-cols-6">
          <div className="bg-[#00111C] w-full h-screen sticky top-0 shadow-lg">
            hello world
          </div>
          <div className="col-span-5 w-full px-8">
            <CreateBlogData />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
