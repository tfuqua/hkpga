export const userFields = {
  pros: [
    { id: 2, name: 'All', status: 4 },
    { id: 3, name: 'Qualified Professionals', status: 3 },
    { id: 4, name: 'Certified Instructors', status: 2 },
    { id: 5, name: 'Trainees', status: 1 }
  ],
  committee: [
    { value: false, name: 'No' },
    { value: 'CHAIRPERSON', name: 'Chairman' },
    { value: 'VICECHAIRPERSON', name: 'Vice Chairman' },
    { value: 'CAPTAINOPEN', name: 'Captain Open' },
    { value: 'VICECAPTAINOPEN', name: 'Vice Captain Open' },
    { value: 'CAPTAINSENIOR', name: 'Senior Captain' },
    { value: 'VICECAPTAINSENIOR', name: 'Vice Senior Captain' },
    { value: 'CAPTAINLADIES', name: 'Ladies Captain' },
    { value: 'VICECAPTAINLADIES', name: 'Vice Ladies Captain' },
    { value: 'COMMITTEE', name: 'Committee' },
    { value: 'TREASURER', name: 'Honorary Treasurer' }
  ],
  honorary: [
    { value: false, name: 'No' },
    { value: 'FOUNDER', name: 'Founder' },
    { value: 'PERMANENTHONORARYPRESIDENT', name: 'Permanent Honorary President' },
    { value: 'HONORARYPRESIDENT', name: 'Honorary President' },
    { value: 'HONORARYVICEPRESIDENT', name: 'Honorary Vice President' },
    { value: 'LEGALADVISOR', name: 'Legal Advisor' },
    { value: 'ADVISOR', name: 'Advisor' },
    { value: 'ADVISORCONSTITUTION', name: 'Advisor Constitution' },
    { value: 'HONORARYMEMBER', name: 'Honorary Member' },
    { value: 'FOUNDERMEMBER', name: 'Founder Member' }
  ],
  roles: [
    { value: 'admin', name: 'Admin' },
    { value: 'member', name: 'Member' },
    { value: 'user', name: 'User' },
    { value: 'legacy', name: 'Legacy' }
  ],
  relations: [
    { value: 'full', name: 'Full Member' },
    { value: 'tournament', name: 'Tournament Member' },
    { value: 'associate', name: 'Associate Member' },
    { value: 'member', name: 'Member' },
    { value: 'trainer', name: 'Certified Trainer' },
    { value: 'trainee', name: 'Trainee' },
    { value: 'seniortrainee', name: 'Senior Division Trainee' },
    { value: 'honorary', name: 'Honorary' },
    { value: 'none', name: 'None' }
  ]
};

export const genders = [{ value: 'male', name: 'Male' }, { value: 'female', name: 'Female' }];
export const trueFalse = [{ value: false, name: 'False' }, { value: true, name: 'True' }];
export const pressOptions = [
  { value: 'releases', name: 'Press Release' },
  { value: 'magazine', name: 'Magazine' },
  { value: 'media', name: 'Media Coverage' }
];
export const playerStatus = [
  { value: 'signedup', name: 'Signed Up' },
  { value: 'registered', name: 'Registered' },
  { value: 'played', name: 'Played' },
  { value: 'retired', name: 'Retired' },
  { value: 'withdrawn', name: 'Withdrawn' },
  { value: 'missedcut', name: 'Missed Cut' },
  { value: 'disqualified', name: 'Disqualified' },
  { value: 'weathercancel', name: 'Weather Cancel' }
];

export const prosFilter = [
  { name: 'All', value: 4 },
  { name: 'Qualified Professionals', value: 3 },
  { name: 'Certified Instructors', value: 2 },
  { name: 'Trainees', value: 1 }
];

export const meritYears = createYears(2004);

export function createYears(start) {
  let years = [];
  for (let i = start; i <= new Date().getFullYear(); i++) {
    years.push({ value: i, name: i });
  }

  return years.reverse();
}

export const divisions = [
  { key: 'open', label: 'Open' },
  { key: 'ladies', label: 'Ladies' },
  { key: 'senior', label: 'Senior' },
  { key: 'super', label: 'Super Senior' },
  { key: 'trainee', label: 'Trainee' }
];
