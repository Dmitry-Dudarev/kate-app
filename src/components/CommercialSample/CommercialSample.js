import React from "react";
import './CommercialSample.css';

// function CommercialSample(props) {

//   const preview = require(props.item.previews[0].url);

//   return (
//     <div className="commercial-sample">
    
//       <img
//         className="commercial-sample__image" 
//         src={preview}
//         alt="dfd"
//         />
//     </div>
//   );
// };

function CommercialSample(props) {
  const { item } = props;
  const [previewUrl, setPreviewUrl] = React.useState('');

  React.useEffect(() => {
    const loadImage = async () => {
      const url = `../../images/commercialLinks/${item.name}/${item.previews[0].name}`;
      try {
        const response = await fetch(url);
        if (response.ok) {
          setPreviewUrl(url);
        } else {
          console.error(`Image not found at ${url}`);
        }
      } catch (error) {
        console.error(`Error loading image at ${url}`, error);
      }
    };

    loadImage();
  }, [item]);

  return (
    <div className="commercial-sample">
      {previewUrl ? (
        <img
          className="commercial-sample__image"
          src={previewUrl}
          alt={item.name}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default CommercialSample;