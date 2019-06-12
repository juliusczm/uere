//onload = init;

function termoSomenteida(checkbox){

    if(checkbox.checked == true){
      document.getElementById('idVolta').classList.add('hide');
    }else{
      document.getElementById('idVolta').classList.remove('hide');
    }      
  }


  function queryObj() {
    var result = {}, keyValuePairs = location.search.slice(1).split("&");
    keyValuePairs.forEach(function(keyValuePair) {
        keyValuePair = keyValuePair.split('=');
        result[decodeURIComponent(keyValuePair[0])] = decodeURIComponent(keyValuePair[1]) || '';
    });
    return result;
}
var url = queryObj();
console.log(url.dataOrigem.replace(/[\+\.]/g , " "));



