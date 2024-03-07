

    function exibirMencao(){
        var i=0;
        var r=0;
        var b=0;
        var mb=0;
        for (let n=1; n<=56; n++) {
            let nota=document.getElementById("nota"+n).value
            console.log(nota)
        
            if(nota === 'i' || nota === 'I'){
                i++;
            }
            else if(nota === 'r' || nota === 'R'){
                r++;
            }
            else if(nota === 'b' || nota === 'B'){
                b++;
            }
            else if(nota === 'mb' || nota === 'MB') {
                mb++;
            }
        }
        document.getElementById('mb').innerHTML = mb;
        document.getElementById('b').innerHTML = b;
        document.getElementById('r').innerHTML = r;
        document.getElementById('i').innerHTML = i;
        
    }

    


