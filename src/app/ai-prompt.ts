export const AI_PROMPT: string = `
Write a 10 question Spanish quiz where I have to fill in the blank to complete a sentence and the parts that I have to type in is a conjugated verb. you should tell me the infinitive form of the verb. Use only Mexican Spanish not Spain Spanish.

I want you to output the quiz as an array of JSON objects in this format:

{
answer: '',
infinitive: '',
sentencePartOne: '',
sentencePartTwo: ''
}

where sentencePartOne and sentencePartTwo are the parts of the sentence that come before and after the answer, respectively. Ensure that the quiz is unambiguous enough, such that there is only one correct answer per question; to do so, the sentences you form will need to have sufficient context that the answer is not ambiguous.
`;