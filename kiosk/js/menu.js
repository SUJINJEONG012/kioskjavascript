
window.onload = function(name, price, count){

let array = document.getElementById('');


// 메뉴이름, 가격, 수량 
let objArray = {
    menu_coffee: [

    {menu : '아메리카노', price:3000,  수량:1 },
    {menu : '아이스 아메리카노', price:3500,  수량:1 },
    {menu : '카페라떼', price:4000,  수량:1 },
    {menu : '아이스 카페라떼', price:4500,  수량:1 },
    {menu : '바닐라빈 라떼', price:4000,  수량:1 },
    {menu : '아이스 바닐라빈 라떼', price:4500,  수량:1 },
    {menu : '캐러멜라떼', price:4500,  수량:1 },
    {menu : '아이스 캐러멜라떼', price:5000,  수량:1 },
    {menu : '카페모카', price:4500,  수량:1 },
    {menu : '아이스 카페모카', price:5000,  수량:1 },

    ],
    
    menu_tea: [
        {menu : '얼그레이', price:3000,  수량:1 },
        {menu : '아이스 얼그레이', price:3500,  수량:1 },
        {menu : '잉글리쉬브랙퍼스트', price:3000,  수량:1 },
        {menu : '아이스 잉글리쉬브랙퍼스트', price:3500,  수량:1 },
        {menu : '애플티', price:3000,  수량:1 },
        {menu : '아이스 애플티', price:3500,  수량:1 },
        {menu : '캐모마일', price:3000,  수량:1 },
        {menu : '아이스 캐모마일', price:3500,  수량:1 },
        {menu : '루이보스', price:3000,  수량:1 },
        {menu : '아이스 루이보스', price:3500,  수량:1 },
        {menu : '진저레몬', price:3000,  수량:1 },
        {menu : '아이스 진저레몬', price:3500, 수량:1 },
        {menu : '핫초콜릿', price:3000,  수량:1 },
        {menu : '아이스 핫초콜릿', price:3500,  수량:1 },
        {menu : '진저레몬', price:3000,  수량:1 },
        {menu : '아이스 진저레몬', price:3500,  수량:1 },
    ],

    menu_sandwich:  [
        {menu : '잠봉뵈르', price:6000,  수량:1 },
        {menu : '치킨클럽샌드위치', price:6500,  수량:1 },
        {menu : 'BLT샌드위치', price:6500,  수량:1 }
       
    ]
};


 for (let key in  objArray) {

    objArray[key];
   console.log(key);

   const wrap__left = document.createElement('div');
   wrap__left.className = `wrap__left menu_area ${key}`;
   console.log(wrap__left);
    // console.log(objArray[key]);
    //3개로 분리작업


   


    for(let i = 0; i <objArray[key].length; i++){
        
        // console.log(objArray[key][i]);
      const li = document.createElement('li');
      li.className = 'menu';
      
      const menuName = document.createElement('p');
      menuName.className = 'menu_name';
      menuName.innerText= objArray[key][i].menu;
      console.log(menuName);


      const menuPrice = document.createElement('p');
      menuPrice.className = 'menu_price';
      menuPrice.innerText= objArray[key][i].price;

      wrap__left.appendChild(li);
      console.log(wrap__left);
          


    //  //돔출력
    //  document.querySelector('.menu_coffee').appendChild(menuName);
    //  document.querySelector('.menu_coffee').appendChild(menuPrice);







    // li.appendChild(menuPrice);


      //document.querySelector('.menuName').appendChild(menuName).innerText = menuName;
   
   
    //브라우저 화면에출력하고


  //커피 차 샌드위치 보여주고 숨기는건 온클릭으로
//키가 메뉴커피라면 메뉴커피에 클래스네임으로 가져와서 붙이고(appendChild) 되고
//온클릭으로 분리 탭


  

    
      
      

    }

 }


 
// //어떤 메뉴를 넣었는지 모르니 초기값은 빈 배열
// let chooseMenu = [];
// //메뉴 객체 받아서 화면에 뿌리기 함수시작
// let showChooseMenu =  function (){

//     const menuList = document.querySelectorAll('li.menu').value;
 
 
//     //리스트 보여주는 변수 생성
//      const li = document.createElement('li'); //리스트에 보여줄 li태그 생성
//      const deleteBtn = document.createElement('button');//삭제버튼



//     //메뉴선택할 추가 값
//     document.querySelectorAll('.menu').appendChild(li).innerText = menu;
//     // document.querySelectorAll(".menu").innerHTML = menu;


//     //삭제하기 버튼 추가
//     li.appendChild(deleteBtn);
//     deleteBtn.textContent = '삭제';
//     console.log(deleteBtn);
    
    
//     chooseMenu.push({
//         menuList:menu
//     });

   
   
// //메뉴이름, 가격, 수량 push 해주는 함수는 chooseMenu
// //이미 array 안에 값이 있을 경우 갯수 증가함수로 넘겨야함 if else

// //객수 & 가격증가
// //array안에 갯수, 가격증가 / 함수명 addCount
// //총가격 계산 




}
//함수 끝








