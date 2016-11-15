var arr = [
  {
    id: 1,
    parentId: null
  },
    {
    id: 2,
    parentId: 1
  },
    {
    id: 3,
    parentId: 1
  },
    {
    id: 4,
    parentId: 2
  },
    {
    id: 5,
    parentId: 2
  },
    {
    id: 6,
    parentId: 3
  },
  
];

arr.forEach((el) => {
    el.children = getChildrenOf(el.id);
})
arr = arr.filter((el) => el.parentId === null);

function getChildrenOf(id){
  return arr.filter(el => {
    return el.parentId === id;
  }).map(el => JSON.parse(JSON.stringify(el)));
}

console.log(arr);