# Download and Optimize Quantaculus 2025 Images

## Steps to improve image loading performance:

### 1. Download 2025 Images from Google Drive
Download the images from these Google Drive URLs:
- https://drive.google.com/file/d/1zHTD3hzoDp-Ffe42xpa2kR0btQ2GpjMH/view?usp=sharing
- https://drive.google.com/file/d/1kfqerU0wiBInHsaFyw5iCvCsNKdH4E3G/view?usp=drive_link
- https://drive.google.com/file/d/11bfLJUzZJx2h3pzQixubg3cteBwd2nsT/view?usp=drive_link
- https://drive.google.com/file/d/1qrKGRXpiDUBvEQaQ5nVf2tMQGW-vKBx2/view?usp=drive_link
- https://drive.google.com/file/d/1QqHnaA1NBWgYrgda8DlbeZFxU9qJPQjh/view?usp=drive_link
- https://drive.google.com/file/d/1svInwilG6h23QgEHp0wrpVyWILzcRyX-/view?usp=drive_link

### 2. Optimize Images
Convert them to WebP format and optimize for web:
```bash
# Install webp tools (if not already installed)
# On Windows: Download from Google
# On macOS: brew install webp
# On Ubuntu: sudo apt-get install webp

# Convert and optimize each image
cwebp -q 80 original-image.jpg -o quant2025-1.webp
cwebp -q 80 original-image.jpg -o quant2025-2.webp
# ... repeat for all images
```

### 3. Place Files
Save the optimized images in: `public/gallery/`
- quant2025-1.webp
- quant2025-2.webp
- quant2025-3.webp
- quant2025-4.webp
- quant2025-5.webp
- quant2025-6.webp

### 4. Update the Code
Once images are added, update `src/app/quantaculus/page.tsx`:
```typescript
const images2025 = [
  "/gallery/quant2025-1.webp",
  "/gallery/quant2025-2.webp",
  "/gallery/quant2025-3.webp",
  "/gallery/quant2025-4.webp",
  "/gallery/quant2025-5.webp",
  "/gallery/quant2025-6.webp"
];
```

## Performance Improvements Made:

1. ✅ **Removed Google Drive URLs** - No more slow external requests
2. ✅ **Added lazy loading** - Only load images when needed
3. ✅ **Optimized preloading** - Only preload first 3 images
4. ✅ **Reduced quality slightly** - From 90% to 85% for faster loading
5. ✅ **Priority loading** - First image loads immediately

## Expected Results:
- **Much faster loading times** (from 3-10 seconds to < 1 second)
- **Better user experience** with smooth transitions
- **Reduced bandwidth usage**
- **More reliable loading** (no dependency on Google Drive availability) 