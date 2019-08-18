var numOne=document.getElementById('num-one');
var numTwo=document.getElementById('num-two');
var addSum=document.getElementById('add-sum');

/*numOne.addEventListener("click",function()
    {
//console.log('hi');
alert('hi');
    });*/

   /* numOne.addEventListener("mouseenter",function()
    {
//console.log('hi');
alert('hello');
    });*/

   /* numOne.addEventListener("mouseleave",function()
    {
//console.log('hi');
alert('name please');
    });*/

   /* numOne.addEventListener("focus",function()
    {
//console.log('hi');
alert('hi');
    });*/

    /*JavaScript Events
    -click
    -mouseenter
    -mouseleave
    -focus
    -blur
    -mousedown
    -mouseup
    -mousemove
    -keydown
    -keyup
    */

   /*numOne.addEventListener("input", add);
   numTwo.addEventListener("input", add);

   function add()
   {
       var one = parseFloat(numOne.value)  || 0;
       var two = parseFloat(numTwo.value)  || 0;
       //console.log(one,two);
       var sum=one+two;
       addSum.innerHTML="your sum is: "+sum;

   }*/

   var checklist=document.getElementById("checklist");
   var items=checklist.querySelectorAll("li");
   var inputs=checklist.querySelectorAll("input");

   for(var i=0; i<items.length; i++)
   {
       items[i].addEventListener("click",editItem);
       inputs[i].addEventListener("blur",updateItem);
       inputs[i].addEventListener("keypress",itemKeyPress);
   }

   function editItem()
   {
       console.log(this);
       this.className="edit";
       var input=this.querySelector("input");
       input.focus();
       console.log("my current value is", input.value.length);
       input.setSelectionRange(0,input.value.length);
   }

   function updateItem()
   {
       console.log("we blurred",this.value);
      this.previousElementSibling.innerHTML=this.value;
       this.parentNode.ClassName="";

   }

   function itemKeyPress(event)
   {
      console.log(event);
      if(event.which==13){
          updateItem.call(this);
      }
   }