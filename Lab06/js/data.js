const countries = [
    { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
    { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
    { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
    { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
];
function addItem() {
    let number
    let container=document.getElementById("1");
    for(number=0;number<4;number++) {
        let item=document.createElement("div");
        item.className="item";
        container.appendChild(item);
        itemtobe(number,item);
    }
}
function itemtobe(number,item) {
    let p=document.createElement("div");
    let box1=document.createElement("div");
    let box2=document.createElement("div");
    let pho=document.createElement("div");
    let h3=document.createElement("h3");
    let bt=document.createElement("button");
    h3.innerHTML="Popular Photos";
    box1.className="inner-box";
    box2.className="inner-box";
    item.appendChild(p);
    item.appendChild(box1);
    item.appendChild(box2);
    item.appendChild(bt);
    box2.appendChild(h3);
    box2.appendChild(pho);
    p.innerHTML="<h2>"+countries[number].name+"</h2>"+"<p>"+countries[number].continent+"</p>";
    box1.innerHTML="<h3>Cities</h3>"+createul(number);
    createphotos(number,pho);
    bt.innerHTML="Visit";
}
function createul(number) {
    let count;
    let str="";
    let citiesnow=countries[number].cities;
    for(count=0;count<citiesnow.length;count++){
        str=str+"<li>"+citiesnow[count]+"</li>"
    }
    str="<ul>"+str+"</ul>";
    return str;
}
function createphotos(number,pho) {
    let base="images/";
    let counts;
    let photosnow=countries[number].photos;
    for(counts=0;counts<photosnow.length;counts++){
        let img=document.createElement('img');
        img.className="photo";
        img.src=base+photosnow[counts];
        pho.appendChild(img);
    }
}
addItem();