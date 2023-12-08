export function toggleTextVisibility(element) {
  var textElement = element.parentElement.querySelector(".toggle-text");
  textElement.classList.toggle("text-hidden");
}
