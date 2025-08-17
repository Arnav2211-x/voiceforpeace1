"use client"

import { useEffect } from "react"

export default function EnhancedInteractions() {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.tagName === "A" && target.hash) {
        const href = target.getAttribute("href")
        if (href?.startsWith("#")) {
          e.preventDefault()
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }
      }
    }

    const handleKeyboardNavigation = (e: KeyboardEvent) => {
      // ESC key closes mobile menu
      if (e.key === "Escape") {
        const mobileMenuButton = document.querySelector('[aria-expanded="true"]')
        if (mobileMenuButton) {
          ;(mobileMenuButton as HTMLButtonElement).click()
        }
      }

      // Tab navigation enhancement
      if (e.key === "Tab") {
        const focusableElements = document.querySelectorAll(
          'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
        )
        const firstElement = focusableElements[0] as HTMLElement
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    const handleButtonLoading = (e: Event) => {
      const button = e.target as HTMLButtonElement
      if (button.tagName === "BUTTON" && button.type === "submit") {
        button.style.opacity = "0.7"
        button.style.pointerEvents = "none"
        const originalText = button.textContent
        button.textContent = "Loading..."

        setTimeout(() => {
          button.style.opacity = "1"
          button.style.pointerEvents = "auto"
          button.textContent = originalText
        }, 2000)
      }
    }

    document.addEventListener("click", handleSmoothScroll)
    document.addEventListener("keydown", handleKeyboardNavigation)
    document.addEventListener("click", handleButtonLoading)

    return () => {
      document.removeEventListener("click", handleSmoothScroll)
      document.removeEventListener("keydown", handleKeyboardNavigation)
      document.removeEventListener("click", handleButtonLoading)
    }
  }, [])

  return null
}
