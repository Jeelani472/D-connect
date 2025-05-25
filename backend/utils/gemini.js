const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.analyzeDonationUrgency = async (description) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const prompt = `Categorize the urgency of this donation description as 'high', 'medium', or 'low': ${description}`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text.toLowerCase().includes('high') ? 'high' : text.toLowerCase().includes('medium') ? 'medium' : 'low';
};

exports.translateDonationText = async (text, targetLang) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = `Translate "${text}" to ${targetLang}`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
};
