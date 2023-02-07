const pixelData = () => {
  // Pixel 6 Pro features
  let pixel6ProFeatures = ["120 Hz refresh rate", "Wireless charging", "UFS 3.1 storage", "Gaming Mode", "Extra dim mode", 
  "Stereo speakers", "Mute camera and mic option", "Battery Share (Reverse wireless charging)", 
  "Optical in-display fingerprint scanner", "IP68 water/dust resistant"];
  let pixel6ProText = "";
  for (let i = 0; i < pixel6ProFeatures.length; i++) {
    pixel6ProText += "<li>" + pixel6ProFeatures[i] + "</li>"
  }

  // Pixel 6 features 
  document.getElementById("pixel-6-pro-features").innerHTML = pixel6ProText;

  let pixel6Features = ["90 Hz refresh rate", "Wireless charging", "UFS 3.1 storage", "Gaming Mode", "Mute camera and mic option",
  "Battery Share (Reverse wireless charging)", "In-display fingerprint scanner", "IP68 water/dust resistant"];
  let pixel6Text = "";
  for (let i = 0; i < pixel6Features.length; i++) {
    pixel6Text += "<li>" + pixel6Features[i] + "</li>"
  }
  document.getElementById("pixel-6-features").innerHTML = pixel6Text;

  // Pixel 6a features 
  let pixel6aFeatures = ["5G", "Wifi 6E", "UFS 3.1 storage", "Stereo speakers", "One-handed mode", "IP67 water/dust resistant",
  "In-display fingerprint sensor", "At least 5yrs of Google updates"];
  let pixel6aText = "";
  for (let i = 0; i < pixel6aFeatures.length; i++) {
    pixel6aText += "<li>" + pixel6aFeatures[i] + "</li>"
  }
  document.getElementById("pixel-6a-features").innerHTML = pixel6aText;
}

export default pixelData;