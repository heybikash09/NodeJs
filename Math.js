exports.MyDateTime=function()
//exports keyword to make properties and methods available outside the module file.
{
 return Date()
}
//preferable method 
exports.add=function(a,b)
{
return a+b
}
// function add(a,b)
// {
// return a+b
// }
// function sub(a,b)
// {
//     return a-b;
// }

//Another method to exports 

// module.exports=add
// //sub method override the add method 
// module.exports=sub