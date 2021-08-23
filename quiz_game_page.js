player1_name = localStorage.getItem("player1name");
player2_name = localStorage.getItem("player2name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name+" : ";
document.getElementById("player2_name").innerHTML = player2_name+" : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "question turn : "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : "+player2_name;
function send(){
    number1 = document.getElementById("number1").value = number1;
    number2 = document.getElementById("number2").value = number2;
    actual_answer = parseInt(number1)*parseInt(number2)
    console.log("actual_answer");
    questionnumber = "<h4>"+number1+"X"+number2+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    checkbutton = "<br><br> <button onclick='check()' class='btn btn-info'>Check</button>";
    row = questionnumber+input_box+checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
