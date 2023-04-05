const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function main() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Best restaurant in Palermo, Argentina",
        max_tokens: 250,
        temperature: 0,
      });
    
    const completion = response.data.choices[0].text;
    console.log(completion);
}

main();