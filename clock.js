console.log("welcome to our clock project")
  const hourele= document.getElementById("hours");
   const minuteele= document.getElementById('Minutes');
    const secondele= document.getElementById('seconds');
    const ampmele=document.getElementById('ampn');


    function updateclock(){
         let h= new Date().getHours()
        let m=new Date().getMinutes()
         let s= new Date().getSeconds()
          let ampm="AM"
         
       
         if(h>12){
             h=h-12;
            ampm="PM";
         }
         h=(h<10)?("0"+h):h;
         m=(m<10)?("0"+m):m;
         s=(s<10)?("0"+s):s;

         hourele.innerText=h;
         minuteele.innerText=m;
         secondele.innerText=s;
         ampmele,(innerText=ampm);


         setTimeout(()=>{
            updateclock();
         }  ,1000);


    }
    updateclock();