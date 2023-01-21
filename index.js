var button = document.querySelectorAll('.sty');
var display = document.querySelector('.display');
var oldis = document.querySelector('.dis');
var fill = document.querySelector('.fill');
var fill2 = document.querySelector('.fill2');
var opera = null;

var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i<button.length ; i++)
{
    button[i].addEventListener('click' , function(){

        var value = this.getAttribute('data-value');
        if(value == '+')
        {
             opera = null;
            operator = '+';
            operand1 = parseFloat(fill2.innerHTML);
            fill2.innerText += value;
            fill.innerHTML = null;
            fill.style.display = 'none';
            fill2.style.display = 'inline-block';
           
        }
        else if(value == '-')
        {  
             opera = null;
            operator = '-';
            operand1 = parseFloat(fill2.innerHTML);
            fill2.innerText += value;
            fill.innerHTML = null;
            fill.style.display = 'none';
            fill2.style.display = 'inline-block';
           
        }
        else if(value == '*')
        {   
            opera = null;
            operator = '*';
            operand1 = parseFloat(fill2.innerHTML);
            fill2.innerText += value;
            fill.innerHTML = null;
            fill.style.display = 'none';
            fill2.style.display = 'inline-block';
           
        }
        else if(value == '/')
        {
            opera = null;
            operator = '/';
            operand1 = parseFloat(fill2.innerHTML);
            fill2.innerText += value;
            fill.innerHTML = null;
            fill.style.display = 'none';
            fill2.style.display = 'inline-block';
      
        }
        else if(value == '%')
        {    
            opera = null;
            operator = '%';
            operand1 = parseFloat(fill2.innerHTML);
            fill2.innerText += value;
            fill.innerHTML = null;
            fill.style.display = 'none';
            fill2.style.display = 'inline-block';
         
        }
        else if ( value == '=')
        {
            operand2 = parseFloat(fill.textContent);
            var output = eval(operand1 + " " + operator + " " + operand2);
            oldis.innerText = output;
            oldis.style.display = "inline-block";
            fill.style.display= "none";
            operand1 = output;
            opera = '=';
        }
       
        else if(value == '+/-')
        {
            var temp = parseFloat(fill2.innerHTML);
            var tempo = parseFloat(fill.innerHTML);

            if (opera == '=')
            {
                oldis.innerHTML = 0-operand1;
                operand1 = parseFloat(oldis.innerHTML);
            }
            else {
                fill.innerHTML = 0-temp;
                fill2.innerText = 0-temp;
            }
        }

        else if ( value == "AC")
        {
            fill.innerText = null;
            fill2.innerText = null;
            oldis.innerText = 0;
            operand1 = null;
            operand2 = null;
            operator = null;
            opera = null;
        }
      
        else {
            oldis.style.display = 'none'; 
            fill.style.display = 'inline-block';  
            fill.innerText += value;
            fill2.innerText += value;
        }
    });
}