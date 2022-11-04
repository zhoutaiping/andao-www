import defaultSettings from "@public/settings";

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings;

const state = {
  theme: "#1664FF",
  showSettings: showSettings,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  domain_suffix: "",
  default_host: "",
  default_api: "",
  signIn: "", //"https://account.axisnow.xyz/user/sign-in",
  signOutUrl: "", //"https://account.axisnow.xyz/user/sign-out",
};

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  },
  DOMAIN_SUFFIX: (state, domain_suffix) => {
    state.domain_suffix = domain_suffix;
    if (domain_suffix) {
      state.default_api = "https://account." + domain_suffix;
      state.default_host = "console." + domain_suffix;
      state.signIn = "https://account." + domain_suffix + "/user/sign-in";
      state.signOutUrl = "https://account." + domain_suffix + "/user/sign-out";
    }
  },
  USER_ROLE_TYPE_LIST: (state, list) => {
    state.user_role_type_list = list;
  },
};

const actions = {
  changeSetting({ commit }, data) {
    commit("CHANGE_SETTING", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
