function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return  document.querySelector('#nested .target');
}

function deepestChild() {
   var grandNode = document.querySelector('#grand-node');
   var deepestNode = grandNode.children[0];
   while (deepestNode.children[0]) {
     deepestNode = deepestNode.children[0]
   }
   return deepestNode;
}

function increaseRankBy(n){
  var ranks = document.querySelector('ul.ranked-list li')
  for (var i=0;i<ranks.length;i++){
    rank[i].innerHTML = parseInt(rank[i].innerHTML) +n;
  }
}