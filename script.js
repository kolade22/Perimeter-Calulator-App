function calculatePerimeter(params) {
  let l = document.getElementById("length").value;
  let b = document.getElementById("breadth").value;
  let answer = 2 * (Number(l) + Number(b));
  let output = document.getElementById("output-box");

  output.innerHTML = "Perimeter is: " + answer;

  console.log(answer);
}
