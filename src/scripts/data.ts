interface Topic {
  title: string;
  desc: string;
  listItems?: string[];
}

export const businessOwnerTopics: Topic[] = [
  {
    title: 'Setting up your company',
    desc: 'The company setup should take 15 minutes or less. All you need to do is answer a few simple questions about your business, employees, compensation, and company bank account. That’s it! Nice and easy.',
  },
  {
    title: 'Running payroll',
    desc: 'If you have time to send a text message, you have time to run payroll! Just respond to a few quick questions, and in less than 60 seconds you’re done. Oh, and everyone’s paid tomorrow - not 4 days from now. How’s that for convenience?',
  },
  {
    title: 'Hiring an employee',
    desc: 'It couldn’t be easier to add someone to the payroll! All you need are these five things:',
    listItems: [
      'Legal name',
      'Home address',
      'Work location',
      'Phone number',
      'Email',
      'SSN or other taxpayer ID #',
    ],
  },
  {
    title: 'Adjusting a salary',
    desc: 'No forms to fill out. No waiting period. Just tell us what to pay them and when the change becomes effective, and Roll handles the rest!',
  },
  {
    title: 'Getting help',
    desc: 'If you ever get stuck or have questions, there are three easy ways to get help:',
    listItems: [
      'Type “Help” to watch our intro video or see a list of tasks you can start in chat.',
      'Tap (i) anytime you see the icon in a conversation to learn more about a certain question or topic.',
      "Tap [help + headphones icon] to start a live chat with our support team. They're here to assist you 24/7!",
    ],
  },
];

export const employeeOrContractorTopics: Topic[] = [
  {
    title: 'Registering for Roll',
    desc: 'You’ll receive an email from your employer inviting you to join Roll. Just download the app, sign in - and voila - you’re instantly linked with your company!',
  },
  {
    title: 'Viewing your pay statements',
    desc: 'You can either ask to see your paychecks in chat, or go to your timeline and look for the payday notification. You can even download and print them.',
  },
  {
    title: 'Updating your direct deposit',
    desc: 'Whether you need to add, update, or remove a bank account, Roll chats you through each step!',
  },
  {
    title: 'Updating your taxes',
    desc: 'Roll automates your tax calculations, giving you the ability to change your withholdings anytime, from anywhere!',
  },
  {
    title: 'Viewing your profile',
    desc: 'Find everything related to your job, pay, benefits, and more with a single tap on the “People” tab.',
  },
];
