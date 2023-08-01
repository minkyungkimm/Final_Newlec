export default class CheckBox{

    // 전체 체크박스를 제외한 하위 체크박스 리스트
    #inputList;
    // 전체 체크박스
    #checkAll;
    // 전체 체크박스 개수
    #checkAllCount;
    // 체크된 체크박스 개수
    #checkCount;    
    
    set inputList(inputList){ this.#inputList = inputList};
    get inputList(){ return this.#inputList};
    set checkAllCount(checkAllCount){ this.#checkAllCount = checkAllCount};
    get checkAllCount(){ return this.#checkAllCount};
    set checkCount(checkCount){ this.#checkCount = checkCount};
    get checkCount(){ return this.#checkCount};
    set checkAll(checkAll){ this.#checkAll = checkAll};
    get checkAll(){ return this.#checkAll};

    // 1. 전체 선택 클릭 시
    checkAll(checkAll,inputList){

        this.#checkAll = checkAll;
        this.#inputList = inputList;

        // 전체 선택되어 있을 경우
        if(this.#checkAll.checked == true){
            this.#inputList.forEach(input => {
                input.checked = true;
            });
        }else{ // 모든 인풋이 해제되어 있을 경우
            this.#inputList.forEach(input => {
                input.checked = false;
            });
        }

    }

    // 2. 전체선택이 아닌 하위 체크박스를 선택한 경우
    check(checkAllCount,checkCount,checkAll){

        this.#checkAllCount = checkAllCount;
        this.#checkCount = checkCount;
        this.#checkAll = checkAll;

        // 체크된 박스 개수와 전체선택을 제외한 박스의 개수가 같을 경우
        if(this.#checkCount == this.#checkAllCount)
            this.#checkAll.checked = true;
        else
            this.#checkAll.checked = false; 
        

    }

}