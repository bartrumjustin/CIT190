document.load=processName();
function processName()
{
var contents = "";
// concatenate each alternate name
for ( var i = 0; i < document.images.length; i++ )
{
   contents += i + 1 + ". " + document.images[i].alt + "&nbsp;&nbsp; "; //specified element index (was not indicated) in the HTML collection, then accessed the attribute to be sent
   console.log(contents); //logging to see....not a fix
} // end for
document.getElementById( "photo" ).innerHTML = contents; //id changed to photo per the html id
processLinks();
} // end function processName

function processLinks()
{
var contents = "| ";
// concatenate each link to contents
for ( var i = 0; i < document.links.length; i++ )
{
   contents += "<a href=" + document.links[i].href + ">" + document.images[i].alt + "</a>  | ";
} // end for

document.getElementById( "photoLinks" ).innerHTML = contents; //textcontent changed to innerhtml to allow tags to not be taken as a literal
} // end function processlinks
