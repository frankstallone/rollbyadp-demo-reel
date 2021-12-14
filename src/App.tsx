import { useReducer } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { initialState, reducer } from './state';
import { businessOwnerTopics, employeeOrContractorTopics } from './data';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const topics =
    state.topicFilter === 'businessOwner'
      ? businessOwnerTopics
      : employeeOrContractorTopics;

  const activeTopic = topics[state.topicIndex];

  // 50 / 50 coin flip to determine the skew direction
  const coinFlip = Math.random() < 0.5;
  const activeButtonCn = cn([
    'before:block',
    'before:absolute',
    'before:-left-10',
    'before:-right-1',
    'before:-inset-y-1',
    coinFlip ? 'before:-skew-y-1' : 'before:skew-y-1',
    'before:bg-marketing-button-bg',
    'hover:before:bg-marketing-button-bg-hover',
    'before:-z-10',
    'text-marketing-button-text',
    'no-underline',
    'hover:no-underline',
  ]);

  return (
    <div className="text-marketing-text bg-marketing-bg w-full relative z-10 min-h-screen hidden md:block py-14">
      <div className="flex mx-auto lg:py-10 px-[15px] max-w-[1160px] justify-center flex-col">
        <h1 className="font-display font-extrabold text-4xl mb-14 text-center">
          Roll Highlight Reel
        </h1>

        <ul className="list-none flex mb-14 mx-auto">
          <li>
            <button
              onClick={() =>
                dispatch({
                  type: 'CHOOSE_TOPIC_FILTER',
                  filter: 'businessOwner',
                })
              }
              className={cn([
                topicFilterButtonCn,
                'rounded-l-full',
                {
                  'bg-purple-700 text-purple-100 hover:bg-purple-800':
                    state.topicFilter === 'businessOwner',
                  'bg-white text-purple-500 hover:bg-purple-100 hover:text-purple-700':
                    state.topicFilter !== 'businessOwner',
                },
              ])}
            >
              Business owner
            </button>
          </li>

          <li>
            <button
              onClick={() =>
                dispatch({
                  type: 'CHOOSE_TOPIC_FILTER',
                  filter: 'employeeOrContractor',
                })
              }
              className={cn([
                topicFilterButtonCn,
                'rounded-r-full',
                {
                  'bg-purple-700 text-purple-100 hover:bg-purple-800':
                    state.topicFilter === 'employeeOrContractor',
                  'bg-white text-purple-500 hover:bg-purple-100 hover:text-purple-700':
                    state.topicFilter !== 'employeeOrContractor',
                },
              ])}
            >
              Employee
            </button>
          </li>
        </ul>

        <div className="grid grid-rows-1 grid-cols-3 font-medium">
          <aside className="flex items-center">
            <div className="bg-white w-full lg:h-[65%] h-[90%] rounded-l-current py-8 px-4">
              {topics.map((topic, index) => {
                return (
                  <button
                    key={topic.title}
                    name="payroll"
                    onClick={() => dispatch({ type: 'CHOOSE_TOPIC', index })}
                    className={cn([
                      // highlight the active button
                      { [activeButtonCn]: index === state.topicIndex },

                      'flex',
                      'justify-left',
                      'items-center',
                      'px-4',
                      'py-2',
                      'mb-4',
                      'text-left',
                      'lg:text-lg',
                      'uppercase',
                      'font-display',
                      'font-bold',
                      'before:transition',
                      'before:ease-in-out',
                      'before:duration-500',
                      'active:scale-95',
                      'z-0 relative',
                      'decoration-transparent',
                      'underline',
                      'decoration-4',
                      'underline-offset-1',
                      'hover:underline',
                      'hover:underline-offset-1',
                      'hover:decoration-4',
                      'hover:decoration-marketing-button-text',
                      'transition-all',
                      'ease-in-out',
                    ])}
                  >
                    {topic.title}
                  </button>
                );
              })}
            </div>
          </aside>

          <main className="rounded-current overflow-hidden border-10 border-purple-1000 bg-purple-1000 z-0">
            <video controls>
              <source src="roll-payrollPrep-push-run.mp4" type="video/mp4" />
            </video>
          </main>

          <aside className="flex items-center">
            <div className="bg-white w-full lg:h-[65%] h-[90%] rounded-r-current py-8 px-8 lg:text-lg font-normal font-display overflow-hidden">
              <motion.div
                key={activeTopic.desc}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
              >
                <p className="mb-4">{activeTopic.desc}</p>

                {activeTopic.listItems && (
                  <ul className="list-disc list-inside">
                    {activeTopic.listItems.map((item) => (
                      <li className="mb-2" key={item}>
                        {parseShortcodes(item)}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </aside>
        </div>
      </div>
      <svg
        width="994.5px"
        height="898.5px"
        viewBox="0 0 1989 1797"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 text-[#3fd4fe]"
      >
        <g transform="matrix(1,0,0,1,-405,-97)">
          <g transform="matrix(1.62604,0,0,1.62604,-367.367,-834.719)">
            <path
              d="M475,1241.5C475,933.539 826.867,1066.62 1038,931C1215.25,817.146 1187.17,573 1301,573C1410,573 1698,745 1698,1027C1698,1309 1529,1678 1247,1678C939.039,1678 475,1549.46 475,1241.5Z"
              fill='currentColor'
            />
          </g>
        </g>
      </svg>
      {/* <svg
        width="1090px"
        height="623px"
        viewBox="0 0 1090 623"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="absolute bottom-0 right-0 -z-10"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-510.000000, -5702.000000)" fill="#4300D5">
            <g id="BG" transform="translate(0.000000, 5325.000000)">
              <path
                d="M1794.16994,1392.44265 C1890.94179,1192.70023 1837.9438,1061.11366 1733.07273,975.794679 C1677.1792,930.319285 1603.27338,923.655377 1536.27887,902.052715 C1441.63786,871.533142 1356.59839,807.961261 1296.35188,722.694327 C1211.11436,602.052722 1164.09416,430.610681 1033.06873,378.262587 C993.21011,362.339027 949.357226,360.015985 906.957138,366.319852 C762.837715,387.748788 639.209196,508.63949 578.675786,654.820083 C518.142377,801.000675 514.196584,968.37452 540.896957,1124.50669 C557.171371,1219.67784 584.932103,1313.6038 634.088782,1393.33826 C745.151703,1573.48838 1010.29665,1696.81775 1210.09687,1695.13098 C1409.89707,1693.44738 1669.79585,1649.1613 1794.16994,1392.44265"
                id="ready_to_roll_bg_organic_shape_purple"
                transform="translate(1185.096817, 1029.111951) rotate(-255.000000) translate(-1185.096817, -1029.111951) "
              ></path>
            </g>
          </g>
        </g>
      </svg> */}
    </div>
  );
};

const topicFilterButtonCn = cn([
  'flex',
  'justify-center',
  'items-center',
  'p-4',
  'text-lg',
  'uppercase',
  'font-display',
  'font-medium',
  'w-full',
  'text-left',
  'transition-all',
  'ease-in-out',
  'duration-75',
  'px-8',
]);

const parseShortcodes = (desc: string) => {
  if (desc.includes('(i)')) {
    const [before, after] = desc.split('(i)');

    return (
      <>
        {before}
        {InfoIcon}
        {after}
      </>
    );
  }

  if (desc.includes('[help + headphones icon]')) {
    const [before, after] = desc.split('[help + headphones icon]');

    return (
      <>
        {before}
        <button className="border border-purple-500 rounded-full px-3 inline-flex items-center align-center justify-items-center">
          Help
          {HeadphonesIcon}
        </button>
        {after}
      </>
    );
  }

  return desc;
};

const InfoIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    className="w-6 inline"
  >
    <path
      fill="currentColor"
      d="M4.878,0.093c0.021-0.001,0.042-0.001,0.064,0c0.291-0.01,0.544,0.209,0.585,0.494
  c0.13,0.545-0.449,1.092-0.982,0.874C3.909,1.166,4.23,0.124,4.878,0.093z M4.616,2.467C5.029,2.44,5.101,2.92,4.972,3.408
  c-0.251,1.12-0.641,2.205-0.854,3.332c0.103,0.446,0.664-0.064,0.904-0.228c0.204-0.162,0.24,0.041,0.31,0.212
  c-0.51,0.357-1.022,0.721-1.59,1.009c-0.534,0.323-0.97-0.18-0.837-0.74c0.22-1.045,0.51-2.075,0.747-3.117
  c0.074-0.562-0.667,0.01-0.888,0.141C2.586,4.24,2.501,4.077,2.427,3.875C3.018,3.444,3.62,2.915,4.273,2.57
  C4.406,2.504,4.521,2.473,4.616,2.467z"
    />
  </svg>
);

const HeadphonesIcon = (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className="w-4 inline ml-2"
  >
    <g transform="matrix( 1, 0, 0, 1, 0,0)">
      <g>
        <path
          stroke="currentColor"
          d="M35.4,63c-1.4,0-2.5-0.5-3.5-1.4c-1-1-1.4-2.1-1.4-3.5c0-0.2,0-0.3,0-0.5c0.1-1.2,0.6-2.2,1.4-3
        c1-1,2.1-1.4,3.5-1.4s2.5,0.5,3.5,1.4c0.6,0.6,1,1.3,1.2,2h3c1.7,0,3.2-0.6,4.4-1.9c0.4-0.5,0.8-1,1.1-1.5
        c-0.6-0.3-1.2-0.7-1.8-1.2c-1-1-1.6-2.3-1.6-3.8v-15c0-1.5,0.5-2.8,1.6-3.8c1-1,2.3-1.6,3.8-1.6c1.5,0,2.8,0.5,3.8,1.6
        c0.7,0.7,1.2,1.5,1.4,2.4H57c0.3,0,0.6,0,0.8,0.1v-0.2c0-7.7-2.6-14.3-7.7-19.7c-5.5-5.5-11.5-8.1-18.6-8.1
        c-7.2,0-13.5,2.7-18.6,8.1C7.9,17.4,5.3,24,5.3,31.7V32c0.5-0.1,1.1-0.2,1.7-0.2h1.1c0.2-0.9,0.7-1.7,1.4-2.4c1-1,2.3-1.6,3.8-1.6
        c1.5,0,2.8,0.5,3.8,1.6c1.1,1,1.6,2.3,1.6,3.8v15c0,1.5-0.5,2.8-1.6,3.8c-1,1-2.3,1.6-3.8,1.6c-1.5,0-2.8-0.5-3.8-1.6
        c-0.8-0.8-1.3-1.7-1.5-2.7H7c-1.5,0-2.9-0.5-4-1.4c-0.2-0.1-0.3-0.3-0.5-0.4c-1.2-1.2-1.8-2.7-1.8-4.4v-4.9c0-1.7,0.6-3.2,1.8-4.4
        v-2C2.5,23.3,5.3,16,11,10c5.7-6,12.6-9,20.6-9c7.8,0,14.5,2.9,20.6,9c5.7,6,8.5,13.3,8.5,21.7v1.3c0.3,0.2,0.5,0.4,0.8,0.7
        c1.2,1.2,1.8,2.7,1.8,4.4V43c0,1.7-0.6,3.2-1.8,4.4c-0.5,0.5-1,0.9-1.6,1.2c-0.9,0.5-1.8,0.7-2.9,0.7H56c-0.2,1-0.7,1.9-1.5,2.7
        c-0.8,0.8-1.8,1.4-3,1.5c-0.4,1.1-1.1,2.2-2,3.1c-1.8,1.9-3.9,2.8-6.4,2.8h-3c-0.2,0.8-0.6,1.5-1.3,2.1C37.9,62.5,36.8,63,35.4,63
        z"
        />
      </g>
    </g>
  </svg>
);

export default App;
