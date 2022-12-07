/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { sha1, sha256 } from "crypto-hash";
import { MD5 } from "crypto-js";
import { createRef, useState } from "react";
import SparkMD5 from "spark-md5";
import { ExportInput } from "./ExportableInputs";

export default function ImageView() {
  const [imageView, setImageView] = useState([]);
  const [imgData, setImgData] = useState();
  const [hashData, setHashData] = useState('');
  const [hashContent, setHashContent] = useState('');

  const imageRef = createRef();
  // const imageHandler = (e) => {
  //     let imgObj = {};
  //     // console.log("event is ",e.target)
  //     const {files} = e.target;
  //     // console.log('files - main', files)

  //     if(files.length === 0) return;
  //     const fileList = Object.values(files);
  //     fileList.map((file, id) => {
  //       console.log('file', file);
  //         const blob = URL.createObjectURL(file)
  //         imgObj["id"]= 56;
  //         imgObj["blob"] = blob;
  //         console.log(`image id ${id}`, blob)

  //         setImageView(prevState => [...prevState, imgObj]);
  //         console.log("handler: - ", imageView)

  //         // const fr = new FileReader();
  //         // let result;
  //         // fr.onload = async () => {
  //         //   result = await sha256(fr.result);
  //         //   console.log("result", result);
  //         // }
  //         // setHashData(result);
  //         // setHashContent(fr.result)
  //         // console.log("result 2", result)
  //         // fr.readAsText(e.target.files[0]);
  //     })
  // }

  const upLoad = (imgData) => {
    setImgData(imgData);
    document.getElementById("selectImage").click();
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


  const handleFileInput = async (e) => {
    let result = await ExportInput(e.target.files[0]).then((res) => {
      console.log("res", res);
      return res;
    });
    console.log('target 0', result)
  };
  // const encodeImageFileAsURL = async file =>
  // new Promise(resolve => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = function () {
  //     const base64data = reader.result;
  //     resolve(base64data);
  //     console.log('base data', base64data)
  //   };
  //   console.log('reader', reader)
  // });
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        // onChange={imageHandler}
        onChange={handleFileInput}
      />
      {imageView &&
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
            {/* <button onClick={upLoad}>replace image</button> */}
            <input
              id="selectImage"
              hidden
              type="file"
              onChange={(e) => repimg(e)}
            />
          </div>
        ))}
      <button
        onClick={() => {
          console.log("hash data", hashData);
        }}
      >
        {" "}
        show data
      </button>
    </div>
  );
}
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
