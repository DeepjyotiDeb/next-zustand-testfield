import Image from 'next/image';
import sample from '../assets/sample.jpeg';
import MultiCrops from 'react-multi-cropper';
import { useState } from 'react';

const Cropper = () => {
  const [boxes, setBoxes] = useState([]);
  const [imageMap, setImageMap] = useState({});

  const updateBoxes = (_, __, _boxes) => setBoxes(_boxes);

  return (
    <div>
      <MultiCrops
        src={sample}
        zoom={1}
        boxes={boxes}
        onChange={updateBoxes}
        onCrop={(e, map) => setImageMap(map)}
        onLoad={(map) => setImageMap(map)}
      />
      {boxes.map(
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        (box, i) => !!imageMap[box.id] && <img src={imageMap[box.id]} key={i} />
      )}
    </div>
  );
};

export default Cropper;
