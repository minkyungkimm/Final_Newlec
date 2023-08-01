import CheckBox from "./check-box.js";

window.addEventListener("load", () => {
  let checkSection = document.querySelector(".check-section");
  // 이동 전 현재페이지에 체크된 체크박스 해제
  // const resetCheck = ()=>{
  //     let resetPageInput = currentPage.querySelectorAll("input:checked");
  //     // 체크된 것이 없을 경우
  //     if(resetPageInput.length <= 0)
  //         return;
  //     resetPageInput.forEach(input => {
  //         input.checked = false;
  //     });
  // }
  //체크박스 섹션 클릭 시
  checkSection.onclick = (e) => {
    // console.log("체크");
    // 전체선택 체크박스
    let checkAll = checkSection.querySelector(".check-section #check-all");
    let target = e.target;
    let inputList;
    let checkboxList;
    let checkBox = new CheckBox();
    if (target.nodeName != "INPUT") return;
    let thisParent;
    let tableParent;
    // 1. 전체 선택 라벨 클릭 시
    if (target.classList.contains("check-all")) {
      // list
      thisParent = target.parentElement.parentElement;
      // 전체 선택을 제외한 모든 체크박스 리스트
      inputList = thisParent.querySelectorAll(".check-box");
      checkBox.checkAll(target, inputList);
      // 회원목록 테이블에서 전체선택 클릭 시
      tableParent = thisParent.parentElement;
      checkboxList = tableParent.querySelectorAll(".check-box");
      checkBox.checkAll(target, checkboxList);
      // 2. 전체선택이 아닌 하위 체크박스를 선택한 경우
    } else if (target.classList.contains("check-box")) {
      // let checkAll;
      // 선택한 체크박스
      thisParent = target.parentElement.parentElement;
      tableParent = thisParent.parentElement;
      //하나라도 체크가 해제되면 전체선택 해제 후 리턴
      if (target.checked == false) {
        // checkAll = tableParent.querySelector(".check-all");
        checkAll.checked = false;
        return;
      }
      // 전체 선택을 제외한 체크박스 리스트
      let inputList = checkSection.querySelectorAll(
        ".check-section-form input[type='checkbox']"
      );
      // 전체 선택을 제외한 박스 중 체크된 박스 리스트
      let checkInputList = checkSection.querySelectorAll(
        ".check-section-form input[type='checkbox']:checked"
      );
      // console.log("inputList: ", inputList);
      // console.log("checkInputList: ", checkInputList);
      // 체크박스 전체개수, 체크된 박스 개수, 전체선택 박스
      checkBox.check(inputList.length - 1, checkInputList.length, checkAll);
    }
  };
}); //load end
