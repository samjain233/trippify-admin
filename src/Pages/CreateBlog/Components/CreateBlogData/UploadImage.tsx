import { useState } from "react";
import { storage } from "../../../../utils/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";

type ImageUploadFunc = () => void;

const UploadImage = (props:any) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [hideProgress, setHideProgress] = useState<boolean>(true);
  const imageUpload: ImageUploadFunc = () => {
    if (file === null) return;
    setHideProgress(false);
    const storageRef = ref(storage, `images/${v4() + file.name}`);
    const metadata = {
      contentType: file.type,
    };
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);

        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
        }
      },
      () => {
        setHideProgress(true);
        setUploadProgress(0);
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          props.stateFunc(downloadURL);
        });
      }
    );
    return;
  };

  return (
    <>
      <div className="my-8">
        <div className="p-4 border-blue-300 border-2 w-1/2">
          {!file && <div className="w-full h-[300px] "></div>}
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt=""
              className="h-[300px] w-full object-contain"
            />
          )}
          <input
            type="file"
            onChange={(event) => {
              setFile(event.target.files ? event.target.files[0] : null);
            }}
          />
          <button
            onClick={() => {
              imageUpload();
            }}
          >
            Upload Image
          </button>
          <div
            className={`w-full h-[10px] bg-white ${
              hideProgress ? "opacity-0" : "opacity-100"
            } transition-all ease-in-out`}
          >
            <div
              className={`h-[10px] bg-blue-700 transition-all duration-200 ease-in-out`}
              style={{ width: uploadProgress + "%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadImage;
