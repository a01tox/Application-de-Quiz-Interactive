const homeView = document.getElementById('home-view');
const quizView = document.getElementById('quiz-view');
const resultsView = document.getElementById('results-view');

const activeSubjectContainer = document.getElementById('active-subject');
const resultSubjectHeader = document.getElementById('result-subject-header');

const questionNumEl = document.getElementById('current-question-num');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');
const progressBar = document.getElementById('progress-bar');
const errorMsg = document.getElementById('error-message');

const finalScoreEl = document.getElementById('final-score');
const restartBtn = document.getElementById('restart-btn');

let currentSubjectKey = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;
let quizState = 'answering';

const alphaMap = ['A', 'B', 'C', 'D'];

document.querySelectorAll('.quiz-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const subjectKey = card.getAttribute('data-subject');
        startQuiz(subjectKey);
    });
});

restartBtn.addEventListener('click', () => {
    resetQuiz();
});

function startQuiz(subjectKey) {
    currentSubjectKey = subjectKey;
    currentQuestionIndex = 0;
    score = 0;

    const subjectData = quizzes[subjectKey];
    const headerHTML = `
        <div class="icon-wrapper" style="background-color: ${subjectData.iconBg}">
            <img src="image/icon/${subjectData.iconName}" alt="${subjectData.title} Icon">
        </div>
        <span class="subject-title">${subjectData.title}</span>
    `;
    activeSubjectContainer.innerHTML = headerHTML;
    resultSubjectHeader.innerHTML = headerHTML;

    homeView.classList.add('hidden');
    quizView.classList.remove('hidden');

    loadQuestion();
}

function loadQuestion() {
    quizState = 'answering';
    selectedOptionIndex = null;
    errorMsg.classList.add('hidden');
    submitBtn.textContent = 'Submit Answer';

    const subjectData = quizzes[currentSubjectKey];
    const currentQuestion = subjectData.questions[currentQuestionIndex];

    questionNumEl.textContent = currentQuestionIndex + 1;
    questionTextEl.textContent = currentQuestion.question;
    progressBar.style.width = `${((currentQuestionIndex + 1) / subjectData.questions.length) * 100}%`;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((optionTxt, idx) => {
        const optionBtn = document.createElement('button');
        optionBtn.classList.add('option-btn');
        optionBtn.dataset.index = idx;

        optionBtn.innerHTML = `
            <div class="option-letter">${alphaMap[idx]}</div>
            <span class="option-text"></span>
            <div class="option-icon hidden"></div>
        `;
        optionBtn.querySelector('.option-text').textContent = optionTxt;

        optionBtn.addEventListener('click', () => selectOption(idx));
        optionsContainer.appendChild(optionBtn);
    });
}

function selectOption(idx) {
    if (quizState !== 'answering') return;
    selectedOptionIndex = idx;
    errorMsg.classList.add('hidden');

    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));

    const targetBtn = document.querySelector(`.option-btn[data-index="${idx}"]`);
    if (targetBtn) targetBtn.classList.add('selected');
}

submitBtn.addEventListener('click', () => {
    if (quizState === 'answering') {
        if (selectedOptionIndex === null) {
            errorMsg.classList.remove('hidden');
            return;
        }

        quizState = 'answered';
        const currentQuestion = quizzes[currentSubjectKey].questions[currentQuestionIndex];
        const isCorrect = selectedOptionIndex === currentQuestion.answer;

        if (isCorrect) score++;

        const options = document.querySelectorAll('.option-btn');
        options.forEach(btn => {
            const btnIdx = parseInt(btn.dataset.index);
            const iconEl = btn.querySelector('.option-icon');

            if (btnIdx === currentQuestion.answer) {
                if (btnIdx === selectedOptionIndex) {
                    btn.classList.add('correct');
                }
                iconEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#26D782" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m14 20 4 4 8-8"/></svg>`;
                iconEl.classList.remove('hidden');
            } else if (btnIdx === selectedOptionIndex && !isCorrect) {
                btn.classList.add('incorrect');
                iconEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill="#EE5454" d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Z"/><path stroke="#fff" stroke-linecap="round" stroke-width="3" d="m14 14 12 12m0-12-12 12"/></svg>`;
                iconEl.classList.remove('hidden');
            }
        });

        if (!isCorrect) {
            submitBtn.textContent = 'View Results';
        } else {
            submitBtn.textContent = 'Next Question';
        }

        progressBar.style.width = `${((currentQuestionIndex + 1) / quizzes[currentSubjectKey].questions.length) * 100}%`;

    } else if (quizState === 'answered') {
        const currentQuestion = quizzes[currentSubjectKey].questions[currentQuestionIndex];
        const isCorrect = selectedOptionIndex === currentQuestion.answer;

        if (!isCorrect) {
            showResults();
        } else {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizzes[currentSubjectKey].questions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        }
    }
});

function showResults() {
    quizView.classList.add('hidden');
    resultsView.classList.remove('hidden');
    finalScoreEl.textContent = score;
}

function resetQuiz() {
    resultsView.classList.add('hidden');
    homeView.classList.remove('hidden');
    activeSubjectContainer.innerHTML = '';
}