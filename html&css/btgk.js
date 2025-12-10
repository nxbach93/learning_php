//1
function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const messageDiv = document.getElementById("message");

  messageDiv.textContent = "";
  messageDiv.className = "";

  if(username === "" && password === "") 
    {
    messageDiv.textContent = "Vui lòng nhập Tên đăng nhập và mật khẩu";
    messageDiv.classList.add("error");
    }
  else if (username === "") {
    messageDiv.textContent = "Vui lòng nhập Tên đăng nhập";
    messageDiv.classList.add("error");
  } else if (password === "") {
    messageDiv.textContent = "Vui lòng nhập mật khẩu!";
    messageDiv.classList.add("error");
  } else {
    messageDiv.textContent = "Thành công!";
    messageDiv.classList.add("success");
  }
}
//2
function getStyle() {
  const textElement = document.getElementById("text");
  const style = window.getComputedStyle(textElement);
  const color = style.color;
  const size = style.fontSize;

  document.getElementById("result").innerHTML = `Kết quả Style: Màu: <b>${color}</b>, Cỡ chữ: <b>${size}</b>`;
}

function setStyle() {
  const textElement = document.getElementById("text");
  textElement.style.color = "pink";
  textElement.style.backgroundColor = "#f0fff0";
  textElement.style.border = "1px solid red";
  document.getElementById("result").textContent = "Gán style!";
}

//3
function changeText() {
  document.getElementById("title").textContent = "Đã thay đổi!";

  const paragraph = document.querySelector(".description");
  paragraph.className = "highlight";

  const list = document.getElementById("list");
  const newLi = document.createElement("li");
  newLi.textContent = "Đã thêm";
  list.appendChild(newLi);
}

//4
function replaceElement() {
  const imageElement = document.getElementById("image");

  imageElement.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw5KvitHQou2tpnp1SqULjQERMrXI95mAZsA&s";
  imageElement.alt = "Hình ảnh mới";
  alert("Đã thay thế hình ảnh");
}
