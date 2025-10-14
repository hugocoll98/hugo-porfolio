window.addEventListener("load", () => {
    document.getElementById("calc").addEventListener("click", function () {
        const nom1 = document.getElementById("n1").value;
        const nom2 = document.getElementById("n2").value;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === XMLHttpRequest.DONE) {
                const respuesta = JSON.parse(this.responseText);
                const per = document.createElement("h1");
                per.innerHTML = `${respuesta.percentage}% ❤️`;
                document.getElementById("titol").innerHTML = ""; // limpia resultado anterior
                document.getElementById("titol").appendChild(per);
            }
        });

        xhr.open('GET', `https://love-calculator.p.rapidapi.com/LoveCalculator/calculate?FirstName=${nom1}&SecondName=${nom2}`);
        xhr.setRequestHeader('x-rapidapi-key', '63413d8ad9msh01c17b4087fbd24p1b1c99jsnf87e500bdaee');
        xhr.setRequestHeader('x-rapidapi-host', 'love-calculator.p.rapidapi.com');
        xhr.send();
    });
});
