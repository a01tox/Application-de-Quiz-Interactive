const quizzes = {
  html: {
    title: "HTML",
    iconName: "html icon.png",
    iconBg: "var(--accent-orange)",
    questions: [
      {
        question: "What does HTML stand for?",
        options: ["Hyper Trainer Markup Language", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
        answer: 1
      },
      {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<script>", "<css>", "<style>", "<link>"],
        answer: 2
      },
      {
        question: "Which HTML attribute specifies an alternative text for an image, if the image cannot be displayed?",
        options: ["title", "src", "alt", "longdesc"],
        answer: 2
      },
      {
        question: "Choose the correct HTML element for the largest heading:",
        options: ["<heading>", "<h6>", "<head>", "<h1>"],
        answer: 3
      },
      {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", "<lb>", "<break>", "<tr>"],
        answer: 0
      },
      {
        question: "Which character is used to indicate an end tag?",
        options: ["^", "<", "*", "/"],
        answer: 3
      },
      {
        question: "How can you make a numbered list?",
        options: ["<ul>", "<dl>", "<ol>", "<list>"],
        answer: 2
      },
      {
        question: "What is the correct HTML for making a checkbox?",
        options: ["<input type=\"checkbox\">", "<check>", "<checkbox>", "<input type=\"check\">"],
        answer: 0
      },
      {
        question: "Which HTML element defines navigation links?",
        options: ["<nav>", "<navigation>", "<navigate>", "<navlinks>"],
        answer: 0
      },
      {
        question: "In HTML, which attribute is used to specify that an input field must be filled out?",
        options: ["placeholder", "validate", "required", "formvalidate"],
        answer: 2
      }
    ]
  },
  css: {
    title: "CSS",
    iconName: "css icon.png",
    iconBg: "var(--accent-green)",
    questions: [
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        answer: 0
      },
      {
        question: "What is the correct HTML for referring to an external style sheet?",
        options: ["<style src=\"mystyle.css\">", "<link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\">", "<stylesheet>mystyle.css</stylesheet>", "<link src=\"mystyle.css\">"],
        answer: 1
      },
      {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        options: ["At the end of the document", "In the <body> section", "In the <head> section", "Before the <html> tag"],
        answer: 2
      },
      {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<script>", "<style>", "<css>", "<link>"],
        answer: 1
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["font", "styles", "class", "style"],
        answer: 3
      },
      {
        question: "Which is the correct CSS syntax?",
        options: ["body:color=black;", "body {color: black;}", "{body:color=black;}", "{body;color:black;}"],
        answer: 1
      },
      {
        question: "How do you insert a comment in a CSS file?",
        options: ["' this is a comment", "// this is a comment", "// this is a comment //", "/* this is a comment */"],
        answer: 3
      },
      {
        question: "Which property is used to change the background color?",
        options: ["bgcolor", "color", "background-color", "bg-color"],
        answer: 2
      },
      {
        question: "How do you add a background color for all <h1> elements?",
        options: ["all.h1 {background-color:#FFFFFF;}", "h1.all {background-color:#FFFFFF;}", "h1 {background-color:#FFFFFF;}", "h1 {bgcolor:#FFFFFF;}"],
        answer: 2
      },
      {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["fgcolor", "color", "text-color", "font-color"],
        answer: 1
      }
    ]
  },
  javascript: {
    title: "Javascript",
    iconName: "js icon.png",
    iconBg: "var(--accent-blue)",
    questions: [
      {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<javascript>", "<js>", "<scripting>", "<script>"],
        answer: 3
      },
      {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["The <body> section", "The <head> section", "Both the <head> section and the <body> section are correct", "The <footer> section"],
        answer: 2
      },
      {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        options: ["<script href=\"xxx.js\">", "<script src=\"xxx.js\">", "<script name=\"xxx.js\">", "<link src=\"xxx.js\">"],
        answer: 1
      },
      {
        question: "The external JavaScript file must contain the <script> tag.",
        options: ["True", "False", "Only if it is in the head", "Only if it is in the body"],
        answer: 1
      },
      {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
        answer: 3
      },
      {
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "def myFunction()"],
        answer: 0
      },
      {
        question: "How do you call a function named 'myFunction'?",
        options: ["call function myFunction()", "call myFunction()", "myFunction()", "execute myFunction()"],
        answer: 2
      },
      {
        question: "How to write an IF statement in JavaScript?",
        options: ["if i = 5", "if i == 5 then", "if i = 5 then", "if (i == 5)"],
        answer: 3
      },
      {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        options: ["if (i != 5)", "if i <> 5", "if (i <> 5)", "if i =! 5 then"],
        answer: 0
      },
      {
        question: "How does a WHILE loop start?",
        options: ["while i = 1 to 10", "while (i <= 10)", "while (i <= 10; i++)", "while i <= 10"],
        answer: 1
      }
    ]
  },
  accessibility: {
    title: "Accessibility",
    iconName: "accessibility icon.png",
    iconBg: "var(--accent-purple)",
    questions: [
      {
        question: "What does WCAG stand for?",
        options: ["Web Content Accessibility Guidelines", "Web Compliance Advisory Group", "World Computer Accessibility Group", "Web Creative Accessibility Guide"],
        answer: 0
      },
      {
        question: "Which ARIA role should be used for a progress bar?",
        options: ["role=\"status\"", "role=\"progressbar\"", "role=\"meter\"", "role=\"slider\""],
        answer: 1
      },
      {
        question: "Which element provides the best structural outline for screen readers?",
        options: ["<div> and <span>", "<br> and <hr>", "Semantic HTML5 elements like <header>, <nav>, <main>", "ARIA states like aria-hidden"],
        answer: 2
      },
      {
        question: "What attribute is essential on an <img> tag for screen readers?",
        options: ["title", "src", "aria-label", "alt"],
        answer: 3
      },
      {
        question: "Why should you avoid using positive tabindex values (tabindex=\"1\", etc)?",
        options: ["It disables keyboard focus completely.", "It disrupts the natural tab order of the document.", "It causes screen readers to skip the element.", "It conflicts with ARIA roles."],
        answer: 1
      },
      {
        question: "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
        options: ["4.5 : 1", "3 : 1", "2.5 : 1", "5 : 1"],
        answer: 0
      },
      {
        question: "Which of the following is true concerning skipping headings?",
        options: ["You can skip heading levels if they look better visually.", "You should never skip heading levels (e.g. <h2> to <h4>).", "Screen readers ignore heading levels entirely.", "Only <h1> to <h3> really matter."],
        answer: 1
      },
      {
        question: "What is the purpose of a 'skip link'?",
        options: ["To skip playing media files automatically.", "To jump from one page to another immediately.", "To bypass repetitive navigation and go straight to main content.", "To avoid rendering issues on older browsers."],
        answer: 2
      },
      {
        question: "For meaningful icons without visible text, how should accessible text be provided?",
        options: ["By adding a tooltip using the title attribute.", "By using aria-label or visually-hidden screen reader text.", "By relying on the alt text of the parent element.", "Icons don't require accessible text."],
        answer: 1
      },
      {
        question: "What is the best way to handle non-interactive `div` elements used as buttons?",
        options: ["Add a click listener in JS and done.", "Add role=\"button\", a tabindex=\"0\", and handle Space/Enter keys.", "Switch to an <a> tag and leave href blank.", "There is no accessible way to use a div as a button."],
        answer: 1
      }
    ]
  }
};
