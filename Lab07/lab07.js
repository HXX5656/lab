var sel1=document.getElementById("select1");
var sel2=document.getElementById("select2");
var inn=new Array();
var int=new Array();
var options=new Array();
var table;
function changes(){
    var num=sel1.selectedIndex;
    if(num==0){selectOne();}
    else if(num==1){createTable();}
    else if(num==2) {addRow();}
    else if(num==3) {deleteRow();}
    else {deleteTable();}
};
function s1() {
    if(sel1.selectedIndex==0){
        document.getElementById("commit").style.display="none";
        document.getElementById("input").style.display="none";
        $("#commit1").css("display",'none');
    }
}
s1();
function selectOne() {
    document.getElementById("commit").style.display="none";
    document.getElementById("input").style.display="none";
    $("#commit1").css("display",'none');
}
sel2.onchange=function cha() {
    var n=sel2.selectedIndex;
    if(n==0){
        table=null;
    }
    else {
        table=options[n-1];
    }
    changes();
    showtable();
}
function createTable() {
    document.getElementById("commit1").style.display="none";
    document.getElementById("input").style.display="block";
    $(".attrs1").css("display","none");
    $("#name,#number").val("");
    document.getElementById("number").onblur= function () {
            let givens=parseInt($("#number").val());
            let inne=new Array();
            $(".attrs").empty();
            for(let a=0;a<givens;a++){
                inne[a]=document.createElement("input");
                inne[a].type="text";
                inne[a].value="";
                inne[a].placeholder="Attribute";
                $(".attrs").append(inne[a]);
            }
        $(".attrs").css("display","block");
            inn=inne;
        }
        document.getElementById("name").onblur=function ()
        {if($("#name").val()=="") {
            document.getElementById("commit").style.display="none";
        }
        else {
        var commit=document.getElementById("commit");
            document.getElementById("commit").style.display="block";
            commit.onclick= function () {
                if(sel1.selectedIndex==1) {
                    let sm1=0;
                    for(let sm=0;sm<inn.length;sm++) {
                        if(inn[sm].value===""){
                            sm1++;
                        }
                    }
                    if(sm1!=inn.length){
                        options[options.length]=new Table();
                    }
                }
            }
        }
    }


}
function fresh(givens) {
    $(".attrs1").empty();
    var intt=new Array();
    for(var a=0;a<givens;a++){
        intt[a]=document.createElement("input");
        intt[a].type="text";
        intt[a].value="";
        intt[a].placeholder=table.inputs[a];
        $(".attrs1").append(intt[a]);
    }
    int=intt;
}
function addRow() {
    document.getElementById("input").style.display="none";
    var commit1=document.getElementById("commit1");
    $(".attrs").css("display",'none');
    $("#commit").css("display",'none');
    $("#commit1").css("display",'block');
    fresh(table.inputs.length);
    $(".attrs1").css("display",'block');
    commit1.onclick= function () {
            if(sel1.selectedIndex==2) {
                let xm1=0;
                for(let xm=0;xm<int.length;xm++) {
                    if(int[xm].value===""){
                        xm1++;
                    }
                }
           if(xm1!=int.length){
           table.trs.length++;
           table.trs[table.trs.length - 1] = new Array();
           let tr = table.trs[table.trs.length - 1];
           tr.length = table.inputs.length;
           for (let q = 0; q < table.inputs.length; q++) {
             tr[q] = int[q].value;
            }
    showtable();
}
                }
        }

}
function deleteRow() {
    document.getElementById("input").style.display="none";
    var commit1=document.getElementById("commit1");
    $(".attrs").css("display",'none');
    $("#commit").css("display",'none');
    $("#commit1").css("display",'block');
    fresh(table.inputs.length);
    commit1.onclick= function () {
            if(sel1.selectedIndex==3){
                for(let xx=0;xx<table.trs.length;xx++){
                    let scs=0;
                    for(let xs=0;xs<int.length;xs++) {
                        if(table.trs[xx]===undefined){

                        }
                        else {
                            if (int[xs].value === table.trs[xx][xs] || int[xs].value === "") {
                                scs++;
                            }
                        }
                    }
                    if(scs===int.length){
                        delete table.trs[xx];
                    }
                }
                showtable();
            }
        }
}
function deleteTable() {
    document.getElementById("commit1").style.display="none";
    document.getElementById("input").style.display="none";
    $(".attrs").css("display",'none');
    $(".attrs1").css("display",'none');
    var commit=document.getElementById("commit");
    commit.style.display="block";
    commit.onclick=function () {
        if(sel1.selectedIndex==4){
            alert("WARNING: You cannot undo this action!");
         var delnow=sel2.selectedIndex;
        if(options.length>1){
            sel2.remove(delnow);
            options.splice((delnow-1),1);
            sel2.selectedIndex=1;
            table=options[0];
        }
        else {
            table=null;
            sel2.selectedIndex=0;
        }
        showtable();
        }
    }
}
function Table() {
    var inputss=new Array();
    for(var counts=0;counts<inn.length;counts++){
        inputss[counts]=inn[counts].value;
    }
    table=this;
    this.inputs=inputss;
    this.trs=new Array();
    this.name=$("#name").val();
    reflesh(this);
}
function reflesh(table) {

        var now=document.createElement("option");
        now.value=""+table.name;
        now.innerHTML=""+table.name;
        $("#select2").append(now);
        now.selected=true;
        showtable();
}
function showtable() {
    $("table tbody,table thead").empty();
    var thead=$("table thead");
    var tbody=$("table tbody");
    for(var s=0;s<table.inputs.length;s++) {
       var newnow=document.createElement("th");
        newnow.innerHTML=table.inputs[s];
        thead.append(newnow);}
    for(var x=0;x<table.trs.length;x++) {
        if(table.trs[x]==undefined){

        }
        else {
        var tr=document.createElement("tr");
        for(var y=0;y<table.inputs.length;y++) {
            var td=document.createElement("td");
            td.innerHTML=table.trs[x][y]+"";
            tr.append(td);
        }
            tbody.append(tr);
    }
    }
    $("tr:nth-child(even)").css("background-color","lightgrey");
}