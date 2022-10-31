/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */

const storySection = document.getElementById('completed-story');
const parseStory = (event)=> {
  event.preventDefault();/*pevent to reloading page*/
const form = new FormData(event.target);
const userSubmission = Object.fromEntries(form);

  const story = `<h3>Your completed story :</h3>
  <p>Today I went to the zoo. I saw a<span class="inserted-text">${userSubmission.adjective}</span>
  <span class="inserted-text">${userSubmission.noun}</span> jumping up and down in its tree.
  He <span class="inserted-text">${userSubmission.verb}</span><span class="inserted-text">${userSubmission.adverb}</span>
  through the large tunnel that led to its <span class="inserted-text">${userSubmission.adjective}</span>
  <span class="inserted-text">${userSubmission.noun}</span>. I got some peanuts and passed
  them through the cage to a gigantic gray <span class="inserted-text">${userSubmission.noun}</span>
  towering above my head. Feeding that animal made
  me hungry. I went to get a <span class="inserted-text">${userSubmission.adjective}</span> scoop
  of ice cream. It filled my stomach. Afterwards I had to
  <span class="inserted-text">${userSubmission.verb}</span><span class="inserted-text">${userSubmission.adverb}</span>  to catch our bus.
  When I got home I <span class="inserted-text">${userSubmission.verb}</span> my
  mom for a <span class="inserted-text">${userSubmission.adjective}</span> day at the zoo.</p>`;
   
  storySection.innerHTML += story;
  storySection.classList.remove('hide')
  //storySection.innerHTML +=story  //equal itself and whatever the story is
 // storySection.classList.remove('hide')
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * NOTE: You should not be writing any code in the global namespace EXCEPT
 * declaring functions. All code should either:
 * 1. Be in a function.
 * 2. Be in .then() below.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
/*getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
  });*/
