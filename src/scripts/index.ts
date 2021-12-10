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

  const inactiveCn =
    'bg-purple-200 text-purple-500 hover:bg-purple-300 hover:text-purple-700'.split(
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
          'flex justify-left items-center px-4 py-2 text-left text-lg uppercase font-display font-bold text-yellow-900 hover:text-yellow-1000 before:transition before:ease-in-out before:duration-500 active:scale-95 hover:before:block hover:before:absolute hover:before:-left-10 hover:before:-right-1  hover:before:-inset-y-1 hover:before:-skew-y-1 hover:before:bg-yellow-200 hover:before:-z-10 z-0 relative',
      })
    );
  });

  const activeTopic = topics[state.topicIndex];
  descriptionContainer.appendChild(
    $('p', [activeTopic.desc], { class: 'mb-4 animate-fadeIn' })
  );

  if (activeTopic.listItems) {
    const liElements = activeTopic.listItems.map((item) =>
      $('li', [item], { class: 'mb-2' })
    );

    descriptionContainer.appendChild(
      $('ul', liElements, { class: 'list-disc list-inside' })
    );
  }
};

window.addEventListener('DOMContentLoaded', () => render(state));
