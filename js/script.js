document.getElementById('toggleButton').addEventListener("click", function(){
    var extraImage = document.getElementById('extraImage');
    if (extraImage.style.display === 'none'){
        extraImage.style.display = 'block';
        this.textContent = 'Open';
    } else {
        extraImage.style.display = 'none';
        this.textContent = 'Close';
    }
})
