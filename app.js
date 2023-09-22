const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    const info=document.querySelector('#info')
    if(height<0 || isNaN(height) || height===''){
        result.innerHTML=`Please enter valid height`
    }else if(weight<=0 || isNaN(weight) || weight===''){
        result.innerHTML=`Please enter valid weight`
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>${bmi}</span>`;
        if(bmi<=18.6){
            info.innerHTML=`You are underweight 😂😂💀`
        }else if(bmi>18.6 && bmi<=24.9){
            info.innerHTML=`Your weight is in normal range 👌`
        }else{
            info.innerHTML=`You are overweight 😂😂🐃`
        }

    }
});
