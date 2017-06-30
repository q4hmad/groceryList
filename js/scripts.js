$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    var groceryItems = ["groceryItem1", "groceryItem2", "groceryItem3", "groceryItem4"];
    var finalList = [];
    groceryItems.forEach(function(groceryItem) {

    var userInput = $("input#" + groceryItem).val();

    var allCaps = userInput.toUpperCase("");
    finalList.push(allCaps);
 });
    finalList.sort();

    finalList.forEach(function(grocery) {
      $("ol").append("<li>" + grocery + "</li>");
    })



    event.preventDefault();
  });
});
