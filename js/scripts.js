(function(){
    var table = document.querySelector("#mytable"),
        ths = document.querySelectorAll("thead th"),
        tr = document.querySelectorAll("tbody tr");
   
        
    function makeArray(nodeList){

        var arr = [];
        
        for (let i = 0; i < nodeList.length; i++) {
            arr.push(nodeList[i]);        
        }

        return arr;
    }

    function sortBy(e){
        var target = e.target,
            thsArr = makeArray(ths),
            trsArr = makeArray(tr),
            index = thsArr.indexOf(target),
            df = document.createDocumentFragment()
            order = (target.className ==="" || target.className ==="desc") ? "asc": "desc";

            for (let i = 0; i < ths.length; i++) {
                ths[i].className="";
            }
    
            trsArr.sort(function(a,b){
                var tdA = a.children[index].textContent;
                var tdB = b.children[index].textContent;
                
                if (tdA<tdB) {
                    return order ==="asc" ? -1: 1;
                }else if (tdA>tdB) {
                    return order ==="asc" ? 1: -1;
                }else{
                    return 0;
                }
                
            })
  
            
            trsArr.forEach(function(tr) {
                df.appendChild(tr)
                
            });
            
            target.className = order;
            table.querySelector("tbody").appendChild(df);
    }


    for (var i = 0; i < ths.length; i++) {
        ths[i].onclick = sortBy;
    }


})()