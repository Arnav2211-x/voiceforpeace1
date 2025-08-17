"use client"

import { useState } from "react"
import { getImageSrc } from "@/lib/image-utils"

interface ImageItem {
  src: string
  alt: string
  title?: string
  description?: string
}

interface ImageGalleryProps {
  images: ImageItem[]
  className?: string
  columns?: 2 | 3 | 4
}

export function ImageGallery({ images, className = "", columns = 3 }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null)

  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <>
      <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer overflow-hidden rounded-lg bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={getImageSrc(image.src) || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            {(image.title || image.description) && (
              <div className="p-4">
                {image.title && <h3 className="text-lg font-semibold text-white mb-2 glow-text">{image.title}</h3>}
                {image.description && <p className="text-gray-300 text-sm">{image.description}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] overflow-hidden rounded-lg">
            <img
              src={getImageSrc(selectedImage.src) || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="w-full h-full object-contain"
            />
            {(selectedImage.title || selectedImage.description) && (
              <div className="bg-gray-900/90 p-4">
                {selectedImage.title && (
                  <h3 className="text-xl font-semibold text-white mb-2 glow-text">{selectedImage.title}</h3>
                )}
                {selectedImage.description && <p className="text-gray-300">{selectedImage.description}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
