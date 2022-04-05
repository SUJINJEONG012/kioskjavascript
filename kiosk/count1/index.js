//function 시작

function count(type){
    const result = document.getElementById('result');

    let number = result.innerText;
    if(type === 'plus'){
        number = parseInt(number) +1;
    }else if(type ==='minus'){
        number = parseInt(number)-1;
    }
    console.log(result.innerText= number);
}

result.innerText= nubmber;