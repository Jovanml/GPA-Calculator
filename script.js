var counter = 0;
var limit = 8;

function addCell(){
    if(counter < limit){
        var inputBox = document.createElement('input');
        var div = document.createElement('div');
        inputBox.type = "number";
        inputBox.classList = "newInputBox";
        div.appendChild(inputBox);
        document.getElementById("input").appendChild(div);
        counter += 1;
    }
}

function delCell(){
    container = document.getElementById("input");
    container.removeChild(container.lastElementChild);
    counter -=1;
}

function calculate(){
    var elements = document.getElementsByClassName('newInputBox');
    var sum = 0;
    for(var i = 0;i<elements.length;i++){
        if(elements[i].value.length == 0){
            document.getElementById("write").innerHTML = "Invalid Input";
            document.getElementById("write").style.color = "red";
            return;
        }
        sum = sum + parseFloat(elements[i].value);
    }
    avg = parseFloat(sum/elements.length).toFixed(2);
    document.getElementById("write").innerHTML = avg;
    document.getElementById("write").style.color = "black";
}
    
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("cal").click();
    }
});

