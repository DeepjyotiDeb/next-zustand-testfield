/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Image from "next/image";
import { createRef, useState } from "react";

export default function ImageView() {
  const [imageView, setImageView] = useState([]);
  const [imgData, setImgData] = useState();
  const imageRef = createRef();
  const imageHandler = (e) => {
    let imgObj = {};
    // console.log("event is ",e)
    const { files } = e.target;
    if (files.length === 0) return;
    const fileList = Object.values(files);
    fileList.map((file, id) => {
      const blob = URL.createObjectURL(file);
      const newObj = URL.createObjectURL(file);
      console.log("file", newObj);
      imgObj["id"] = 56;
      imgObj["blob"] = blob;
      console.log(`image id ${id}`, blob);

      setImageView((prevState) => [...prevState, imgObj]);
      console.log("handler: - ", imageView);
    });
  };

  const upLoad = (imgData) => {
    setImgData(imgData);
    // document.getElementById("selectImage").click();
    console.log("clicked img", imgData);
  };
  const repimg = (e) => {
    console.log(imgData);
    console.log(
      "index of: - ",
      imageView.findIndex((ele) => ele.blob === imgData.blob)
    );
    const refIndex = imageView.findIndex((ele) => ele.blob === imgData.blob);
    // console.log("reference img:-",refVal, " and ref index: -", refIndex);
    let imgObj = {};
    const { files } = e.target;
    if (files.length === 0) return;
    const fileList = Object.values(files);
    fileList.map((file, id) => {
      const blob = URL.createObjectURL(file);
      imgObj["id"] = 56;
      imgObj["blob"] = blob;
      console.log(imgObj);
      imageView.splice(refIndex, 1, imgObj);
      setImageView([...imageView]);
    });
    console.log(imageView);
  };

  const convertToBlob = () => {
    // fetch(imageView)
    console.log("click", imageView[0].blob);
    console.log("blob props", imageView[0].blob.height);
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={imageHandler} />
      {/* {imageView &&
        imageView.map((img, id) => (
          <div key={id} style={styles.preview}>
            <img
              multiple
              src={img.blob}
              ref={imageRef}
              key={id}
              alt={`image id - ${id}`}
              onClick={() => upLoad(img)}
            />
            <button onClick={upLoad}>replace image</button>
            <input
              id="selectImage"
              hidden
              type="file"
              onChange={(e) => repimg(e)}
            />
            <button onClick={convertToBlob}>convert to blob</button>
          </div>
        ))} */}
      {/* {imageView.length>0 &&  */}
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <img
          alt="Mountains"
          src= "https://via.placeholder.com/150"
          // layout="fill"
          // objectFit="contain"
          ref={imageRef}
          onClick={()=> console.log(imageRef)}
        />
      </div>
      {/* } */}
    </div>
  );
}
// "https://via.placeholder.com/150"
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    // minWidth: "100px",
    maxWidth: 200,
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    border: "1px solid red",
    //   maxHeight: 200
  },
  image: { maxWidth: "50%", maxHeight: 200, width: "50px" },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};
const replaceImg = (e) => {
  console.log(e);
  //filter/reduce/find => object methods in mdn docs
  //remove element from the array //array methods in mdn docs
  //append at the end or front
  //slice/splice function array [1,2][3][4,5] =
};
