// import * as constants from './constants';
import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
            });
        case constants.ADD_HOME_LIST:
            return state.merge({
                articleList: state.get("articleList").concat(action.list),
                articlePage: action.nextPage,
            });

        case constants.TOGGLE_SCROLL_SHOW:
            return state.merge({
                showScroll: action.show
            });

        default:
            console.log("No " + action.type + " found.");
            break;
    }
    return state;
};