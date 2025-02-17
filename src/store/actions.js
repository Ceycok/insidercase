const actions = {
  GenerateGame({ commit }) {
    commit("GenerateHorses");
    commit("GeneratePrograms");
    commit("SetIsRunning", false);
    commit("SetCurrentProgram", 0);
    commit("ResetResults");
  },
};

export default actions;
