
    // document.getElementById("num1");
    // document.querySelector("#num1");

    //->단일 객체 반환
    // ->
    // var id1 = document.document.getElementById("num1");
    // id1.value=10;

    // document.getElementsByClassName("classname");
    // document.querySelectorAll(".classname");

    //배열 형태로 반환
    // ->
    // var class1 = document.getElementsByClassName("classname");
    // class1[0].value=10;

    // document.getElementsByName("name");
    // document.getElementsByTagName("name");

    // document.querySelectorAll("name");

    //getElements는 정적배열 querySelectorAll는 동적배열

    function plus(){

        var num1 = document.getElementById("num1");
        var num2 = document.getElementById("num2");
        var res = document.getElementById("res");

        var number1 = parseInt(num1.value);
        var number2 = parseInt(num2.value);
        var sum = number1+number2;

        console.log(number1);
        console.log(number2);

        res.innerHTML = sum;

    }

    function input(){

        var name = document.querySelector("#name").value;
        var job = document.querySelector("#job").value;
        var city = document.querySelector("#city").value;
        var output = document.querySelector("#output");
        
        if(job == "군인"){
            output.innerHTML = "이름 : "+name+ " / 직업 : "+job+" / 사는곳 : " +city;
        }
        
    }

    //지역변수는 함수와 함께 생성되고 함수와 함께 소멸된다.

    var idx = 0; //전역변수 설정
    var arr = [];

    function item_reg(){

        var item = document.querySelector("#item");
        var name = document.querySelector("#name");
        var state = document.querySelector("#state");
        
        if( !(state.value == '준비' || state.value == '준비 중') ){
            alert("준비 또는 준비중 만 입력하세요.");
            state.value=""; //input값 비우기
            state.focus(); //준비상황에 포커스 위치
            return;
        }

        for(var i in arr){

            if(arr[i] == item.value){
                alert("등록된 아이템이 있습니다!");
                item.value="";
                item.focus();
                return;
            }

        }

        arr.push(item.value);

        // for(i=0;i<idx;i++){

        //     if(arr[i] = item){
        //         alert("중복된 값이 있습니다!");
        //         arr.pop(item);
        //     }else{
        //         arr.push(item);
        //     }

        // }

        var parent = document.querySelector("#list");
        var ulchild = document.createElement("li");
        ulchild.setAttribute("class","content li0");
        parent.appendChild(ulchild);

        var content = document.getElementsByClassName("content");

        // alert("아이템 : "+item+ " / 이름 : "+name+" / 준비상황 : " +state);
        // content[0].innerHTML = "아이템 : "+item+ " / 이름 : "+name+" / 준비상황 : " +state;
        // 변수 cotent에 클래스명 content의 내용을 객체 배열 형태로 저장

        // var ul = "<ul> <li>"+(idx+1)+"</li> <li>"+item+"</li>"+
        // "<li>"+name+"</li> <li>"+state+"</li> <li></li> </ul>";
        // content[idx].innerHTML = ul;

        // var ul1 = document.createElement("ul");

        // var li1 = document.createElement("li");
        // li1.innerHTML = (idx+1);
        // var li2 = document.createElement("li");
        // li1.innerHTML = item;
        // var li3 = document.createElement("li");
        // li1.innerHTML = name;
        // var li4 = document.createElement("li");
        // li1.innerHTML = state;
        // var li5 = document.createElement("li");

        // ul1.appendChild(li1);
        // ul1.appendChild(li2);
        // ul1.appendChild(li3);
        // ul1.appendChild(li4);
        // ul1.appendChild(li5);

        // content[idx].innerHTML = ul1;

        var text_arr = [(idx+1), item.value, name.value, state.value, ''];

        var ul = document.createElement("ul");

        for(i=0; i<5; i++){

            var li = document.createElement("li");

            if(i==4){

                var bt = document.createElement("button");
                bt.setAttribute("type","button");
                bt.setAttribute("onclick","del(this)");
                bt.appendChild(document.createTextNode("삭제"));
                li.appendChild(bt);

            }else{

                var text = document.createTextNode(text_arr[i]);
                li.appendChild(text);

            }

            ul.appendChild(li);

        }

        content[idx++].appendChild(ul);

        //input 태그 초기화
        item.value=""
        name.value=""

        //커서위치를 item input태그로 이동
        item.focus();

    }

    function enterkey() {

        if (window.event.keyCode == 13) {
            // 엔터키가 눌렸을 때
            item_reg();
        }
    }

    function del(obj) {

        var parent = obj.parentNode; //button의 부모 li
        parent = parent.parentNode; //li의 부모 ul
        parent = parent.parentNode; //ul의 부모 li

        // var li = document.querySelectorAll(".content");
        var ul = document.querySelector("#list");
        ul.removeChild(parent);
    
    }

