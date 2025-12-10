setTimeout(
    function(){
        console.log("2 seconds late");
    },2000);

setTimeout(
    ()=>{
        console.log("2 seconds");
    },2000
);