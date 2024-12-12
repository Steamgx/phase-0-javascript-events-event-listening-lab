/* const input = document.getElementById('button');
input.addEventListener('click', function() {
   return alert('I was clicked!');
}); */
/*  const input=document.getElementById('button');
input.addEventListener("click",function(){
  return alert("I was clicked!")
}) */
  function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener("click", function () {
        alert("I was clicked!");
    });
}

// Export the function if necessary for the test environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { addingEventListener };
}
