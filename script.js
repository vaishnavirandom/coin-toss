document.getElementById('tossButton').addEventListener('click', function() {
    // Generate a random number between 0 and 1
    const toss = Math.random();
    
    // Determine the result based on the random number
    const result = toss < 0.5 ? 'Heads' : 'Tails';
    
    // Display the result
    document.getElementById('result').textContent = result;
});
