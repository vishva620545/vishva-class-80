name_of_the_student_array=[];

function submit(){
    var display_student_arry=[];
for (var d=1;d<=4;d++)
{
    var name=document.getElementById("student-"+d).value;
    console.log(name);
    name_of_the_student_array.push(name);
}
    console.log(name_of_the_student_array);
    var lenght=name_of_the_student_array.lenght;
    console.log(lenght);
    for (var j=0;j<length;j++)
    {
         display_student_arry.push("<h4>name-"+name_of_the_student_array[j]+"</h4>");
         console.log(display_student_arry);
    }
    console.log(display_student_arry);

    document.getElementById("display_with_commas").innerHTML=display_student_arry;
    var remove=display_student_arry.join(" ");
    console.log(remove);
    document.getElementById("display_without_commas").innerHTML=remove;
    document.getElementById("submit-button").style.display="none";
    document.getElementById("sort-button").style.display="inline-block";

}
