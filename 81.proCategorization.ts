// Given a list of pros and their category preferences, return the list of pros for each category.

function proCategorization(
  pros: string[],
  preferences: string[]
): string[][][] {
  let prosPreference = {};
  let prosPrefs = [];

  for (let i = 0; i < pros.length; i++) {
    for (let j = 0; j < preferences[i].length; j++) {
      if (prosPreference.hasOwnProperty(preferences[i][j])) {
        prosPreference[preferences[i][j]].push(pros[i]);
      } else {
        prosPreference[preferences[i][j]] = [pros[i]];
      }
    }
  }

  for (const prop in prosPreference) {
    prosPrefs.push([[prop], [...prosPreference[prop]]]);
  }

  prosPrefs = prosPrefs.sort((pref1, pref2) => {
    const pref1Lower = pref1[0][0].toLowerCase();
    const pref2Lower = pref2[0][0].toLowerCase();

    if (pref1Lower > pref2Lower) {
      return 1;
    }

    if (pref1Lower < pref2Lower) {
      return -1;
    }

    return 0;
  });

  return prosPrefs;
}

console.log(
  proCategorization(
    ['Jack', 'Leon', 'Maria'],
    [
      ['Computer repair', 'Handyman', 'House cleaning'],
      ['Computer lessons', 'Computer repair', 'Data recovery service'],
      ['Computer lessons', 'House cleaning'],
    ]
  )
);
