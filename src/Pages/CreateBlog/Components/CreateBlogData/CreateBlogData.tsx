import { useState, useEffect } from "react";
import DataInput from "./DataInput";
import UploadImage from "./UploadImage";
import { Button } from "@chakra-ui/react";
import createBlogApi from "../../../../apiservice/createBlogApi";

const DefaultData = {
  slug: "",
  title: "",
  keyword: "",
  heading: "",
  city: "",
  state: "",
  pinCode: "",
  blogUrl: "",
  blurHash: "",
};

const CreateBlogData = () => {
  const [formData, setFormData] = useState(DefaultData);
  const [imgUrl, setImageUrl] = useState<string | null>(null);
  const handlePostClick = async () => {
    if (
      formData.slug == "" ||
      formData.title == "" ||
      formData.heading == "" ||
      formData.blogUrl == "" ||
      imgUrl === null
    ) {
      console.log("insufficient info");
      return;
    }

    const data = await createBlogApi({ ...formData, imgUrl: imgUrl });
    console.log(data);
  };
  useEffect(() => {
    console.log(imgUrl);
  }, [imgUrl]);
  return (
    <>
      <div>
        <DataInput
          label="Slug"
          type="text"
          placeholder="Enter the slug of the blog"
          helper="Ex:- how-to-reach-meerut"
          formData={formData}
          stateFunc={setFormData}
          property="slug"
        />
        <DataInput
          label="Title"
          type="text"
          placeholder="Enter title of the blog"
          formData={formData}
          stateFunc={setFormData}
          property="title"
        />
        <DataInput
          label="keyword"
          type="text"
          placeholder="Enter the keyword of the blog"
          formData={formData}
          stateFunc={setFormData}
          property="keyword"
        />
        <DataInput
          label="Heading"
          type="text"
          placeholder="Provide a suitable of the blog"
          helper="can be same as of keyword"
          formData={formData}
          stateFunc={setFormData}
          property="heading"
        />
        <DataInput
          label="City"
          type="text"
          placeholder="Name of the city the blog is about"
          formData={formData}
          stateFunc={setFormData}
          property="city"
        />
        <DataInput
          label="State"
          type="text"
          placeholder="Name of the State"
          formData={formData}
          stateFunc={setFormData}
          property="state"
        />
        <DataInput
          label="Pin Code"
          type="text"
          placeholder="Enter the pin code of the area"
          formData={formData}
          stateFunc={setFormData}
          property="pinCode"
        />
        <DataInput
          label="Blog Url"
          type="text"
          placeholder="Github url of the blog"
          formData={formData}
          stateFunc={setFormData}
          property="blogUrl"
        />
        <UploadImage stateFunc={setImageUrl} />
        <DataInput
          label="Blur Hash"
          type="text"
          placeholder="Enter blur hash of the given Image"
          helper="use blurha.sh"
          formData={formData}
          stateFunc={setFormData}
          property="blurHash"
        />
        <div className="my-4">
          <Button
            isLoading={false}
            loadingText="Posting.."
            colorScheme="teal"
            variant="solid"
            onClick={() => {
              handlePostClick();
            }}
          >
            Post Blog
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateBlogData;
