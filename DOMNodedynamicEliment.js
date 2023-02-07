let di = document.createElement("div");
di.classList.add("container");
let conatinerDiv = document.querySelector("#target1");
conatinerDiv.appendChild(di);

let submitBtn = document.getElementById("sbtBtn");
submitBtn.addEventListener("click", displayStudentDetails);

// 'to display the form details'
// adding dynamic elemnts to the wed page
// add i, to remove exact div
let i=0;
function displayStudentDetails() {
    i=i+1;
    let fanme = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let standard = document.getElementById("std").value;

    let content = `<div><p>name ${fanme}</p>
                    <p>name ${email}</p>
                    <p>name ${standard}</p>
                    <button class="removeBtn" id="remove-${i}"> X</button>
                </div>`;
    // delete details from web page, above button is use to remove the details
    conatinerDiv.insertAdjacentHTML("beforeend", content);

    // delete details from web page
    let rBtn = document.querySelector("#remove-"+i);
    rBtn.addEventListener("click", function (){
        // parent.remocechild(child)
        let removeEL=this.parentNode;
        // console.log(removeEL);
        conatinerDiv.removeChild(removeEL);
    });
}


