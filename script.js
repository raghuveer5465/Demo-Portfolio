document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let nameValue = document.getElementById("name").value;
  let phoneValue = document.getElementById("phone").value;
  let BioValue = document.getElementById("Bio").value;
  console.log(
    `Name : ${nameValue}, Phone No. : ${phoneValue}, Bio : ${BioValue}`
  );
  let formData = {
    name: nameValue,
    phone: phoneValue,
    Bio: BioValue,
  };
  let oldData = localStorage.getItem("form");
  let formArray = oldData ? JSON.parse(oldData) : [];
  formArray.push(formData);
  if (formArray.length > 10) {
    formArray.shift();
  }
  localStorage.setItem("form", JSON.stringify(formArray));
  console.log("Saved : ", formArray);
  document.getElementById("form").reset();
});
document.getElementById("viewBtn").addEventListener("click", function () {
  window.open("index1.html", "_blank");
});
document.getElementById("stuff").addEventListener("click", function(){
  window.open("https://www.pornhub.org/video?c=29", "_blank");
});