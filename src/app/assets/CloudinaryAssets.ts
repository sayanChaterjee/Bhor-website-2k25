// ✅ Base Cloudinary URL
const CLOUDINARY_BASE = "https://res.cloudinary.com/dkxskaege";

// ✅ Centralized Cloudinary assets
export const CloudinaryAssets = {
  images: {
    curtain: `${CLOUDINARY_BASE}/image/upload/v1763238776/Curtain_2_yvay9t.webp`,
    borderHorizontal: `${CLOUDINARY_BASE}/image/upload/v1763306567/Border_mmin01.webp`,
    borderVertical: `${CLOUDINARY_BASE}/image/upload/v1763306616/BorderVertical_jzorag.webp`,
    sky: `${CLOUDINARY_BASE}/image/upload/v1763238781/Sky_2_mqpg2b.webp`,
    sun: `${CLOUDINARY_BASE}/image/upload/v1763238781/sun_gbebzx.webp`,
    groundLayer1: `${CLOUDINARY_BASE}/image/upload/v1763238779/Ground_layer1_vogxyv.webp`,
    groundLayer1Mobile: `${CLOUDINARY_BASE}/image/upload/v1763238774/Ground_layer1_Mobile_dtjgjo.webp`,
    groundLayer2: `${CLOUDINARY_BASE}/image/upload/v1763238779/Ground_layer2_d3323r.webp`,
    groundLayer2Mobile: `${CLOUDINARY_BASE}/image/upload/v1763238776/Ground_layer2_Mobile_dl4zot.webp`,
    groundLayer3: `${CLOUDINARY_BASE}/image/upload/v1763238781/Ground_layer3_xa8e3y.webp`,
    groundLayer3Mobile: `${CLOUDINARY_BASE}/image/upload/v1763238780/Ground_layer3_Mobile_z1zqjt.webp`,
    person1: `${CLOUDINARY_BASE}/image/upload/v1763238771/p1_h9m8dt.webp`,
    person2: `${CLOUDINARY_BASE}/image/upload/v1763238772/p2_nh7ebc.webp`,
    bhor2023: `${CLOUDINARY_BASE}/image/upload/v1763238770/bhorCover2023_y29oex.webp`,
    bhor2024: `${CLOUDINARY_BASE}/image/upload/v1763238778/bhorCover2024_pbnegw.webp`,
    bhor2025: `${CLOUDINARY_BASE}/image/upload/v1763306450/bhorCover2025_ltgsvw.webp`,
  },
  videos: {
    SecondSectionBG: `${CLOUDINARY_BASE}/video/upload/v1763239994/SecondSectionBG_3_zxwimj.mp4`,
  },
};

// ✅ Optional: Export individual groups for convenience
export const Images = CloudinaryAssets.images;
export const Videos = CloudinaryAssets.videos;
