export function toggleTextVisibility(element) {
  var textElement = element.parentElement.querySelector(".readmoretext");
  textElement.classList.toggle("text-hidden");
}
