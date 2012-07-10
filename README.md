MobileHybridApp-TartanatorPlus
==============================

Starter Kit for in-class Training  

## Lab objectives:  
 - **DRY** your code
 - **JSON**ify your data
 - **AJAX** calling
 - **DOM** manipulation  

## Follows these steps:
 
###1. Use offline jQuery components 

- @index.html: Replace jQuery reference in `<head>` with the offline version shown below:     
`<link rel="stylesheet" href="css/jquery.mobile-1.1.0.min.css" />`  
`<script src="js/jquery.js"></script>`  
`<script src="js/jquery.mobile-1.1.0.min.js"></script>`

###2. DRY your code
 
- @index.html: Combinine tartans.html into index.html with `<div data-role="page" id="tartansPage">..</div>` 
- Make `<ul>` inside `<div id="tartansPage">` childless (no `<li>`) and set its attributes as `data-role="listview"` and `id="tartansList"`  
- Revise Tartans links `href="tartans.html"` of all footers to `="#tartansPage"`  

_**check your progress**: footer bar should work and tartans page should have no items_  

###3. JSONify your data

- Create `tartans.json` file with at least 10 objects, each object contains 2 properties (id, name) like this:  
`[`  
` {"id":1, "name":"abercromble"'},`   
` {"id":2, "name":"ar.. },`  
` ..`  
` ..`  
` {"id":10, ... }`  
`]`  
\* pick any tartan name you like from tartans folder  
\* make sure to save it in the root folder  

_**open your JSON in simulator**: if something wrong go back and check your web server MIME setting_  

###4. Binding Page Events

- @index.html: Insert `<script>..</script>` before the `</body>` tag
- Inside `<script>`, Bind event "pagebeforecreate" to "#homePage" and make "#tagLine" say "Hello Tartanian" or else when event is activated, like sample code below:  

`$("pageName").bind("eventName", function(e) {`  
`....$("anyElement").html("anyHTML");`  
`})`  

_**check your simulator**: TagLine should be changed_  

- Bind another event "pagebeforeshow" to "#tartansPage":  
- Make event handler work in the following sequence  
\- Get data from "tartans.json" with `$.get("yourJSON", {}, function(res,code) {}, "json")`  
\- Read all data and transform it into `<li>tertanName</li>` item    
\- Put all `<li>` into "tartansList": you might use `$("#yourList")` as selector  
\* String Concatenation migh be usefull here  
\* Do not forget to refresh your listview with `.listview("refresh")`  

_**check your progress**: you should see your tartans in Tartans page, well done guys!_ 







