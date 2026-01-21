import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import "../App.css";   

function UploadPage() {
  const [file, setFile] = useState(null);
  const { setExtractedText } = useContext(DataContext);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) return alert("Please select a judgment PDF");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!data.extractedText) {
      alert("Error extracting document text.");
      return;
    }

    setExtractedText(data.extractedText);
    navigate("/summary");
  };

  return (
    <div className="upload-wrapper">

      {/* Animated background blobs */}
      <div className="bg-blob"></div>
      <div className="bg-blob2"></div>

      <div className="upload-card shadow-lg">
        <h2 className="upload-title">Upload Legal Document</h2>
        <p className="upload-sub">Upload any court judgment PDF to extract insights.</p>

        {/* Upload Dropzone */}
        <label className="upload-dropzone">
          <i className="bi bi-cloud-arrow-up upload-icon"></i>
          <p className="drop-text">Click to browse or drag & drop your PDF here</p>

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>

        {/* Show selected file */}
        {file && <p className="selected-file">📄 {file.name}</p>}

        <button className="btn upload-btn" onClick={handleUpload}>
          Upload & Extract →
        </button>
      </div>
    </div>
  );
}

export default UploadPage;
