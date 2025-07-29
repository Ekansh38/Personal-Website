console.log("ajsdkjsadalk");

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseover", () => {
    // Generate random rotation and translation values
    const randomRotate = Math.random() * 10 - 5; // -5 to 5 degrees
    const randomX = Math.random() * 10 - 5; // -5px to 5px
    const randomY = Math.random() * 10 - 5; // -5px to 5px

    // Apply the random CSS transform
    link.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`;
    link.style.transition = "transform 0.2s ease-out";
  });

  link.addEventListener("mouseleave", () => {
    // Reset the transform on mouse leave
    link.style.transform = "translate(0, 0) rotate(0deg)";
  });
});
