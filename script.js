const labels = document.querySelectorAll('.form-control label'); //A node list of the label elements
console.log('running');
labels.forEach(label => {
    //Lable is the name we assign to the values of the array
    //We assign a new value the HTML of that current array value 
    //We split only the text of that value (.split()) into an array
    //We add spans around each value/letter of that new array
    //We make that new array with our span values into a string and assign it as the HTML 
    label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style = "transition-delay:${idx *60}ms">${letter}</span>`).join('');
})