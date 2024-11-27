        const riddles = [
            { 
                question: "What has to be broken before you can use it?", 
                answer: "egg" 
            },
            { 
                question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", 
                answer: "candle" 
            },
            { 
                question: "What month of the year has 28 days?", 
                answer: "all" 
            }
        ];

        let score = 0;

        for (let i = 0; i < riddles.length; i++) {

            let userAnswer = prompt(riddles[i].question).toLowerCase();

            if (userAnswer === riddles[i].answer) {
                alert("Correct! 🎉");
                score++;
            } else {
                alert(`Wrong! The correct answer is: ${riddles[i].answer}`);
            }
        }

        alert(`Game Over! Your final score is: ${score}/${riddles.length}`);