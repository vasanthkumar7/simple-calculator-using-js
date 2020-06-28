
console.log("dont worry");
var resut=0;
var resut2=0;
var h1;
var h2;
var first=0;
var second=0;
var od=1;
function cl()
{
    document.getElementById("hello").innerHTML=0;
    h1=0;
resut=0;
first=0;
second=0;

}
function pow2()
{
    document.getElementById("hello").innerHTML=resut*resut;
    resut=resut*resut;
    h1=resut;
}
function pow3()
{
    document.getElementById("hello").innerHTML=resut*resut*resut;
    resut=resut*resut*resut;
    h1=resut;
}
function divit()
{
    first=h1;
h1=0;
resut=0;
document.getElementById("hello").innerHTML=0;
od=4;
}
function remit()
{
    first=h1;
h1=0;
resut=0;
document.getElementById("hello").innerHTML=0;
od=5;
}
function add(num)
{
    document.getElementById("hello").innerHTML=resut*10+num;
    resut=resut*10+num;
    h1=resut;
    console.log(h1);
}
function add1()
{
first=h1;
h1=0;
resut=0;
document.getElementById("hello").innerHTML=0;
od=1;
}
function sub()
{
first=h1;
h1=0;
resut=0;
document.getElementById("hello").innerHTML=0;
od=2;
}

function mul()
{
    first=h1;
h1=0;
resut=0;
document.getElementById("hello").innerHTML=0;
od=3;

}
function back()
{
if(h1!=0)
{
    var n1=h1%10;
    h1=h1-n1;
    h1=h1/10;
    resut=h1;
    document.getElementById("hello").innerHTML=h1;
}

}

function equal()
{
    if(od==1)
    {
    second=h1;
    document.getElementById("hello").innerHTML=first+second;
    h1=first+second;
    resut=h1;
    }
     if(od==2)
    {
    second=h1;
    document.getElementById("hello").innerHTML=first-second;
    h1=first-second;
    console.log(h1);
    resut=h1;
    }
    if(od==3)
    {
    second=h1;
    document.getElementById("hello").innerHTML=first*second;
    h1=first*second;
    console.log(h1);
    resut=h1;
    }
    if(od==4)
    {
    second=h1;
    if(first!=0 || second!=0)
    {
        document.getElementById("hello").innerHTML=first/second;
    h1=first/second;
    console.log(h1);
    }
    else
    {
        document.getElementById("hello").innerHTML=0;
        h1=0;
    console.log(h1);
    }
    resut=h1;
    }

    if(od==5)
    {
        second=h1;
        if(first!=0 || second!=0)
        {
            document.getElementById("hello").innerHTML=first%second;
    h1=first%second;

        }
        else
        {
            document.getElementById("hello").innerHTML=0;
            h1=0;

        }
    
    resut=h1;
    

    }

}

