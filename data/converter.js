export default function calculate() {
  let rounds = 8;
  let oldMerit = JSON.parse(this.state.merit);

  let meritResults = Object.keys(oldMerit).map((k, i) => {
    let player = oldMerit[k];
    let merit = [player.rank, player.name.en];

    for (let i = 0; i < rounds; i++) {
      merit.push(player.results[i] ? player.results[i] : 0);
    }

    merit.push(player.points);

    return merit;
  });

  console.log(JSON.stringify(meritResults));
}
