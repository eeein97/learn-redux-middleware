/*
function myLogger(store){
    return function(next) {
        return function(action) {
            //하고싶은 작업
        }
    }
}

아래와 동일한 작업 
*/

const myLogger = store => next => action => {
    //액션을 출력
    console.log(action);
    //다음 미들웨어 또는 리듀서에게 액션을 전달
    const result = next(action);
    //반환하는 값이 dispatch(action)결과물이 됨
    console.log(store.getState());
    return result;
}
export default myLogger;