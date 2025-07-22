document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault()

    const targetId = anchor.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (!navbar) return

  if (window.scrollY > 50) {
    navbar.classList.add("bg-dark", "shadow")
  } else {
    navbar.classList.remove("bg-dark", "shadow")
  }
})
