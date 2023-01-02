function validateInput() {
    // Get the input element
    var input = document.getElementById("price");
  
    // Only allow numbers
    input.value = input.value.replace(/[^0-9.]/g, "");
  }