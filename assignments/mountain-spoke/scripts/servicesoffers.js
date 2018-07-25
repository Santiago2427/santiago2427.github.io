var section = document.querySelector('section');
var requestURL = 'https://santiago2427.github.io/assignments/mountain-spoke/data/servicedata.json';
var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function() {
                var serviceInfo = request.response;
                    showServicedata(serviceInfo);
                                }
function showServicedata(jsonObj) {
    var service = jsonObj['services'];
        for (var i = 0; i < service.length; i++){
                  
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myH3 = document.createElement('h3');                   
    var myList = document.createElement('ul');
                

    myH2.textContent = service[i].name;
    myH3.textContent = service[i].banner;
                
        var servicedetails = service[i].details;
            for (var j = 0; j < servicedetails.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = servicedetails[j];
                myList.appendChild(listItem);
            }

                
    myArticle.appendChild(myH2);
    myArticle.appendChild(myH3);
    myArticle.appendChild(myList);
                
    section.appendChild(myArticle);
  }
            
}