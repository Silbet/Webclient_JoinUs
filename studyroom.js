// 미래관 모달 창 열기
function openModalA() {
  document.getElementById("myModalA").style.display = "block";
}

// 해동 모달 창 열기
function openModalB() {
  document.getElementById("myModalB").style.display = "block";
}

// 복지관 모달 창 열기
function openModalC() {
  document.getElementById("myModalC").style.display = "block";
}


// 북악관 모달 창 열기
function openModalD() {
  document.getElementById("myModalD").style.display = "block";
}


// 모달 창 닫기
function closeModal() {
  document.getElementById("myModalA").style.display = "none";
  document.getElementById("myModalB").style.display = "none";
  document.getElementById("myModalC").style.display = "none";
  document.getElementById("myModalD").style.display = "none";
}

// 모달 창 외부 클릭 시 닫기
window.onclick = function(event) {
  var modalA = document.getElementById("myModalA");
  var modalB = document.getElementById("myModalB");
  var modalC = document.getElementById("myModalC");
  var modalD = document.getElementById("myModalD");
  if (event.target == modalA) {
    modalA.style.display = "none";
  }
  if (event.target == modalB) {
    modalB.style.display = "none";
  }
  if (event.target == modalC) {
    modalC.style.display = "none";
  }
  if (event.target == modalD) {
    modalD.style.display = "none";
  }
}
