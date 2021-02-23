import Result from "../components/Result";

async function getQuestions() {
  const request = await fetch("/endpoint")
  const response = await request.json()
  return response;
}

export default (n = 10) =>
Promise.resolve(getQuestions()
.then(r => r.sort(
      () => 0.5 - Math.random())
      .slice(0, 10)));
