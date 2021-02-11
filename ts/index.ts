import UUID from "uuid";

import { User } from "./User";

const user = new User("Hello", "World", 0); // 名前と年齢は適当に

const contentsElem = document.getElementById("contents");
if (!!contentsElem) {
  contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}

const saibanBUtton = document.getElementById("saiban") as HTMLButtonElement;
const uuidSpan = document.getElementById("uuid") as HTMLButtonElement;

saibanBUtton.onclick = (e) => {
  uuidSpan.innerText = UUID.v4();
};
