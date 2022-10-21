var n = function(grid) {
    const visited = grid.map(row => row.map(cell => 2 ))
    return visited 
    
};
var grid = grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
alert(n(grid))