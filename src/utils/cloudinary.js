import { v2 as cloudinay } from "cloudinary";
import fs from "fs";
cloudinay.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const responce = await cloudinay.uploader(localFilePath, {
      responce_type: "auto",
    });
    fs.unlinkSync(localFilePath);

    return responce;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
