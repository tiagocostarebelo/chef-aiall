# Chef AiAll

Chef AiAll is a simple and interactive web app that lets users input ingredients they have on hand and receive a unique, AI-generated recipe using the Hugging Face API.

---

## Features

- Add ingredients one by one via a user-friendly input
- "Get Recipe" button appears after 3+ ingredients
- Sends ingredients and a hidden system prompt to Hugging Face
- Displays the generated recipe with support for markdown formatting

---

## Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Hugging Face Inference API](https://huggingface.co/inference-api)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- JavaScript (ES6+)

---

## Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/tiagocostarebelo/chef-aiall.git
cd chef-aiall
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a .env file in the root with your Hugging Face API key:

```bash
VITE_HF_ACCESS_TOKEN=your_huggingface_api_key_here
```

4. **Run the development server**

```bash
npm run dev
```

## Screenshots

Coming soon – deployment in progress.

## Example Use

- Type in your ingredients one by one
- Once you have 3 or more ingredients, the "Get Recipe" button will display
- See the AI generate a recipe like: “Spinach and Cheese Omelette”

## Intended Use
This project was built as a personal React learning exercise based on the Bob Ziroll React course, but is open for general use by anyone who enjoys experimenting in the kitchen or with AI-powered creativity.

## License
MIT