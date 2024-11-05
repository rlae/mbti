document.getElementById('mbti-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect answers and calculate MBTI type
    let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    const answers = new FormData(event.target);

    answers.forEach((value) => {
        scores[value]++;
    });

    // Determine MBTI type based on highest scores
    const mbti = `${scores['E'] > scores['I'] ? 'E' : 'I'}${scores['S'] > scores['N'] ? 'S' : 'N'}${scores['T'] > scores['F'] ? 'T' : 'F'}${scores['J'] > scores['P'] ? 'J' : 'P'}`;

    // Redirect to results page with MBTI type as query parameter
    window.location.href = `result.html?type=${mbti}`;
});
