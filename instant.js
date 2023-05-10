const writeBtn = document.getElementById("write-btn");
const writeModal = document.getElementById("write-modal");
const viewModal = document.getElementById("view-modal");
const boardBody = document.getElementById("board_contents");
const writeForm = document.getElementById("write-form");
const viewTitle = document.getElementById("view-title");
const viewAuthor = document.getElementById("view-author");
const viewDate = document.getElementById("view-date");
const viewContent = document.getElementById("view-content");

// 게시글 데이터
let boardData = [
	{
		title: "매일 아침 8시 도서관 앞",
		author: "문찬호",
		content: "주말 제외 도서관 앞에서 출석하실 분들 있을까요?",
		date: new Date(),
	},
	{
		title: "복지관 열람실에서 공부",
		author: "정규표",
		content: "복지관 열람실에서 같이 공부하실 분 구합니다. 혼자선 집중이 잘 안돼서 앞에서 감시하며 각자 공부 했으면 좋겠습니다.",
		date: new Date(),
	},
];

// 게시글 목록 보여주기
function showBoard() {
	boardData.forEach((post, index) => {
		const row = document.createElement("div");
		row.innerHTML = `
			<div class="num">${index + 1}</div>
			<div class="title">${post.title}</div>
			<div class="writer">${post.author}</div>
			<div class="date">${post.date.toLocaleDateString()}</div>
		`;
		row.addEventListener("click", () => {
			showPost(index);
		});
		boardBody.appendChild(row);
	});
}

// 글쓰기 모달 열기
writeBtn.addEventListener("click", () => {
	writeModal.style.display = "block";
});

// 글쓰기 모달 닫기
writeModal.querySelector(".close").addEventListener("click", () => {
	writeModal.style.display = "none";
	writeForm.reset();
});

// 글쓰기 폼 제출
writeForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const title = writeForm.title.value;
	const author = writeForm.author.value;
	const content = writeForm.content.value;
	const date = new Date();
	boardData.unshift({ title, author, content, date });
	boardBody.innerHTML = "";
	showBoard();
	writeModal.style.display = "none";
	writeForm.reset();
});

// 게시글 보기 모달 열기
function showPost(index) {
	viewTitle.textContent = boardData[index].title;
	viewAuthor.textContent = `작성자: ${boardData[index].author}`;
	viewDate.textContent = `작성일: ${boardData[index].date.toLocaleDateString()}`;
	viewContent.textContent = boardData[index].content;
	viewModal.style.display = "block";
}

// 게시글 보기 모달 닫기
viewModal.querySelector(".close").addEventListener("click", () => {
	viewModal.style.display = "none";
});

// 초기화
showBoard();