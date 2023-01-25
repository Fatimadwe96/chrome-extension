

let myLeads =[]
let inputEl =document.getElementById("input-el");

let saveBtn=document.getElementById("save-btn");
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn");
const tabBtn=document.getElementById("tab-btn");

const LeadfromLocalStorage =JSON.parse(localStorage.getItem("myLeads"))

if(LeadfromLocalStorage){
    myLeads=LeadfromLocalStorage

render(myLeads)
}



tabBtn.addEventListener("click",function (){
chrome.tabs.query({active :true ,currentWindow: true },function(tabs){

myLeads.push(tabs[0].url)
localStorage.setItem("myLeads",JSON.stringify(myLeads))
render(myLeads);


})





})
function render(leads){
 
    let listItem="" ;
    for(let i=0 ; i<leads.length ; i++){
      /*  ulEl.innerHTML +="<li>" + myLeads[i] +"</li>"   */
          listItem+="<li><a target='_blank' href ='"+leads[i]+"' >" +leads[i]+"</a></li>"
          
        }
        inputEl.value = ""; /* TO CLEAR INPUT BTN WHEN CLICK ON SAVE*/
        ulEl.innerHTML=listItem;

}

deleteBtn.addEventListener("dblclick",function (){
localStorage.clear(); 
myLeads=[];
render(myLeads);

// the dom is empty becuse the array of my lead is empty


}) ;


saveBtn.addEventListener("click" , function (){
myLeads.push(inputEl.value);
localStorage.setItem("myLeads",JSON.stringify(myLeads))
render(myLeads);


} ) 



