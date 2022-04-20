
window.onload = function(name, price, count){



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
   let wrap__left = document.createElement('div');
   wrap__left.className = `wrap__left menu_area ${key}`;
//    console.log('--')
//    console.log(wrap__left);
    // console.log(objArray[key]);
    //3개로 분리작업


    for(let i = 0; i <objArray[key].length; i++){

    // console.log(objArray[key][i]);
      const li = document.createElement('li');
      li.className = 'menu';
      
      const menuName = document.createElement('p');
      menuName.className = 'menu_name';
      menuName.innerText= objArray[key][i].menu;
      //console.log(menuName);

      const menuPrice = document.createElement('p');
      menuPrice.className = 'menu_price';
      menuPrice.innerText= objArray[key][i].price;

      li.appendChild(menuName);
      li.appendChild(menuPrice);
      li.addEventListener('click', function() {
        clickMenu( {menu:objArray[key][i].menu, price:objArray[key][i].price} )
      });
      
    wrap__left.appendChild(li);

    //console.log('li 붙인거 확인하기');
    //console.log(wrap__left);

          
     //돔출력
     document.querySelector('.left_content').appendChild(wrap__left);
    

     let menuArray = [];


    //클릭이벤트리스너 함수
    function clickMenu(menu){
        // console.log(menu);


    

    //for문 안에서 클릭하고
    // for(let i =0 ; i< menuArray.length ; i++){
    //     //내가선택한 메뉴가 클릭이 되었는지
    //     if(menuArray[i] === menu ){
    //          alert('추가하시겟습니가?');
    //          console.log(menu);    
    //     }else{
    //         menuArray.push(menu); 
    //     }
    //     console.log(menuArray[i]);

    // }

    


    if( menuArray.length <= 0 ){
        menuArray.push(menu);
        console.log(menuArray);
             
    }else{
     const addTest =  menuArray.find((addMenu) => addMenu.menu === menu)
        //if / else 한번 들어가야함 ,
        //find로 이 안에잇는걸 찾기때문에 if 조건에서 (undefined가 아닐 때만 실행)
       console.log(addTest);
      
      if(addTest !== undefined){
      console.log(addTest);
      menuArray.push(addTest);
      // document.write(addTest);
      for(let i= 0 ; i < menuArray.length; i++){
        document.write(menuArray[i].menu);
        console.log(menuArray[i]);
      }
      //


     }
    
    }
   
//    console.log(menuArray);




}//함수 끝




    


    
   }

 }



}
//함수 끝









