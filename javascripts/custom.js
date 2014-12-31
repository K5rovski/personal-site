var JFiles={};

loadData=function(){
		// var skopje={}
		var func=$.getJSON("SkopjePM10Averaged.json");
			var func2=$.getJSON("ParisPM10Averaged.json");
		
		$.when(func,func2).done(function (data1 , data2) {
    
	var name1=data1[0].Station;
	JFiles[name1.slice(0,name1.search('_'))]=data1;
	var name2=data2[0].Station;
	JFiles[name2.slice(0,name2.search('_'))]=data2;
	console.log(JFiles.Paris);
	makeGraph()
});
		

}
makeGraph=function(){
	var	skopje=JFiles.Skopje;
	for (var i=0;i<skopje.length;i++){
		t=skopje[i];
		t['x']=new Date(t['Year'],t['Month']-1,t['Day'],t['Time']-1);
		if (t['Year'])
		t['y']=t['Reading'];
		}
          var chart = new CanvasJS.Chart("chartContainer", {
              theme: "theme2",//theme1
			   zoomEnabled: true,
			panEnabled: true,
              title:{
                  text: "Skopje"              
             },
              data: [              
              {
// Change type to "bar", "splineArea", "area", "spline", "pie",etc.
                  type: "line",
				  markerType:"none",
                  dataPoints: skopje
              }
              ]
          });

          chart.render();
}
 window.onload = function () {
		loadData();
		
		
		
      }