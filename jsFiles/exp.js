

const exp = (function() {


    var p = {};


   /*
    *
    *   INSTRUCTIONS
    *
    */

    const html = {
        intro: [
            `<div class='parent' style="text-align: left">
                <p><strong>Welcome to Spin the Wheel!</strong></p>
                <p>In Spin the Wheel, you'll spin a series of prize wheels.</p>
                <p>Each time you spin a prize wheel, you'll earn points.
                The number of points you earn depends on where the wheel lands.</p>
                <p>Your goal is to earn as many points as possible by spinning the prize wheels!</p>
            </div>`,

            `<div class='parent'>
                <p>To spin a prize wheel, just grab it with your cursor and give it a spin!
                <br>Watch the animation below to see how it's done.</p>
                <img src="./img/spinGif.gif" style="width:60%; height:60%">
            </div>`,

            `<div class='parent' style="text-align: left">
                <p>Throughout Spin the Wheel, you'll answer questions about your feelings.</p>
                <p>Specifically, you'll report how <b>immersed</b>, <b>aroused</b>, and <b>positive or negative</b> you feel after spinning each wheel.
                To learn more, continue to the next screen.</p>
            </div>`,

            `<div class='parent' style="text-align: left">
                <p><b>Positivity</b> has to do with how good, or pleasant, a person feels.
                Conversely, <b>negativity</b> has to do with how bad, or unpleasant, a person feels.</p>
                <p>After each wheel, we'll ask you how positive or negative you feel.</p>
            </div>`,      

            `<div class='parent' style="text-align: left">
                <p><b>Arousal</b> has to do with how energized or activated a person feels, independent of positivity/negativity.</p>
                <p>The lowest level of arousal corresponds to feelings of sleepiness and extreme calm; the highest level of arousal corresponds to feelings of manic energy and extreme stimulation.
                People can experience anything from complete calm to extreme arousal regardless of how positive or negative they feel.</p>
                <p>After each wheel, we'll ask you how aroused you feel.</p>
            </div>`,

            `<div class='parent' style="text-align: left">
                <p><b>Immersion</b> has to do with how absorbed or "in the zone" a person feels, independent of arousal and positivity/negativity.
                <p>At the lowest level of immersion, people feel totally disconnected and "zoned out" from what they're doing; at the highest level of immersion, people get so "lost" in what they're doing that time seems to stop and everything but their task seems to melt away.
                People can experience anything from complete immersion to no immersion at all regardless of whether they feel positive or negative, aroused or calm.</p>
                <p>After spinning each wheel, we'll you how <b>immersed</b> you felt in what you were doing.</p>
            </div>`,

            `<div class='parent' style="text-align: left">
                <p>You're ready to start playing Spin the Wheel!</p>
                <p>Continue to the next screen to begin.</p>
            </div>`,      
        ],

        postTask: [
            `<div class='parent' style="text-align: left">
                <p>Spin the Wheel is now complete!</p>
                <p>To finish this study, please continue to answer a few final questions.</p>
            </div>`
        ],
    };

    p.consent = {
        type: jsPsychExternalHtml,
        url: "./html/consent.html",
        cont_btn: "advance",
    };

    p.intro = {
        type: jsPsychInstructions,
        pages: html.intro,
        show_clickable_nav: true,
        post_trial_gap: 500,
    };

    
   /*
    *
    *   TASK
    *
    */


    // define each wedge
    const wedges = {
        one: {color:"#fe0000", label:"1"},
        two: {color:"#800001", label:"2"},
        three: {color:"#fe6a00", label:"3"},
        four: {color:"#803400", label:"4"},
        five: {color:"#ffd800", label:"5"},
        six: {color:"#806b00", label:"6"},
        seven: {color:"#00fe21", label:"7"},
        eight: {color:"#007f0e", label:"8"},
        nine: {color:"#0094fe", label:"9"},
        ten: {color:"#00497e", label:"10"},
        eleven: {color:"#0026ff", label:"11"},
        twelve: {color:"#001280", label:"12"},
        thirteen: {color:"#b100fe", label:"13"},
    };


    // define each wheel
    const wheels = [

        /*  1 1 1 1
            3 4 5 6    ev = 4.5; v = 1.67
            7 8 9 10   ev = 8.5; v = 1.67
            1 3 6 8    ev = 4.5; v = 9.67
            5 7 10 12  ev = 8.5; v = 9.67
        */
            {sectors: [ wedges.three, wedges.four, wedges.five, wedges.six ], ev: 4.5, var: 1.67, arrangement: 1111},
            {sectors: [ wedges.seven, wedges.eight, wedges.nine, wedges.ten ], ev: 8.5, var: 1.67, arrangement: 1111},
            {sectors: [ wedges.one, wedges.three, wedges.six, wedges.eight ], ev: 4.5, var: 9.67, arrangement: 1111},
            {sectors: [ wedges.five, wedges.seven, wedges.ten, wedges.twelve ], ev: 8.5, var: 9.67, arrangement: 1111},

        /*  2 1 1 
            3 3 5 7     ev = 4.5; v = 2.25
            7 7 9 11    ev = 8.5; v = 2.25
            2 2 6 8     ev = 4.5; v = 9
            6 6 10 12    ev = 8.5; v = 9
        */
            {sectors: [ wedges.three, wedges.three, wedges.five, wedges.seven ], ev: 4.5, var: 3.67, arrangement: 211},
            {sectors: [ wedges.seven, wedges.seven, wedges.nine, wedges.eleven ], ev: 8.5, var: 3.67, arrangement: 211},
            {sectors: [ wedges.two, wedges.two, wedges.six, wedges.eight ], ev: 4.5, var: 9, arrangement: 211},
            {sectors: [ wedges.six, wedges.six, wedges.ten, wedges.twelve ], ev: 8.5, var: 9, arrangement: 211},

        /*  2 2
            3 3 6 6    ev = 4.5; v = 3
            7 7 10 10  ev = 8.5; v = 3
            2 2 7 7    ev = 4.5; v = 8.33
            6 6 11 11  ev = 4.5; v = 8.33
        */
            {sectors: [ wedges.three, wedges.three, wedges.six, wedges.six ], ev: 4.5, var: 3, arrangement: 22},
            {sectors: [ wedges.seven, wedges.seven, wedges.ten, wedges.ten ], ev: 8.5, var: 3, arrangement: 22},
            {sectors: [ wedges.two, wedges.two, wedges.seven, wedges.seven ], ev: 4.5, var: 8.33, arrangement: 22},
            {sectors: [ wedges.six, wedges.six, wedges.eleven, wedges.eleven ], ev: 8.5, var: 8.33, arrangement: 22},

        /*  3 1
            4 4 4 6    ev = 4.5; v = 1
            8 8 8 10   ev = 8.5; v = 1
            3 3 3 9    ev = 4.5; v = 9
            7 7 7 13   ev = 8.5; v = 9
        */
            {sectors: [ wedges.four, wedges.four, wedges.four, wedges.six ], ev: 4.5, var: 1, arrangement: 31},
            {sectors: [ wedges.eight, wedges.eight, wedges.eight, wedges.ten ], ev: 8.5, var: 1, arrangement: 31},
            {sectors: [ wedges.three, wedges.three, wedges.three, wedges.nine ], ev: 4.5, var: 9, arrangement: 31},
            {sectors: [ wedges.seven, wedges.seven, wedges.seven, wedges.thirteen ], ev: 8.5, var: 9, arrangement: 31},

        /*  4
            5 5 5 5 5   ev = 5; v = 0
            9 9 9 9 9   ev = 9; v = 0
        */
            {sectors: [ wedges.four, wedges.four, wedges.four, wedges.four ], ev: 4, var: 0, arrangement: 4},
            {sectors: [ wedges.nine, wedges.nine, wedges.nine, wedges.nine ], ev: 9, var: 0, arrangement: 4},
        ];

    let scoreTracker = 0; // track current score

    let round = 1;  // track current round

    // trial: spinner
    const spin = {
        type: jsPsychCanvasButtonResponse,
        stimulus: function(c, spinnerData) {
            createSpinner(c, spinnerData, scoreTracker, jsPsych.timelineVariable('sectors'));
        },
        canvas_size: [500, 500],
        score: function() {
            return scoreTracker
        },
        post_trial_gap: 1000,
        data: {ev: jsPsych.timelineVariable('ev'), var: jsPsych.timelineVariable('var'), arrangement: jsPsych.timelineVariable('arrangement')},
        on_finish: function(data) {
            data.round = round;
            scoreTracker = data.score
        }
    };

    // trial: flow DV
    const valenceMeasure = {
        type: jsPsychSurveyLikert,
        questions: [
            {prompt: `<p>While spinning the last wheel, how <b>positive or negative</b> did you feel?</p>`,
            name: `valence`,
            labels: ['-4<br>Extremely negative', '-3', '-2', '-1', '0<br>Neither positive nor negative', '1', '2', '3', '4<br>Extremely positive']},
        ],
        randomize_question_order: false,
        scale_width: 600,
        data: {ev: jsPsych.timelineVariable('ev'), var: jsPsych.timelineVariable('var'), arrangement: jsPsych.timelineVariable('arrangement')},
        on_finish: function(data) {
            data.round = round;
            let scoreArray = jsPsych.data.get().select('score').values;
            let outcomesArray = jsPsych.data.get().select('outcomes').values;
            data.score = scoreArray[scoreArray.length - 1];
            data.outcomes = outcomesArray[outcomesArray.length - 1];
            saveSurveyData(data);
        }
    };

    // trial: happiness DV
    const arousalMeasure = {
        type: jsPsychSurveyLikert,
        questions: [
            {prompt: `<p>While spinning the last wheel, how <b>aroused</b> did you feel?</p>
            <p>Arousal has to do with how energized or activated a person feels, independent of positivity/negativity.
            The lowest level of arousal corresponds to feelings of sleepiness and extreme calm; the highest level of arousal corresponds to feelings of manic energy and extreme stimulation.
            People can experience anything from complete calm to extreme arousal regardless of how positive or negative they feel.</p>
            <p>Please report how <b>aroused</b> you felt while spinning the last wheel.</p>`,
            name: `arousal`,
            labels: ['-4<br>Extremely calm', '-3', '-2', '-1', '0<br>Neither calm not aroused', '1', '2', '3', '4<br>Extremely aroused']},
        ],
        randomize_question_order: false,
        scale_width: 600,
        data: {ev: jsPsych.timelineVariable('ev'), var: jsPsych.timelineVariable('var'), arrangement: jsPsych.timelineVariable('arrangement')},
        on_finish: function(data) {
            data.round = round;
            let scoreArray = jsPsych.data.get().select('score').values;
            let outcomesArray = jsPsych.data.get().select('outcomes').values;
            data.score = scoreArray[scoreArray.length - 1];
            data.outcomes = outcomesArray[outcomesArray.length - 1];
            saveSurveyData(data);
        }
    };

     const flowMeasure = {
        type: jsPsychSurveyLikert,
        questions: [
            {prompt: `<p>While spinning the last wheel, how <b>immersed</b> did you feel in what you were doing?</p>
            <p>Immersion has to do with how absorbed or "in the zone" a person feels, independent of arousal and positivity/negativity.
            At the lowest level of immersion, people feel totally disconnected and "zoned out" from what they're doing; at the highest level of immersion, people get so "lost" in what they're doing that time seems to stop and everything but their task seems to melt away. 
            People can experience anything from complete immersion to no immersion at all regardless of whether they feel positive or negative, aroused or calm.</p>
            <p>Please report how <b>immersed</b> you felt in the activity of spinning the last wheel.</p>`,
            name: `flow`,
            labels: ['0<br>Not at all immersed', '1', '2', '3', '4', '5', '6', '7', '8<br>Completely immersed']},
        ],
        randomize_question_order: false,
        scale_width: 600,
        data: {ev: jsPsych.timelineVariable('ev'), var: jsPsych.timelineVariable('var'), arrangement: jsPsych.timelineVariable('arrangement')},
        on_finish: function(data) {
            data.round = round;
            let scoreArray = jsPsych.data.get().select('score').values;
            let outcomesArray = jsPsych.data.get().select('outcomes').values;
            data.score = scoreArray[scoreArray.length - 1];
            data.outcomes = outcomesArray[outcomesArray.length - 1];
            saveSurveyData(data);
        }
    };

    // timeline: main task
    p.task = {
        timeline: [spin, valenceMeasure, arousalMeasure, flowMeasure],
        repetitions: 1,
        timeline_variables: wheels,
        randomize_order: true,
    };

   /*
    *
    *   Demographics
    *
    */

    p.demographics = (function() {


        const taskComplete = {
            type: jsPsychInstructions,
            pages: html.postTask,
            show_clickable_nav: true,
            post_trial_gap: 500,
        };

        const genFlowScale = ['-2<br>Totally<br>Disagree', '-1<br>Disagree', '0<br>Neither agree<br>nor disagree', '1<br>Agree', '2<br>Totally<br>Agree'];

        const flowGenQuestions = {
            type: jsPsychSurveyLikert,
            preamble:
                `<div style='padding-top: 50px; width: 900px; font-size:16px'>
                    <p>Please express the extent to which you disagree or agree with each statement.</p>
                </div>`,
            questions: [
                {
                    prompt: `I enjoy challenging tasks/activities that require a lot of focus.`,
                    name: `genFlow_1`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `When I am focused on a task/activity, I quickly tend to forget my surroundings (other people, time, and place).`,
                    name: `genFlow_2`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `I usually experience a good flow when I do something (things that are neither too easy nor too difficult for me).`,
                    name: `genFlow_3`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `I have several different areas of interest.`,
                    name: `genFlow_4`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `It is difficult for me to walk away from or quit a project I am currently working on.`,
                    name: `genFlow_5`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `I become stressed in the face of difficult/challenging tasks.`,
                    name: `genFlow_6r`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `It is difficult for me to maintain concentration over time.`,
                    name: `genFlow_7r`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `I quickly become tired of the things I do.`,
                    name: `genFlow_8r`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `I am usually satisfied with the results of my efforts across various tasks (I experience feelings of mastery).`,
                    name: `genFlow_9`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `When I focus on something, I often forget to take a break.`,
                    name: `genFlow_10`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `I get bored easily.`,
                    name: `genFlow_11r`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `My daily tasks are exhausting rather than stimulating.`,
                    name: `genFlow_12r`,
                    labels: genFlowScale,
                    required: true,
                },
                {
                    prompt: `I develop an interest for most of the things I do in life.`,
                    name: `genFlow_13`,
                    labels: genFlowScale,
                    required: true,
                },
            ],
            randomize_question_order: false,
            scale_width: 500,
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        };

        const gender = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>What is your gender?</p>',
            choices: ['Male', 'Female', 'Other'],
            on_finish: (data) => {
                data.gender = data.response;
            }
        };

        const age = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Age:", name: "age"}],
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        }; 

        const ethnicity = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>What is your race?</p>',
            choices: ['White / Caucasian', 'Black / African American','Asian / Pacific Islander', 'Hispanic', 'Native American', 'Other'],
            on_finish: (data) => {
                data.ethnicity = data.response;
            }
        };

        const english = {
            type: jsPsychHtmlButtonResponse,
            stimulus: '<p>Is English your native language?:</p>',
            choices: ['Yes', 'No'],
            on_finish: (data) => {
                data.english = data.response;
            }
        };  

        const finalWord = {
            type: jsPsychSurveyText,
            questions: [{prompt: "Questions? Comments? Complains? Provide your feedback here!", rows: 10, columns: 100, name: "finalWord"}],
            on_finish: (data) => {
                saveSurveyData(data); 
            },
        }; 

        const demos = {
            timeline: [taskComplete, flowGenQuestions, gender, age, ethnicity, english, finalWord]
        };

        return demos;

    }());


   /*
    *
    *   SAVE DATA
    *
    */

    p.save_data = {
        type: jsPsychPipe,
        action: "save",
        experiment_id: "wBFwbVxNLhxh",
        filename: filename,
        data_string: ()=>jsPsych.data.get().csv()
    };

    return p;

}());

const timeline = [exp.consent, exp.intro, exp.task, exp.demographics, exp.save_data];

jsPsych.run(timeline);
