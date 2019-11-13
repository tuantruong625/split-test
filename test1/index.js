
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Customer Satisfaction Survery",
    pages: [
        {
            questions: [
                {
                    type: "radiogroup",
                    name: "productUsage",
                    title: "How often do you use the product?",
                    choices: [
                        "Never", "Once a month", "Once a week", "Sometimes", "Always"
                    ],
                },
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "ageGroup",
                    title: "What age group do you belong in?",
                    choicesOrder: "random",
                    choices: [
                        "18 under", "19-25", "26-30", "31-40", "41+"
                    ],
                }
            ]
        }, {
            questions: [
                {
                
                        name: "location",
                        type: "text",
                        title: "Where are you located?",
                        placeHolder: "123 Fake Street",
                        isRequired: true
                
                }
            ]
        },  {
            questions: [
                {
                    type: "radiogroup",
                    name: "gender",
                    title: "What gender do you identify as?",
                    choices: [
                        "Male", "Female", "Other",
                    ],
                }
            ]
        },  {
            questions: [
                {
                    type: "radiogroup",
                    name: "employmentStatus",
                    title: "What is your employment status?",
                    choices: [
                        "Employed", "Unemployed", "Other",
                    ],
                }
            ]
        },  {
            questions: [
                {
                    type: "radiogroup",
                    name: "maritalStatus",
                    title: "What is your marital status?",
                    choices: [
                        "Single", "Married", "Divorced", "Widowed"
                    ],
                }
            ]
        }, {
            questions: [
                {
                
                        name: "amountOfChildren",
                        type: "text",
                        title: "How many children do you have?",
                        isRequired: true
                
                }
            ]
        }, {
            questions: [
                {
                    type: "rating",
                    name: "satisfaction",
                    title: "How satisfied are you with the Product?",
                    minRateDescription: "Not Satisfied",
                    maxRateDescription: "Completely satisfied"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "followUp",
                    title: "May we contact you to follow up on these responses?",
                    choices: [
                        "Yes", "No"
                    ],
                }
            ]
        }, {
            questions: [
                {
                    name: "email",
                    type: "text",
                    inputType: "email",
                    title: "Your e-mail:",
                    placeHolder: "jon.snow@nightwatch.org",
                    isRequired: true,
                    validators: [
                        {
                            type: "email"
                        }
                    ]
                }
            ]
        }, 
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .location = "indexthanks.html";
    });

$("#surveyElement").Survey({ model: survey });