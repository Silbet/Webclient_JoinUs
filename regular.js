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
		title: "백준 스터디 모집",
		author: "이준희",
		content: "1주일마다 정해진 문제 풀고 코드 리뷰하는 스터디입니다. 저 포함 4명 모집합니다.",
		date: new Date(),
	},
	{
		title: "공무원 7급 준비",
		author: "옥지윤",
		content: "매일 아침 8시부터 해동 스터디 룸에서 공부 하실 분 모집합니다. 서로서로 모르는 것 알려주면서 공부해요!",
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