const myRoles = ["web developer", "technical writer", "content writer."];
let index = -1;
setInterval(() => {
    index++;
    index %= myRoles.length;
    document.querySelector("#d").innerHTML = myRoles[index];
}, 2000);



    


    
  


       