//Business logic

//UI logic
window.onload =  function() {
    let form = document.getElementById("questions");
    let resultStyle = document.getElementById("results");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let q1 = parseInt(document.getElementById("superpowers").value);
        let q2 = parseInt(document.getElementById("food").value);
        let q3 = parseInt(document.getElementById("hddb").value);
        let q4 = parseInt(document.getElementById("dvw").value);
        let q5 = parseInt(document.getElementById("w1d1").value);
        let formResult = q1 + q2 + q3 + q4 + q5; 
        function getAnswer(answerParam){
            document.getElementById("resultAnswer").innerText = answerParam
            resultStyle.removeAttribute("class");
            document.getElementById("warning").setAttribute("class", "hidden");
        }        
        if (q1 && q2 && q3 && q4 && q5){
            if (formResult === 26) {
                getAnswer("python");
            } else if (formResult < 26 && formResult >= 15) {
                getAnswer("Java");
            } else if (formResult < 15 || formResult >= 5 ) {
                getAnswer("PHP");
            } else if (formResult < 5) {
                getAnswer("Quality Assurance testing");
            }
        } else {
            document.getElementById("warning").removeAttribute("class");
            resultStyle.setAttribute("class", "hidden");           
        }
    });
}