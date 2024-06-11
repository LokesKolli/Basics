document.getElementById("start-button").addEventListener("click", function() {
    // Go to first lesson
    window.location.href = "#lesson1";
});

document.getElementById("next-button").addEventListener("click", function() {
    // Go to next lesson
    var currentLesson = document.location.hash.substring(1);
    var nextLesson = parseInt(currentLesson) + 1;
})
