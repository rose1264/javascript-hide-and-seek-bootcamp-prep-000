function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return  document.querySelector('#nested .target');
}

function deepestChild() {
   var grandNode = document.querySelector('#grand-node');
   var deepestNode = grandNode.children[0];
   while (deepestNode.children[i]) {
     deepestNode = deepestNode.children[0]
   }
   return deepestNode;
}
