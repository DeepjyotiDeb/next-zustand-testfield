/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useState } from "react";

export default function ImageView() {
    const [imageView, setImageView] = useState();
    
    const imageHandler = (e) => {
        if(e.target.files.length === 0) return;
        setImageView(e.target.files[0])
    }
    return (
        <div>
        <input
        type="file"
        accept="image/*"
        onChange={imageHandler}
        />
        {imageView && (
            <img
            src={URL.createObjectURL(imageView)}
            alt = "Thumb"
            />
        )}
        </div>
    );
}
