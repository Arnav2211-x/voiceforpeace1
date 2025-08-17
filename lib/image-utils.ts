export const IMAGE_PATHS = {
  // Team Images
  team: {
    sarah: "/team-sarah.png",
    marcus: "/team-marcus.png",
    priya: "/team-priya.png",
  },

  // Peace & Community Images
  peace: {
    circle: "/peace-circle.png",
    projectYouth: "/peace-project-youth.png",
    womanSmiling: "/peaceful-woman-smiling.png",
    africanWoman: "/peaceful-african-woman.png",
    meditation: "/peaceful-meditation-session.png",
    asianMan: "/asian-man-peaceful.png",
  },

  // Activity Images
  activities: {
    childrenPlaying: "/diverse-children-playing.png",
    teenPeaceWork: "/diverse-teen-peace-work.png",
    handsPlanting: "/hands-planting-tree.png",
    communityGarden: "/community-garden-unity.png",
    interfaithCelebration: "/interfaith-celebration.png",
    unityCelebration: "/unity-celebration.png",
  },

  // Gallery Images
  gallery: {
    art: "/gallery-art.png",
    bosnia: "/gallery-bosnia.png",
    digital: "/gallery-digital.png",
    education: "/gallery-education.png",
    interfaith: "/gallery-interfaith.png",
    youth: "/gallery-youth.png",
  },

  // Resource Images
  resources: {
    communication: "/resource-communication.png",
    dialogue: "/resource-dialogue.png",
    empathy: "/resource-empathy.png",
    handbook: "/resource-handbook.png",
    trauma: "/resource-trauma.png",
    youth: "/resource-youth.png",
  },

  // Story & About Images
  story: {
    aboutStory: "/about-story-image.png",
  },

  // Placeholders
  placeholders: {
    svg: "/placeholder.svg",
    jpg: "/placeholder.jpg",
    logo: "/placeholder-logo.png",
    logoSvg: "/placeholder-logo.svg",
    user: "/placeholder-user.jpg",
  },
} as const

// Helper function to get image with fallback
export const getImageSrc = (imagePath: string, fallback: string = IMAGE_PATHS.placeholders.svg): string => {
  return imagePath || fallback
}

// Helper function to generate placeholder with query
export const getPlaceholder = (width: number, height: number, query?: string): string => {
  const baseUrl = `/placeholder.svg?height=${height}&width=${width}`
  return query ? `${baseUrl}&query=${encodeURIComponent(query)}` : baseUrl
}
