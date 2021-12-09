import '../styles/main.css';
import '../styles/specter.css';
import { businessOwnerTopics, employeeOrContractorTopics } from './data';
import { find, $ } from './dom';
import { state, State, Action, reducer } from './state';

const render = (state: State) => {
  const topicsContainer = find('#topics-container');
  const descriptionContainer = find('#description-container');
  const businessOwnerButton = find('#business-owner');
  const employeeButton = find('#employee');
  const dispatch = (action: Action) => {
    // re-render UI with latest state
    render(reducer(state, action));
  };

  if (
    !topicsContainer ||
    !descriptionContainer ||
    !businessOwnerButton ||
    !employeeButton
  ) {
    return;
  }

  businessOwnerButton.addEventListener(
    'click',
    () => {
      dispatch({
        type: 'CHOOSE_TOPIC_FILTER',
        filter: 'businessOwner',
      });
    },
    { once: true }
  );

  employeeButton.addEventListener(
    'click',
    () => {
      console.log('you clicked me');
      dispatch({
        type: 'CHOOSE_TOPIC_FILTER',
        filter: 'employeeOrContractor',
      });
    },
    { once: true }
  );

  const activeCn = 'bg-purple-700 text-purple-100 hover:bg-purple-800'.split(
    ' '
  );

  const inactiveCn = 'bg-purple-200 text-purple-1000 hover:bg-purple-300'.split(
    ' '
  );

  if (state.topicFilter === 'businessOwner') {
    businessOwnerButton.classList.remove(...inactiveCn);
    businessOwnerButton.classList.add(...activeCn);

    employeeButton.classList.remove(...activeCn);
    employeeButton.classList.add(...inactiveCn);
  } else {
    employeeButton.classList.remove(...inactiveCn);
    employeeButton.classList.add(...activeCn);

    businessOwnerButton.classList.remove(...activeCn);
    businessOwnerButton.classList.add(...inactiveCn);
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
          'flex justify-center items-center p-4 rounded-full text-lg uppercase font-display font-medium w-full text-center bg-purple-700 text-purple-100 hover:bg-purple-800 transition-all ease-in-out duration-75 active:scale-95',
      })
    );
  });

  const activeTopic = topics[state.topicIndex];
  descriptionContainer.appendChild($('p', [activeTopic.desc]));

  if (activeTopic.listItems) {
    const liElements = activeTopic.listItems.map((item) => $('li', [item]));

    descriptionContainer.appendChild(
      $('ul', liElements, { class: 'list-disc list-inside' })
    );
  }
};

window.addEventListener('DOMContentLoaded', () => render(state));
