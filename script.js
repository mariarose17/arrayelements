

//var aelements=[];
var itemArray=[];
var temp;
function display(){
   // document.getElementById("arrayelements").innerHTML = aelements;
    document.getElementById("arrayelements").innerHTML = itemArray;

    //sortArray();
}


function sortArray(){
    var item=parseInt(document.getElementById("item").value);

    document.getElementById("item").value='';

    
    itemArray.push(item);
    //aelements = [300, 100, 50,3,0];
    //n=aelements.length;
    n=itemArray.length;
    for(i=0;i<n;i++)
    {
        for(j=0;j<n-i-1;j++)
        {
           if(itemArray[j]<itemArray[j+1])
           {
            temp=itemArray[j];
            itemArray[j]=itemArray[j+1];
            itemArray[j+1]=temp;
           }
            
        }
    }

    display();

}


function findElement(){
    var position=document.getElementById("pos").value;
    document.getElementById("pos").value='';
    //document.getElementById("searchedElement").innerHTML = aelements[position-1];
    document.getElementById("searchedElement").innerHTML = itemArray[position-1];


}
