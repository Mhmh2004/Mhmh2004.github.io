console.log("Hello, World!");
let count = 0;
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hollow Knight!";
  
  const myImage = document.querySelector("img");



myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/hello!.jpeg") {
    myImage.setAttribute("src", "images/f6e0d83ebc211b34db4a6525e760ecf7.jpg");
  } else {
    myImage.setAttribute("src", "images/hello!.jpeg");
  }

};
