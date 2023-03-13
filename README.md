<!-- /*
 SERIALIZE ARRAY METHOD
*/ -->

This method does not accept any arguments.
The .serializeArray() method creates a JavaScript array of objects, ready to be encoded as a JSON string. It operates on a jQuery collection of forms and/or form controls. The controls can be of several types:

<form>
  <div><input type="text" name="a" value="1" id="a"></div>
  <div><input type="text" name="b" value="2" id="b"></div>
  <div><input type="hidden" name="c" value="3" id="c"></div>
  <div>
    <textarea name="d" rows="8" cols="40">4</textarea>
  </div>
  <div><select name="e">
    <option value="5" selected="selected">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
  </select></div>
  <div>
    <input type="checkbox" name="f" value="8" id="f">
  </div>
  <div>
    <input type="submit" name="g" value="Submit" id="g">
  </div>
</form>
The .serializeArray() method uses the standard W3C rules for successful controls to determine which elements it should include; in particular the element cannot be disabled and must contain a name attribute. No submit button value is serialized since the form was not submitted using a button. Data from file select elements is not serialized. Elements that do not contain a value attribute are represented with the empty string value.

This method can act on a jQuery object that has selected individual form controls, such as <input>, <textarea>, and <select>. However, it is typically easier to select the <form> element itself for serialization:

$( "form" ).submit(function( event ) {
console.log( $( this ).serializeArray() );
event.preventDefault();
});
This produces the following data structure (provided that the browser supports console.log):

[
{
name: "a",
value: "1"
},
{
name: "b",
value: "2"
},
{
name: "c",
value: "3"
},
{
name: "d",
value: "4"
},
{
name: "e",
value: "5"
}
]
# user-management-system
