export const initialState: State = {
  topicFilter: 'businessOwner',
  topicIndex: 0,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'CHOOSE_TOPIC':
      return {
        ...state,
        topicIndex: action.index,
      };

    case 'CHOOSE_TOPIC_FILTER':
      return {
        ...state,
        topicFilter: action.filter,
        topicIndex: 0,
      };
  }
};

export interface State {
  topicFilter: TopicFilter;
  topicIndex: number;
}

type TopicFilter = 'businessOwner' | 'employeeOrContractor';

type Action =
  | { type: 'CHOOSE_TOPIC'; index: number }
  | { type: 'CHOOSE_TOPIC_FILTER'; filter: TopicFilter };
