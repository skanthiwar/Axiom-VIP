document
  .querySelector('input[type="file"]')
  .addEventListener("change", function () {
    // Reset the file input to clear any selected file
    this.value = "";
  });

// Get all elements with the "hovern" class
const listItems = document.querySelectorAll(".hovern");

// Add click event listeners to toggle the "active" class
listItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove the "active" class from all items
    listItems.forEach((li) => {
      li.classList.remove("active");
    });

    // Add the "active" class to the clicked item
    item.classList.add("active");
  });
});
