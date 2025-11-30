function openPieLegend(clicked, id){
    
    $('.legend-details .list-item').removeClass('open');
    
    if($(clicked).hasClass('open')){
        $(clicked).removeClass('open'); 
    }else{
        $('.pie-wrapper div').removeClass('open'); 
        $(clicked).addClass('open'); 
        $('.legend-details .list-item.legend-desc-' + id).addClass('open'); 
    }
    
    
     
}


function selectLegendDescription(legend){
    
    
}


