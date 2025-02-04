const userName = document.querySelector("#username");
const fullName = document.querySelector("#fullname");
const saveBtn = document.querySelector("#save");

const userNameInfo = document.querySelector("#last-username");
const userFullNameInfo = document.querySelector("#last-fullname");
const userDateInfo = document.querySelector("#input-date");
const clearBtn = document.querySelector("#clear");

saveBtn.onclick = () => {
	const date = new Date();
	const userInfo = {
		id: date.getTime(),
		username: userName.value,
		fullName: fullName.value,
	};

	const arr = [];
	const users = sessionStorage.getItem("users");
	if (users) {
		arr.push(...JSON.parse(users));
	}
	arr.push(userInfo);

	// localStorage.setItem("lastUser", JSON.stringify(userInfo));
	sessionStorage.setItem("users", JSON.stringify(users));
	console.log(JSON.stringify(userInfo));
	getLastUser();
};

function getLastUser() {
	// const lastUser = localStorage.getItem("lastUser");
	const lastUser = sessionStorage.getItem("users");

	if (lastUser) {
		const userInfo = JSON.parse(lastUser);
		console.log(userInfo);

		userNameInfo.innerText = userInfo.username;
		userFullNameInfo.innerText = userInfo.fullName;
		userDateInfo.innerText = new Date(userInfo.id).toLocaleString();
	} else {
		userNameInfo.innerText = "No saved data";
		userFullNameInfo.innerText = "No saved data";
		userDateInfo.innerText = "No saved data";
	}
}

// getLastUser();
// clearBtn.onclick = () => sessionStorage.clear();
// clearBtn.onclick = () => localStorage.clear();
clearBtn.onclick = () => {
	sessionStorage.removeItem("111");
};
