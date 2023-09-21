import { useState } from "react";
import { BiImageAdd, BiUserCircle } from "react-icons/bi";
type Props = {};

const FileInput = (props: Props) => {
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [previewImage, setPreviewImage] = useState<any>(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // Preview the selected image
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  return (
    <div className="image-box">
      {previewImage ? (
        <img
          className="image-preview"
          src={previewImage}
          alt="Selected File Preview"
        />
      ) : (
        <div className="user-img">
          <BiUserCircle className="user-icon" />
        </div>
      )}

      <div className="input-image">
        <input
          onChange={handleFileChange}
          className="input-filed"
          type="file"
          name=""
          id="file"
        />
        <label htmlFor="file" className="file-label">
          <BiImageAdd />
        </label>
      </div>
    </div>
  );
};

export default FileInput;
