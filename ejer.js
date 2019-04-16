
function matrixElementsSum(m)
{
  var matrix = m;
  let sum=0;
  for(let i=0;i<matrix.lenth;i++)
  {
    for(let j=0;j<matrix[i].lenth;j++)
     {
       if (i>0)
        {
          if(matrix[i-1][j]!=0&&matrix[i][j]!=0)
            suma+=matrix[i][j];


       }
       else
       {
           if (matrix[i][j]!=0)
            suma+=matrix[i][j];

       }
       }
       }
       return sum;
       }
    var p=[[0,0,0],[3,4,4],[1,1,1]];
    console.log(matrixElementsSum(p));
