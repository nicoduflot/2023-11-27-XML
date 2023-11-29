window.addEventListener('DOMContentLoaded', function(){
    const allButtons = document.querySelectorAll('button[data-action="readxml"]');
    //console.log(allButtons);
    allButtons.forEach(function(source){
        source.addEventListener('click', function(){
            //console.log(source.dataset.xmlsource);
            fetch(source.dataset.xmlsource)
            .then(function(reponse){
                //console.log(reponse);
                return reponse.text();
            })
            .then(function(data){
                //console.log(data);
                const parser = new DOMParser();

                const xmlDoc = parser.parseFromString(data, 'application/xml');

                //console.log(xmlDoc);

                
            });
        });
    });
});