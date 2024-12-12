import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FcUpload } from "react-icons/fc";
import toast from "react-hot-toast";

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB in bytes
const VALID_FILE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      const validFiles = [];
      const newPreviews = [];

      acceptedFiles.forEach((file) => {
        if (file.size > MAX_FILE_SIZE) {
          toast.error(`Tệp ${file.name} quá lớn. Vui lòng chọn tệp nhỏ hơn 4MB.`);
          return;
        }

        if (!VALID_FILE_TYPES.includes(file.type)) {
          toast.error(`Tệp ${file.name} không hợp lệ. Vui lòng chọn tệp JPEG, PNG, GIF hoặc WEBP.`);
          return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviews.push(reader.result);
          setPreviews((prev) => [...prev, ...newPreviews]);
        };
        reader.readAsDataURL(file);
        validFiles.push(file);
      });

      setFiles((prev) => [...prev, ...validFiles]);
    },
  });

  const handleRemoveFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-blue-500 p-4 py-10 rounded-lg w-full text-center"
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-4">
          <div>
            <FcUpload size={30} className="h-10 w-10" />
          </div>
          <p>Kéo và thả ảnh vào đây hoặc nhấp để chọn ảnh</p>
        </div>
      </div>

      {files.length > 0 && (
        <table className="mt-4 border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Xem trước</th>
              <th className="border border-gray-300 p-2">Tên tệp</th>
              <th className="border border-gray-300 p-2">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={file.name}>
                <td className="border-gray-300 p-2 flex items-center justify-center">
                  {previews[index] && (
                    <img
                      src={previews[index]}
                      alt={file.name}
                      className="w-32 h-32 object-cover"
                    />
                  )}
                </td>
                <td className="border border-gray-300 p-2">
                  <p className="line-clamp-1">{file.name}</p>
                </td>

                <td className="border border-gray-300 p-2">
                  <div className="w-full flex items-center justify-center">
                    <button
                      onClick={() => handleRemoveFile(index)}
                      className="text-red-500 w-fit hover:text-red-500 hover:bg-red-50"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FileUpload;
