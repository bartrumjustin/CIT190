var compare = {                           
    name: function (a, b) {                  
        a = a.toLowerCase();          
        b = b.toLowerCase();          

        if (a < b) {                          
            return -1;                          
        } else {                              
            return a > b ? 1 : 0;               
        }                                     
    },
    number: function (a, b) {              
         

        return a - b;                        
    },
    double: function (a, b) {    
        //split the $ sign from the number, then return the number which is index 1 
        a = a.split('$');
        console.log(a[1]);
        b = b.split('$');                     
        //return and convert to float, doing so prior will go undefined as $ is not a number.
        return parseFloat(a[1] - b[1]);                        
    }
};

$('.sortable').each(function () {
    var $table = $(this);                     
    var $tbody = $table.find('tbody');        
    var $controls = $table.find('th');        
    var rows = $tbody.find('tr').toArray();   
    
    $controls.on('click', function () {        
        var $header = $(this);                  
        var order = $header.data('sort');       
        var column;                             

        
        if ($header.is('.ascending') || $header.is('.descending')) {
            $header.toggleClass('ascending descending');    
            $tbody.append(rows.reverse());                
        } else {                                                                    
            $header.addClass('ascending');                
            
            $header.siblings().removeClass('ascending descending');
            if (compare.hasOwnProperty(order)) {  
                column = $controls.index(this);         

                rows.sort(function (a, b) {               
                    a = $(a).find('td').eq(column).text(); 
                    b = $(b).find('td').eq(column).text(); 
                    return compare[order](a, b);           
                });

                $tbody.append(rows);
            }
        }
    });
});