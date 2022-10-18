

/* les variable*/

let titre =document.querySelector('.titre');



let turn='x';

let squares=[];


 /* les function*/
 function end( num1 ,num2 ,num3){
    titre.innerHTML= `  ${squares[num1]} winer ` ;
    document.getElementById('item'+num1).style.background='#000';
    document.getElementById('item'+num2).style.background='#000';
    document.getElementById('item'+num3).style.background='#000';

           setInterval(function(){titre.innerHTML += '.'},1000);
            setTimeout(function(){location.reload()},4000);
  
}

 function winer()
 {
     for(let i=1;i<10;i++)
    {squares[i] = document.getElementById('item' +i).innerHTML;}
           if(squares[1]==squares[2] &&  squares[2]==squares[3] && squares[3] !='')
                 { 
                       end(1,2,3);
                    
                 }
                 else if(squares[4]==squares[5] &&  squares[5]==squares[6] && squares[5] !='')

                 {
                    end(4,5,6);

                 }
                 else if(squares[7]==squares[8] &&  squares[8]==squares[9] && squares[8] !='')

                 {
                    end(7,8,9);

                 }
                 else if(squares[1]==squares[4] &&  squares[4]==squares[7] && squares[1] !='')

                 {
                    end(1,4,7);

                 }
                 else if(squares[2]==squares[5] &&  squares[5]==squares[8] && squares[5] !='')

                 {
                    end(2,5,8);

                 }
                 else if(squares[3]==squares[6] &&  squares[6]==squares[9] && squares[3] !='')

                 {
                    end(3,6,9);

                 }
                 else if(squares[1]==squares[5] &&  squares[5]==squares[9] && squares[5] !='')

                 {
                    end(1,5,9);

                 }
                 else if(squares[3]==squares[5] &&  squares[5]==squares[7] && squares[7] !='')

                 {
                    end(3,5,7);

                 }
 }



 function game(id){
    let element=document.getElementById(id);
 if(turn=='x' && element.innerHTML=='')
 {
       element.innerHTML='x';
       turn='o';
       titre.innerHTML='o'


    }else if(turn=='o' && element.innerHTML==''){
        element.innerHTML='o';
        turn='x';
        titre.innerHTML='x';
    } 
  winer();
 }


  