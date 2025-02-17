import HorseNames from "../samples/HorseNames.json";
import Colors from "../samples/Colors.json";
import _, { set } from "lodash";

const mutations = {
  GenerateHorses(state) {
    state.horseList = _.sampleSize(HorseNames, 20).map((name, index) => {
      return {
        id: index + 1,
        name: name,
        condition: _.random(1, 100),
        color: Colors[index],
      };
    });
  },
  GeneratePrograms(state) {
    const programs = [];
    for (let i = 0; i < 6; i++) {
      let program = _.sampleSize(state.horseList, 10);
      programs.push(program);
    }
    state.programList = programs;
  },
  SetIsRunning(state, value) {
    state.isRunning = value;
  },
  ReverseIsRunning(state) {
    state.isRunning = !state.isRunning;
  },
  SetCurrentProgram(state, value) {
    state.currentProgram = value;
  },
  IncrementCurrentProgram(state) {
    state.currentProgram++;
  },
  ResetResults(state) {
    state.resultList = [];
  },
  HorseFinished(state, value) {
    if (state.resultList[state.currentProgram] === undefined) {
      state.resultList[state.currentProgram] = [];
    }
    state.resultList[state.currentProgram].push(value);

    if (state.resultList[state.currentProgram].length === 10) {
      if (state.currentProgram === 5) {
        state.isRunning = false;
      } else {
        //Burada eğer turlar arasında beklenilmek isterse setTimeout kullanılabilir.
        state.currentProgram++;
      }
    }
  },
};

export default mutations;
