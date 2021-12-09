import '../styles/main.css';
import '../styles/specter.css';
import { businessOwnerTopics, employeeOrContractorTopics } from './data';
import { find, $ } from './dom';
import { state, State, Action, reducer } from './state';

const render = (state: State) => {
  const topicsContainer = find('#topics-container');
  const descriptionContainer = find('#description-container');
  const dispatch = (action: Action) => {
    // re-render UI with latest state
    render(reducer(state, action));
  };

  if (!topicsContainer || !descriptionContainer) {
    return;
  }

  // Reset container contents before rendering
  topicsContainer.innerHTML = '';
  descriptionContainer.innerHTML = '';

  const topics =
    state.topicFilter === 'businessOwner'
      ? businessOwnerTopics
      : employeeOrContractorTopics;

  topics.forEach((topic, index) => {
    topicsContainer.appendChild(
      $('button', [topic.title], {
        onClick: () => dispatch({ type: 'CHOOSE_TOPIC', index }),
        name: 'payroll',
        class:
          'flex justify-center items-center p-4 border-b rounded-full text-lg uppercase font-display font-medium w-full text-left bg-purple-700 text-purple-100 hover:bg-purple-800 transition-all ease-in-out duration-75 active:scale-95',
      })
    );
  });

  const activeTopic = topics[state.topicIndex];
  descriptionContainer.appendChild($('p', [activeTopic.desc]));

  if (activeTopic.listItems) {
    const liElements = activeTopic.listItems.map((item) => $('li', [item]));

    descriptionContainer.appendChild($('ul', liElements));
  }
};

window.addEventListener('DOMContentLoaded', () => render(state));
