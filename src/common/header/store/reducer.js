import * as constants from './constants';
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    // immutable array
    list: [],
    // 换一换 page
    page: 1,
    totalPage: 1
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.SEARCH_FOCUS:
            // 使用了 immutable 以后修改state
            return state.set('focused', true)
                // 原始方法修改state
                // return {
                //     focused: true,
                // };

        case constants.SEARCH_BLUR:
            return state.set('focused', false)
                // return {
                //     focused: false,
                // };
        case constants.CHANGE_LIST:
            // return state.set('list', action.data).set('totalPage', action.totalPage)
            // 使用merge可以同时改变多个数据内容，性能也更高
            return state.merge({
                list: action.data,
                totalPage: action.totalPage

            })

        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true)

        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false)

        case constants.CHANGE_PAGE:
            // 将store中的页码替换成新的页码
            return state.set('page', action.page)

        default:
            console.log("No " + action.type + " found.");
            break;
    }
    return state;
};